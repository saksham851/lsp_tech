// src/components/ui/PageLoader.jsx
import { motion } from 'framer-motion'
import logo from '../../assets/logo.webp'

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-dark z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'backOut' }}
          className="relative"
        >
          <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-glow-red flex items-center justify-center bg-white/5">
            <img
              src={logo}
              alt="LSP Technologies"
              className="w-full h-full object-contain"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          </div>
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-2xl bg-brand-red/20 animate-ping" />
        </motion.div>

        {/* Company name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-center"
        >
          <p className="text-white font-semibold text-lg tracking-wide">LSP Technologies</p>
          <p className="text-gray-400 text-xs tracking-widest uppercase mt-0.5">Inc.</p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="w-48"
        >
          <div className="h-1 bg-dark-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
              className="h-full bg-brand-red rounded-full"
            />
          </div>
          <p className="text-center text-gray-mid text-xs mt-3 tracking-widest uppercase">Loading</p>
        </motion.div>
      </div>
    </div>
  )
}

export default PageLoader
