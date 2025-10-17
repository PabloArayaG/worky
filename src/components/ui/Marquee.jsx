import React from 'react'
import { cn } from '../../lib/utils'

const Marquee = ({
  children,
  reverse = false,
  pauseOnHover = false,
  className,
}) => {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--duration:40s] [--gap:1rem]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 justify-around gap-[--gap] animate-marquee",
          reverse && "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `marquee var(--duration) linear infinite`,
        }}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 justify-around gap-[--gap] animate-marquee",
          reverse && "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `marquee var(--duration) linear infinite`,
        }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  )
}

// Add these styles to your index.css
const marqueeStyles = `
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

@keyframes marquee-reverse {
  from {
    transform: translateX(calc(-100% - var(--gap)));
  }
  to {
    transform: translateX(0);
  }
}

.animate-marquee {
  animation: marquee var(--duration) linear infinite;
}

.animate-marquee-reverse {
  animation: marquee-reverse var(--duration) linear infinite;
}
`

export default Marquee

