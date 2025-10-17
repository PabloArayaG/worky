# Worky Landing Page 🚀

Landing page de validación para Worky - Portal de empleo profesional.

## Stack Tecnológico

- **React 18** - Framework UI
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones fluidas
- **Aceternity UI** - Componentes con efectos profesionales de próxima generación

## Características

✅ Hero section con animaciones de gradiente  
✅ Formulario de lista de espera validado  
✅ Sección de mockup de la app  
✅ Testimonios con efecto marquee  
✅ Footer con redes sociales  
✅ 100% Responsive  
✅ Animaciones profesionales  
✅ Dark mode ready  

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Deploy en Vercel

1. Sube tu repositorio a GitHub
2. Importa el proyecto en Vercel
3. Vercel detectará automáticamente Vite
4. Deploy automático ✨

O usa el CLI de Vercel:

```bash
npm i -g vercel
vercel
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── Hero.jsx           # Hero section principal
│   ├── WaitlistForm.jsx   # Formulario de lista de espera
│   ├── AppMockup.jsx      # Mockup de la aplicación
│   ├── Testimonials.jsx   # Testimonios con marquee
│   ├── Footer.jsx         # Footer con redes sociales
│   └── ui/                # Componentes UI reutilizables
│       ├── AnimatedGradientText.jsx
│       ├── ShimmerButton.jsx
│       ├── DotPattern.jsx
│       └── Marquee.jsx
├── lib/
│   └── utils.js          # Utilidades (cn helper)
├── App.jsx               # Componente principal
├── main.jsx             # Entry point
└── index.css            # Estilos globales
```

## Personalización

### Colores
Modifica las variables CSS en `src/index.css`:

```css
:root {
  --primary: 262 83% 58%;  /* Purple */
  --background: 0 0% 100%; /* White */
  /* ... más colores */
}
```

### Formulario
El formulario actualmente loguea los datos. Para conectarlo a un backend, modifica `WaitlistForm.jsx`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  // Envía a tu API/Google Sheets/Mailchimp/etc
  await fetch('/api/waitlist', {
    method: 'POST',
    body: JSON.stringify(formData)
  })
}
```

## Próximos Pasos

- [ ] Conectar formulario a base de datos
- [ ] Agregar Google Analytics
- [ ] SEO optimization
- [ ] Open Graph tags
- [ ] Email automation
- [ ] A/B testing

## Licencia

MIT

