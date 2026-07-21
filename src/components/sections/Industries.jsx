// src/components/sections/Industries.jsx
import { motion } from 'framer-motion'
import { useScrollAnimation, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'
import SectionHeader from '../ui/SectionHeader'

const industries = [
  { icon: '🏢', name: 'Digital Agencies', desc: 'White-label GHL, client onboarding automations' },
  { icon: '🛍️', name: 'E-commerce', desc: 'Shopify stores, cart abandonment, inventory sync' },
  { icon: '🏥', name: 'Healthcare & Clinics', desc: 'Appointment reminders, patient intake funnels' },
  { icon: '🎓', name: 'Course Creators', desc: 'Member areas, drip campaigns, Zapier hooks' },
  { icon: '🏋️', name: 'Fitness & Gyms', desc: 'Lead generation funnels, trial booking systems' },
  { icon: '🏠', name: 'Real Estate', desc: 'Property listing sites, buyer/seller lead nurture' },
  { icon: '🛠️', name: 'Home Services', desc: 'Quote requests, review generation, dispatch sync' },
  { icon: '⚖️', name: 'Legal Services', desc: 'Consultation booking, document automation' },
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
            subtitle="We bring deep automation knowledge and GHL expertise across 8+ verticals, delivering systems that respect how your specific industry operates."
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
