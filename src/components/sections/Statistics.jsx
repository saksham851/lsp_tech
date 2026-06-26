// src/components/sections/Statistics.jsx
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered', desc: 'Across web, mobile, ERP & automation', icon: '🚀' },
  { value: 100, suffix: '+', label: 'Happy Clients', desc: 'From startups to enterprises', icon: '🤝' },
  { value: 10, suffix: '+', label: 'Countries Served', desc: 'Global reach from Canadian roots', icon: '🌍' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', desc: 'Measured through repeat business', icon: '⭐' },
]

// Simple animated counter hook
const useCounter = (end, duration = 2000, started = false) => {
  const [count, setCount] = useState(0)
  const startTime = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!started) return
    startTime.current = null

    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp
      const progress = Math.min((timestamp - startTime.current) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [started, end, duration])

  return count
}

const StatCard = ({ stat, index, started }) => {
  const count = useCounter(stat.value, 2000 + index * 200, started)

  return (
    <motion.div
      variants={staggerItem}
      className="text-center group h-full"
    >
      <div className="h-full bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center">
        <div className="text-5xl mb-4 leading-none">{stat.icon}</div>
        <div className="text-5xl font-black text-white mb-2 leading-none tabular-nums">
          {count}{stat.suffix}
        </div>
        <div className="text-white font-semibold text-lg mb-1">{stat.label}</div>
        <div className="text-white/60 text-sm">{stat.desc}</div>
      </div>
    </motion.div>
  )
}

const Statistics = () => {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="statistics" className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-brand relative overflow-hidden">
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-max relative z-10" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            variants={staggerItem}
            className="text-center mb-16"
          >
            <h2 className="text-section font-bold text-white mb-4">
              Numbers That Speak For Themselves
            </h2>
            <p className="text-white/70 text-lg">
              Every metric reflects a real partnership, a real problem solved, a real business transformed.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} started={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Statistics
