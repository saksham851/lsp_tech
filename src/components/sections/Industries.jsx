// src/components/sections/Industries.jsx
import { motion } from 'framer-motion'
import { useScrollAnimation, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'
import SectionHeader from '../ui/SectionHeader'

const industries = [
  { icon: '🏭', name: 'Manufacturing', desc: 'ERP, inventory & production management' },
  { icon: '🏥', name: 'Healthcare', desc: 'Patient portals, clinic management systems' },
  { icon: '🎓', name: 'Education', desc: 'LMS platforms, student information systems' },
  { icon: '💳', name: 'Finance', desc: 'Fintech apps, payroll, accounting tools' },
  { icon: '🛒', name: 'Retail', desc: 'E-commerce, POS, inventory automation' },
  { icon: '🚚', name: 'Logistics', desc: 'Fleet management, supply chain software' },
  { icon: '🏗️', name: 'Construction', desc: 'Project management, site tracking tools' },
  { icon: '🏛️', name: 'Government', desc: 'Citizen portals, compliance systems' },
]

const Industries = () => {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="industries" className="section-padding bg-dark-card">
      <div className="container-max" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            tag="Industries"
            title="Sectors We Serve"
            subtitle="We bring deep industry knowledge and technical expertise across 8+ verticals, delivering solutions that respect how each industry operates."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                variants={staggerItem}
                className="glass rounded-3xl p-6 text-center card-hover group border border-white/5 hover:border-brand-red/20 transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                  className="text-5xl mb-4 leading-none"
                >
                  {industry.icon}
                </motion.div>
                <h3 className="text-white font-bold mb-2">{industry.name}</h3>
                <p className="text-gray-mid text-xs leading-relaxed">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Industries
