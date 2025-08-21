"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface HyperTextProps {
  children: string
  className?: string
  animateOnScroll?: boolean
  delay?: number
}

export function HyperText({ children, className, animateOnScroll = false, delay = 0 }: HyperTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const hackingChars = "01ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ"
  const matrixChars = "0123456789ABCDEF!@#$%^&*()_+-=[]{}|\\:;\"'<>,.?/~`"
  const glitchChars = "█▓▒░▄▀■□▪▫◘◙☻☺♠♣♥♦"

  const animateText = () => {
    if (isAnimating || hasAnimated) return
    setIsAnimating(true)

    const targetText = children
    let currentIndex = 0
    let glitchIntensity = 3

    const interval = setInterval(() => {
      if (currentIndex <= targetText.length) {
        const correctPart = targetText.slice(0, currentIndex)
        let randomPart = ""
        if (currentIndex < targetText.length) {
          const useGlitch = Math.random() > 0.6
          const charSet = useGlitch ? (Math.random() > 0.5 ? hackingChars : glitchChars) : matrixChars

          for (let i = 0; i < Math.min(glitchIntensity, targetText.length - currentIndex); i++) {
            if (Math.random() > 0.4) {
              randomPart += charSet[Math.floor(Math.random() * charSet.length)]
            }
          }
        }

        setDisplayText(correctPart + randomPart)

        if (currentIndex === targetText.length) {
          let finalGlitches = 0
          const finalGlitchInterval = setInterval(() => {
            if (finalGlitches < 3) {
              const glitchText = targetText
                .split("")
                .map((char) =>
                  Math.random() > 0.8 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char,
                )
                .join("")
              setDisplayText(glitchText)
              finalGlitches++
            } else {
              setDisplayText(targetText)
              setIsAnimating(false)
              setHasAnimated(true)
              clearInterval(finalGlitchInterval)
            }
          }, 50)
          clearInterval(interval)
        }

        currentIndex++
        glitchIntensity = Math.max(1, glitchIntensity - 0.1)
      }
    }, 5) // Reduced interval from 8ms to 5ms for faster animation
  }

  useEffect(() => {
    if (!animateOnScroll) {
      setTimeout(() => animateText(), delay)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => animateText(), delay)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [animateOnScroll, delay, hasAnimated])

  return (
    <div
      ref={ref}
      className={cn(
        "font-mono transition-all duration-100",
        "text-shadow-sm filter drop-shadow-sm",
        "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-cyan-500/5 before:to-transparent before:animate-pulse", // Reduced opacity from 10% to 5%
        "relative overflow-hidden",
        className,
      )}
      onMouseEnter={() => !animateOnScroll && animateText()}
      style={{
        textShadow: isAnimating
          ? "0 0 5px currentColor, 0 0 10px currentColor" // Reduced glow intensity from 10px/20px/30px to 5px/10px
          : "0 0 3px currentColor", // Reduced static glow from 5px to 3px
        filter: isAnimating ? "brightness(1.1) contrast(1.05)" : "none", // Reduced brightness and contrast effects
      }}
    >
      {displayText || children}
      {isAnimating && <span className="animate-pulse text-cyan-400 ml-1">|</span>}
    </div>
  )
}
