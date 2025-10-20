import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const roleOptions = [
    { value: 'busco-empleo', label: '💼 Busco empleo' },
    { value: 'busco-talento', label: '🏢 Busco talento para mi empresa' },
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }
    
    if (!formData.role) {
      newErrors.role = 'Por favor selecciona una opción'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setErrors({})
    
    try {
      const response = await fetch('/api/join-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.name.trim(),
          email: formData.email.trim(),
          intent: formData.role,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al procesar la solicitud')
      }

      if (data.ok) {
        setSubmitted(true)
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setFormData({ name: '', email: '', role: '' })
          setSubmitted(false)
        }, 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      
      // Handle specific error cases
      if (error.message.includes('email ya está registrado')) {
        setErrors({ email: 'Este email ya está registrado en nuestra lista de espera' })
      } else {
        setErrors({ 
          general: 'Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo.' 
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="waitlist-form" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-6 md:p-12 shadow-2xl"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-center text-slate-200">
            Únete a la lista de espera
          </h2>
          <p className="text-sm md:text-base text-slate-400 text-center mb-6 md:mb-8">
            Sé de los primeros en experimentar Worky
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-200">¡Genial!</h3>
              <p className="text-slate-400">
                Te hemos añadido a la lista. Te contactaremos pronto.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* General Error Message */}
              {errors.general && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="text-red-400 text-sm text-center">{errors.general}</p>
                </div>
              )}
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${
                    errors.name ? 'border-red-500' : 'border-slate-700/50'
                  } focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all text-slate-200`}
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${
                    errors.email ? 'border-red-500' : 'border-slate-700/50'
                  } focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all text-slate-200`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Role Selection - Custom Dropdown */}
              <div ref={dropdownRef}>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  ¿Qué estás buscando?
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${
                      errors.role ? 'border-red-500' : 'border-slate-700/50'
                    } focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all text-left flex items-center justify-between`}
                  >
                    <span className={formData.role ? 'text-slate-200' : 'text-slate-400'}>
                      {formData.role 
                        ? roleOptions.find(opt => opt.value === formData.role)?.label 
                        : 'Selecciona una opción'}
                    </span>
                    <svg
                      className={`w-5 h-5 text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 w-full mt-2 rounded-xl bg-slate-900 border border-slate-700/50 overflow-hidden shadow-2xl"
                      >
                        {roleOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              setFormData(prev => ({ ...prev, role: option.value }))
                              setIsDropdownOpen(false)
                              if (errors.role) {
                                setErrors(prev => ({ ...prev, role: '' }))
                              }
                            }}
                            className="w-full px-4 py-3 text-left text-slate-200 hover:bg-teal-500/10 hover:text-teal-400 transition-colors flex items-center gap-2"
                          >
                            {option.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {errors.role && (
                  <p className="text-red-500 text-sm mt-1">{errors.role}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl ${
                  isSubmitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:opacity-90 transform hover:scale-[1.02] active:scale-[0.98]'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Procesando...
                  </div>
                ) : (
                  'Unirme ahora'
                )}
              </button>

              <p className="text-xs text-slate-400 text-center">
                Al unirte, aceptas recibir actualizaciones sobre Worky. 
                No spam, lo prometemos.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default WaitlistForm

