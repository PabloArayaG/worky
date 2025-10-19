import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-800 bg-slate-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
              Worky
            </h3>
            <p className="text-slate-400 text-sm">
              La plataforma profesional que conecta talento con oportunidades reales.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
              Nosotros
            </a>
            <button onClick={scrollToForm} className="text-slate-400 hover:text-teal-400 transition-colors">
              Contacto
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center pt-8 border-t border-slate-800">
          <p className="text-slate-400 text-sm">
            © {currentYear} Worky. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

