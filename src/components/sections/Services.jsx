// src/components/sections/Services.jsx
import { useState, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'
import SectionHeader from '../ui/SectionHeader'
import { GridSkeleton } from '../ui/SkeletonLoader'
import { services } from '../../data/services'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const tagColors = {
  'Core': 'bg-brand-red/10 text-brand-red border-brand-red/20',
  'Popular': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Enterprise': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Trending': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Hot': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Creative': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  'Ongoing': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
}

const ServiceCard = ({ service, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={staggerItem}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-dark-card border border-dark-border rounded-3xl p-7 card-hover group overflow-hidden"
    >
      {/* Background glow on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl pointer-events-none`}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10">
        {/* Icon + Tag */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-red/10 transition-colors duration-300">
            <service.icon className="text-white/60 group-hover:text-brand-red transition-colors duration-300" size={24} />
          </div>
          <span className={`text-xs font-medium px-3 py-1 rounded-full border ${tagColors[service.tag] || tagColors['Core']}`}>
            {service.tag}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-white transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-mid text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Learn more */}
        <div className="flex items-center gap-2 text-brand-red text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          Learn More <FiArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  )
}

const Services = () => {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="services" className="section-padding bg-dark">
      <div className="container-max" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            tag="What We Build"
            title="Services Tailored to Your Business"
            subtitle="From a simple business website to a full ERP system — we build exactly what you need, nothing more, nothing less."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          <motion.div
            variants={staggerItem}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-outline">
              Explore All Services <FiArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
