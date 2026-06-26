// src/components/ui/SectionHeader.jsx
import { motion } from 'framer-motion'
import { fadeUp } from '../../hooks/useScrollAnimation'

const SectionHeader = ({ tag, title, subtitle, center = true, light = false }) => {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      {tag && (
        <motion.div variants={fadeUp} className="mb-4 inline-flex">
          <span className="tag">{tag}</span>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className={`text-section font-bold leading-tight tracking-tight mb-4 ${
          light ? 'text-white' : 'text-white'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''} ${
            light ? 'text-white/70' : 'text-gray-mid'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        variants={fadeUp}
        className={`divider mt-6 ${center ? 'mx-auto' : ''}`}
      />
    </div>
  )
}

export default SectionHeader
