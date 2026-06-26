// src/components/sections/Technologies.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'
import SectionHeader from '../ui/SectionHeader'
import { technologies, techCategories } from '../../data/technologies'

const Technologies = () => {
  const { ref, inView } = useScrollAnimation()
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? technologies
    : technologies.filter(t => t.category === activeCategory)

  return (
    <section id="technologies" className="section-padding bg-dark-card">
      <div className="container-max" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            tag="Tech Stack"
            title="Technologies We Master"
            subtitle="We work with industry-leading tools and frameworks to build fast, secure, and scalable solutions."
          />

          {/* Category Filter */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {techCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-brand-red text-white shadow-glow-red'
                    : 'glass text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Tech Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
            >
              {filtered.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="glass rounded-2xl p-5 text-center border border-white/5 hover:border-white/20 transition-all duration-300 group cursor-default"
                >
                  <div
                    className="text-3xl mb-3 leading-none"
                    style={{ filter: 'drop-shadow(0 0 8px ' + tech.color + '40)' }}
                  >
                    {tech.icon}
                  </div>
                  <div className="text-white/80 text-xs font-semibold group-hover:text-white transition-colors">
                    {tech.name}
                  </div>
                  <div className="text-gray-mid text-xs mt-0.5">{tech.category}</div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies
