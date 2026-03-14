"use client"

import { useState, useEffect } from "react"

interface AnimatedMediaProps {
  src: string
  alt: string
  className?: string
  type?: "gif" | "video" | "tenor"
  tenorId?: string
}

export function AnimatedMedia({ src, alt, className = "", type = "gif", tenorId }: AnimatedMediaProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return <div className={`${className} bg-gray-200 animate-pulse`}></div>
  }

  if (type === "tenor") {
    // For Tenor GIFs, we can embed them directly using their embed URL
    return (
      <div className={`${className} flex items-center justify-center overflow-hidden`}>
        <img src={src || "/placeholder.svg"} alt={alt} className="max-w-full max-h-full object-contain" />
      </div>
    )
  }

  if (type === "video") {
    return (
      <video autoPlay loop muted playsInline className={className} title={alt}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }

  // For regular GIFs, use a regular img tag to preserve animation
  return <img src={src || "/placeholder.svg"} alt={alt} className={className} />
}
