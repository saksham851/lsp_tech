// src/components/sections/Portfolio.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'
import SectionHeader from '../ui/SectionHeader'
import { projects, projectCategories } from '../../data/portfolio'
import { FiArrowRight, FiExternalLink } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ProjectCard = ({ project }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4 }}
    className="group relative rounded-3xl overflow-hidden bg-dark-card border border-dark-border card-hover"
  >
    {/* Image */}
    <div className="relative h-52 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        width="400"
        height="208"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-card/90 via-dark-card/20 to-transparent" />

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 px-3 py-1 bg-brand-red text-white text-xs font-bold rounded-full">
          Featured
        </div>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center shadow-glow-red">
          <FiExternalLink className="text-white" size={18} />
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="text-xs font-medium text-brand-red mb-2">{project.category}</div>
      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-brand-red transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-mid text-sm leading-relaxed mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map(t => (
          <span key={t} className="px-2.5 py-1 text-xs font-medium glass text-white/60 rounded-full border border-white/10">
            {t}
          </span>
        ))}
      </div>

      <button className="flex items-center gap-2 text-brand-red text-sm font-semibold hover:gap-3 transition-all duration-200">
        View Details <FiArrowRight size={14} />
      </button>
    </div>
  </motion.div>
)

const Portfolio = () => {
  const { ref, inView } = useScrollAnimation(0.05)
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="section-padding bg-dark">
      <div className="container-max" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            tag="Our Work"
            title="Projects We're Proud Of"
            subtitle="Real solutions for real businesses. Every project is built with care, precision, and a focus on measurable outcomes."
          />

          {/* Filters */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-brand-red text-white shadow-glow-red'
                    : 'glass text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div variants={staggerItem} className="text-center mt-12">
            <Link to="/portfolio" className="btn-outline">
              View All Projects <FiArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
