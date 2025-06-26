'use client'
import React, { ReactNode, useEffect, useRef, useState } from 'react'

import { useListenerTheme } from '@/widgets/providers/theme/useListenerTheme'

export const MouseEffect = ({ children }: { children: ReactNode }) => {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])
  const theme = useListenerTheme()
  const trailId = useRef(0)

  const handleMouseMove = (event: React.MouseEvent) => {
    const x = event.clientX
    const y = event.clientY
    setTrail((prev) => [...prev, { x, y, id: trailId.current++ }])
  }

  useEffect(() => {
    if (trail.length > 0) {
      const timeout = setTimeout(() => {
        setTrail((prev) => prev.slice(1))
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [trail])

  return (
    <div className="h-full" onMouseMove={handleMouseMove}>
      <div className="fixed h-full w-full pointer-events-none z-[11] overflow-hidden">
        {theme === 'dark' &&
          trail.map(({ x, y, id }) => (
            <span
              key={id}
              style={{
                position: 'fixed',
                top: y,
                left: x,
                width: 200,
                height: 200,
                marginLeft: -100,
                marginTop: -100,
                borderRadius: '50%',
                pointerEvents: 'none',
                background: `
                  radial-gradient(circle at 30% 30%, rgba(31, 41, 55, 0.25), transparent 60%),
                  radial-gradient(circle at 70% 70%, rgba(31, 41, 55, 0.15), transparent 80%),
                  radial-gradient(circle at 50% 50%, rgba(31, 41, 55, 0.35), transparent 50%)
                `,
                filter: 'blur(20px)',
                mixBlendMode: 'screen',
                opacity: 0.6,
                animation: 'smokeFade 1s forwards',
              }}
            />
          ))}
      </div>
      {children}

      <style jsx>{`
        @keyframes smokeFade {
          0% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

type Particle = {
  x: number
  y: number
  size: number
  alpha: number
  vx: number
  vy: number
}

export const MouseSmokeEffect = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const mousePos = useRef({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)
  const moveTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    window.addEventListener('resize', handleResize)

    // Добавляем частицу, только если мышь движется
    const addParticle = () => {
      if (!isMoving) return // если мышь не движется - не создаём новые частицы

      const size = 20 + Math.random() * 30
      const angle = Math.random() * 2 * Math.PI
      const speed = 0.5 + Math.random() * 1.5
      particles.current.push({
        x: mousePos.current.x,
        y: mousePos.current.y,
        size,
        alpha: 0.4 + Math.random() * 0.3,
        vx: Math.cos(angle) * speed * 0.3,
        vy: Math.sin(angle) * speed * 0.3,
      })
      if (particles.current.length > 80) {
        particles.current.shift()
      }
    }

    const render = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)

      addParticle()

      particles.current.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        p.alpha -= 0.01
        p.size += 0.3

        if (p.alpha <= 0) {
          particles.current.splice(i, 1)
          return
        }

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          p.size * 0.1,
          p.x,
          p.y,
          p.size
        )
        gradient.addColorStop(0, `rgba(150, 150, 150, ${p.alpha})`)
        gradient.addColorStop(1, 'rgba(150, 150, 150, 0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMoving])

  const handleMouseMove = (e: React.MouseEvent) => {
    mousePos.current = { x: e.clientX, y: e.clientY }
    setIsMoving(true)

    // Сбрасываем таймер очистки, если мышь движется
    if (moveTimeout.current) {
      clearTimeout(moveTimeout.current)
    }
    // Через 300 мс после последнего движения считаем, что мышь остановилась
    moveTimeout.current = setTimeout(() => {
      setIsMoving(false)
    }, 10)
  }

  return (
    <div onMouseMove={handleMouseMove} className="relative h-full w-full">
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 11,
          width: '100%',
          height: '100%',
        }}
      />
      {children}
    </div>
  )
}
