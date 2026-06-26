// src/components/sections/Hero.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

const floatingOrbs = [
  { w: 500, h: 500, top: '-10%', left: '-10%', delay: 0, opacity: 0.15 },
  { w: 400, h: 400, top: '50%', right: '-5%', delay: 2, opacity: 0.1 },
  { w: 300, h: 300, bottom: '10%', left: '30%', delay: 4, opacity: 0.08 },
]

const techBadges = [
  { name: 'React', emoji: '⚛️' },
  { name: 'Node.js', emoji: '🟢' },
  { name: 'AWS', emoji: '☁️' },
  { name: 'n8n', emoji: '🔗' },
  { name: 'AI / ML', emoji: '🤖' },
  { name: 'ERP', emoji: '📊' },
  { name: 'Mobile Apps', emoji: '📱' },
  { name: 'TypeScript', emoji: '🔷' },
  { name: 'PostgreSQL', emoji: '🐘' },
  { name: 'Docker', emoji: '🐋' },
]

const stats = [
  { value: '50+', label: 'Projects Delivered', icon: '🚀' },
  { value: '100+', label: 'Happy Clients', icon: '🤝' },
  { value: '10+', label: 'Countries Served', icon: '🌍' },
  { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
]

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-dark">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-red/10 via-transparent to-transparent" style={{ backgroundPosition: '80% 50%' }} />

      {/* Glowing orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-brand-red pointer-events-none"
          style={{
            width: orb.w,
            height: orb.h,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            opacity: orb.opacity,
            filter: 'blur(80px)',
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [orb.opacity, orb.opacity * 1.5, orb.opacity] }}
          transition={{ duration: 8, repeat: Infinity, delay: orb.delay }}
        />
      ))}

      {/* Main content */}
      <div className="flex-1 flex items-center">
        <div className="container-max px-4 md:px-8 relative z-10 pt-32 pb-16">
          <div className="max-w-5xl">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex"
            >
              <span className="tag">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                🍁 Rooted in Canada. Built for the World.
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-hero font-black text-white leading-none tracking-tight mb-6"
            >
              Building{' '}
              <span className="relative">
                <span className="text-gradient-red">Products.</span>
              </span>
              <br />
              Powering{' '}
              <span className="relative">
                <span className="text-gradient-red">Possibilities.</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-brand-red rounded-full origin-left"
                />
              </span>
            </motion.h1>

            {/* Sub Heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed mb-10"
            >
              We help small businesses grow with custom software, web apps, mobile applications,
              ERP systems, and intelligent workflow automation powered by n8n and AI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Get Started Free <FiArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="btn-outline text-base px-8 py-4">
                <FiPlay size={16} /> View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Marquee Tech Ticker ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 py-4 overflow-hidden"
        style={{ borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0A0A0A, transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0A0A0A, transparent)' }} />

        <div className="flex" style={{ animation: 'marquee 28s linear infinite' }}>
          {[...techBadges, ...techBadges].map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 mx-6 shrink-0"
            >
              <span className="text-base">{badge.emoji}</span>
              <span className="text-white/50 text-sm font-semibold tracking-wide whitespace-nowrap">{badge.name}</span>
              <span className="w-1 h-1 rounded-full bg-brand-red/40 ml-4" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Stats Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group py-7 px-6 text-center relative cursor-default"
              style={{ background: 'rgba(14,14,14,0.95)' }}
            >
              {/* Subtle top red glow on hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/0 to-transparent group-hover:via-brand-red/60 transition-all duration-500" />

              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-black text-brand-red leading-none">{stat.value}</div>
              <div className="text-white/40 text-xs mt-1.5 font-medium tracking-wide uppercase">{stat.label}</div>

              {/* Right separator (except last) */}
              {i < stats.length - 1 && (
                <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-white/5" />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Marquee keyframe */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

export default Hero
