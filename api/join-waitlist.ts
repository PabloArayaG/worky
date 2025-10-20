import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import type { VercelRequest, VercelResponse } from '@vercel/node'

// Types
interface WaitlistData {
  full_name: string
  email: string
  intent: string
}

interface SupabaseWaitlistRecord {
  full_name: string
  email: string
  intent: string
  created_at?: string
}

// Initialize clients
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY!)

// Email template
const getWelcomeEmailHtml = (name: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>¡Bienvenido a Worky Latam!</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0f172a; color: #e2e8f0;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 40px; border: 1px solid #334155;">
      <div style="text-align: center; margin-bottom: 32px;">
        <h1 style="color: #10b981; font-size: 32px; margin: 0; font-weight: bold;">Worky Latam</h1>
        <div style="width: 60px; height: 4px; background: linear-gradient(90deg, #10b981, #34d399); margin: 16px auto; border-radius: 2px;"></div>
      </div>
      
      <h2 style="color: #f1f5f9; font-size: 24px; margin-bottom: 16px;">¡Hola ${name}! 👋</h2>
      
      <p style="color: #cbd5e1; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
        ¡Gracias por unirte a la lista de espera de <strong style="color: #10b981;">Worky Latam</strong>!
      </p>
      
      <p style="color: #cbd5e1; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
        Estás entre los primeros en conocer sobre nuestra nueva red profesional donde el talento y las empresas se encuentran para crear oportunidades reales.
      </p>
      
      <div style="background: #1e293b; border-radius: 12px; padding: 24px; margin: 24px 0; border-left: 4px solid #10b981;">
        <h3 style="color: #10b981; font-size: 18px; margin: 0 0 12px 0;">¿Qué viene ahora?</h3>
        <ul style="color: #cbd5e1; margin: 0; padding-left: 20px;">
          <li style="margin-bottom: 8px;">Te notificaremos cuando lancemos la plataforma</li>
          <li style="margin-bottom: 8px;">Tendrás acceso prioritario a todas las funcionalidades</li>
          <li style="margin-bottom: 8px;">Recibirás actualizaciones exclusivas sobre nuestro progreso</li>
        </ul>
      </div>
      
      <p style="color: #cbd5e1; font-size: 16px; line-height: 1.6; margin-bottom: 32px;">
        Mientras tanto, síguenos en nuestras redes sociales para estar al día con las últimas novedades.
      </p>
      
      <div style="text-align: center; margin-top: 32px;">
        <p style="color: #64748b; font-size: 14px; margin: 0;">
          Gracias por confiar en nosotros,<br>
          <strong style="color: #10b981;">El equipo de Worky Latam</strong>
        </p>
      </div>
    </div>
    
    <div style="text-align: center; margin-top: 24px;">
      <p style="color: #64748b; font-size: 12px; margin: 0;">
        Este correo fue enviado porque te registraste en nuestra lista de espera.<br>
        Si no fuiste tú, puedes ignorar este mensaje.
      </p>
    </div>
  </div>
</body>
</html>
`

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Validate request body
    const { full_name, email, intent }: WaitlistData = req.body

    if (!full_name || !email || !intent) {
      return res.status(400).json({ 
        error: 'Missing required fields: full_name, email, intent' 
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    // Validate intent
    const validIntents = ['busco-empleo', 'busco-talento']
    if (!validIntents.includes(intent)) {
      return res.status(400).json({ error: 'Invalid intent value' })
    }

    // Prepare data for Supabase
    const waitlistRecord: SupabaseWaitlistRecord = {
      full_name: full_name.trim(),
      email: email.toLowerCase().trim(),
      intent,
      created_at: new Date().toISOString()
    }

    // Insert into Supabase
    const { data, error: supabaseError } = await supabase
      .from('waitlist')
      .insert([waitlistRecord])
      .select()

    if (supabaseError) {
      console.error('Supabase error:', supabaseError)
      
      // Handle unique constraint violation (duplicate email)
      if (supabaseError.code === '23505') {
        return res.status(409).json({ 
          error: 'Este email ya está registrado en nuestra lista de espera' 
        })
      }
      
      throw new Error(`Supabase error: ${supabaseError.message}`)
    }

    // Send welcome email
    try {
      await resend.emails.send({
        from: process.env.EMAIL_FROM!,
        to: [email],
        subject: '¡Bienvenido a Worky Latam! 🚀',
        html: getWelcomeEmailHtml(full_name),
      })
    } catch (emailError) {
      console.error('Email sending error:', emailError)
      // Don't fail the request if email fails, just log it
      // The user is still successfully added to waitlist
    }

    // Return success response
    return res.status(200).json({ ok: true })

  } catch (error) {
    console.error('Handler error:', error)
    return res.status(500).json({ 
      error: 'Internal server error' 
    })
  }
}
