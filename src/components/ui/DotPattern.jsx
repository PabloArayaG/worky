import React from 'react'
import { cn } from '../../lib/utils'

const DotPattern = ({ className }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,transparent_65%)] [mask-image:radial-gradient(ellipse_at_center,white,transparent_85%)]",
        className
      )}
      style={{
        backgroundImage: `radial-gradient(circle, rgba(168, 85, 247, 0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }}
    />
  )
}

export default DotPattern

