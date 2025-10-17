import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Tag = 'button',
  onClick,
  duration = 1,
}) => {
  const [hovered, setHovered] = useState(false)
  
  return (
    <Tag
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        'relative p-[1px] overflow-hidden',
        containerClassName
      )}
      style={{
        cursor: 'pointer',
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"
        style={{
          animation: `spin ${duration}s linear infinite`,
        }}
      />
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className={cn(
          'relative z-10 px-8 py-4 rounded-full text-base font-semibold backdrop-blur-none',
          className
        )}
        style={{
          backgroundColor: '#0a1628',
        }}
      >
        {children}
      </motion.div>
    </Tag>
  )
}

