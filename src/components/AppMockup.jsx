import React from 'react'
import { motion } from 'framer-motion'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const AppMockup = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-teal-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: 'Perfil profesional',
      description: 'Crea un perfil que destaque tus habilidades y experiencia única',
      header: <SkeletonOne />,
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-emerald-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'Match inteligente',
      description: 'Conecta con empresas que buscan exactamente tu perfil',
      header: <SkeletonTwo />,
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Oportunidades reales',
      description: 'Solo ofertas verificadas de empresas serias',
      header: <SkeletonThree />,
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-200">
            Una plataforma diseñada para{' '}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
              el talento
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Conecta tu talento con oportunidades que realmente importan
          </p>
        </motion.div>

        {/* Bento Grid Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BentoGrid className="mb-16">
            {features.map((feature, i) => (
              <BentoGridItem
                key={i}
                title={feature.title}
                description={feature.description}
                header={feature.header}
                icon={feature.icon}
                className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
              />
            ))}
          </BentoGrid>
        </motion.div>

        {/* Mockup Display */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl blur-3xl opacity-20" />
          
          {/* Mockup container */}
          <div className="relative bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-8 shadow-2xl overflow-hidden">
            {/* Browser bar */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            {/* Mockup content */}
            <div className="aspect-video bg-gradient-to-br from-cyan-600/10 via-blue-600/10 to-sky-600/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
              
              <div className="relative z-10 text-center px-4">
                <div className="inline-block p-4 bg-teal-600/10 rounded-2xl mb-4 border border-teal-500/20">
                  <svg
                    className="w-16 h-16 text-teal-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-200">Próximamente</h3>
                <p className="text-slate-400">
                  Estamos trabajando en algo increíble
                </p>
              </div>

              {/* Floating cards */}
              <FloatingCard delay={0} className="top-10 left-10" />
              <FloatingCard delay={1} className="bottom-10 right-10" reverse />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Skeleton components for Bento Grid
// INSTRUCCIONES: Para usar ilustraciones propias:
// 1. Ve a https://storyset.com o https://undraw.co
// 2. Descarga 3 ilustraciones SVG que te gusten
// 3. Guárdalas en public/ como: illustration-1.svg, illustration-2.svg, illustration-3.svg
// 4. Cambia las src a: "/illustration-1.svg", "/illustration-2.svg", "/illustration-3.svg"
// 5. Descomenta el código de ilustraciones y comenta las fotos

const SkeletonOne = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
    {/* FOTOS (comentadas) */}
    {/* <img 
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80" 
      alt="Profesionales trabajando"
      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-slate-800/60"></div> */}
    
    {/* ILUSTRACIONES */}
    <div className="flex items-center justify-center w-full h-full p-8 bg-gradient-to-br from-slate-100 to-slate-200">
      <img 
        src="/undraw_preferences-popup_cru5.svg" 
        alt="Perfil profesional"
        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
      />
    </div>
  </div>
)

const SkeletonTwo = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
    {/* FOTOS (comentadas) */}
    {/* <img 
      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80" 
      alt="Equipo colaborando"
      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-slate-800/60"></div> */}
    
    {/* ILUSTRACIONES */}
    <div className="flex items-center justify-center w-full h-full p-8 bg-gradient-to-br from-slate-100 to-slate-200">
      <img 
        src="/undraw_video-call_i5de.svg" 
        alt="Match inteligente"
        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
      />
    </div>
  </div>
)

const SkeletonThree = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
    {/* FOTOS (comentadas) */}
    {/* <img 
      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop&q=80" 
      alt="Reunión profesional"
      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-slate-800/60"></div> */}
    
    {/* ILUSTRACIONES */}
    <div className="flex items-center justify-center w-full h-full p-8 bg-gradient-to-br from-slate-100 to-slate-200">
      <img 
        src="/undraw_choose_5kz4.svg" 
        alt="Oportunidades reales"
        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
      />
    </div>
  </div>
)

const FloatingCard = ({ delay = 0, className, reverse = false }) => (
  <motion.div
    animate={{
      y: reverse ? [0, 10, 0] : [0, -10, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`absolute w-32 h-24 bg-slate-900/60 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-lg p-3 ${className}`}
  >
    <div className={`w-8 h-8 ${reverse ? 'bg-emerald-500/30' : 'bg-teal-500/30'} rounded-full mb-2`} />
    <div className="h-2 bg-slate-700 rounded w-3/4 mb-1" />
    <div className="h-2 bg-slate-700 rounded w-1/2" />
  </motion.div>
)

export default AppMockup

