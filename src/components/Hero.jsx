import React from 'react'
import { motion } from 'framer-motion'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { Spotlight } from './ui/Spotlight'
import { HoverBorderGradient } from './ui/HoverBorderGradient'
import { FlipWords } from './ui/FlipWords'

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const words = ["talento", "innovación", "trabajo"]

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-8 pb-0 overflow-hidden">
      {/* Radial Gradient Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-block"
        >
          <div className="relative inline-flex overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10b981_0%,#34d399_50%,#10b981_100%)]" />
            <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0a1628] px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl">
              🚀 Próximamente: La nueva red profesional
            </div>
          </div>
        </motion.div>

        {/* Main Heading with Text Generate Effect */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center px-2 w-full mx-auto leading-tight">
            <div>
              <div className="block text-white mb-2 whitespace-nowrap">Worky Latam</div>
              <div className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-500 bg-clip-text text-transparent">
                <div className="block md:whitespace-nowrap">La nueva red profesional</div>
                <div className="block md:whitespace-nowrap">donde talentos y empresas conectan</div>
              </div>
            </div>
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-lg text-slate-300 mb-6 md:mb-8 max-w-3xl md:max-w-5xl mx-auto leading-relaxed px-4"
        >
          <span className="md:hidden">
            Worky Latam es la nueva red profesional donde talento y empresas se conectan para crear oportunidades reales.
            <br className="mb-2" />
            Únete a la lista de espera y sé parte desde el día uno.
          </span>
          <span className="hidden md:inline">
            Worky Latam es la nueva red profesional donde talento y empresas se conectan para crear oportunidades reales. <br />
            Únete a la lista de espera y sé parte desde el día uno.
          </span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm md:text-xl text-slate-300 mb-6 max-w-xs sm:max-w-sm md:max-w-4xl mx-auto italic px-4 md:whitespace-nowrap leading-relaxed"
        >
          Forma parte del grupo que está dando forma a <span className="font-semibold text-emerald-400">Worky Latam</span> desde el día uno.
        </motion.p>

        {/* CTA Button with Hover Border Gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <HoverBorderGradient
            onClick={scrollToForm}
            containerClassName="rounded-full"
            className="bg-[#0a1628] text-white flex items-center space-x-2"
            duration={3}
          >
            <span>Unirme a la lista de espera</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </HoverBorderGradient>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '100%', label: 'Enfocado en talento' },
            { value: '+10 rubros', label: 'Profesionales de tecnología, diseño, arquitectura, legal y más' },
            { value: '24/7', label: 'Oportunidades reales' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 md:p-8 rounded-2xl bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 hover:border-emerald-500/50 transition-all"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-3 md:mb-4">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm lg:text-base text-slate-400 leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

