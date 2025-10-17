import React from 'react'
import { cn } from '../../lib/utils'

const ShimmerButton = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative inline-flex h-14 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 font-semibold text-white transition-all hover:scale-105 active:scale-95 overflow-hidden",
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <svg
          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
      </span>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
    </button>
  )
}

export default ShimmerButton

