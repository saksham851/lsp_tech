// src/components/sections/WhyChoose.jsx
import { motion } from 'framer-motion'
import { useScrollAnimation, staggerContainer, staggerItem, fadeUp } from '../../hooks/useScrollAnimation'
import SectionHeader from '../ui/SectionHeader'
import { FiZap, FiShield, FiUsers, FiGlobe, FiHeart, FiClock } from 'react-icons/fi'

const features = [
  {
    icon: FiZap,
    title: 'GHL Certified Expert',
    description: 'I am a GoHighLevel power user — from snapshots and funnels to SaaS mode and white-label setups. I know GHL inside out and deliver results fast.',
    gradient: 'from-yellow-500/20 to-orange-500/5',
    iconBg: 'bg-yellow-500/10',
    iconColor: 'text-yellow-400',
  },
  {
    icon: FiShield,
    title: 'Automation That Works',
    description: 'My N8N, Make, and Zapier workflows are built to run 24/7 without breaking. I design for reliability, error handling, and zero manual intervention.',
    gradient: 'from-blue-500/20 to-cyan-500/5',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: FiUsers,
    title: 'Direct Communication',
    description: 'No account managers or junior devs. You work directly with me. This means faster communication, no misaligned expectations, and rapid implementation.',
    gradient: 'from-purple-500/20 to-violet-500/5',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
  },
  {
    icon: FiGlobe,
    title: 'Remote & Flexible',
    description: 'I work with clients across North America, Europe, and Asia — delivering world-class digital services and adapting to your schedule and time zone.',
    gradient: 'from-green-500/20 to-emerald-500/5',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-400',
  },
  {
    icon: FiHeart,
    title: 'Client First Always',
    description: 'I measure success by your results, not just my deliverables. Regular check-ins, transparent communication, and a genuine investment in your growth.',
    gradient: 'from-rose-500/20 to-pink-500/5',
    iconBg: 'bg-rose-500/10',
    iconColor: 'text-rose-400',
  },
  {
    icon: FiClock,
    title: 'Fast Turnaround',
    description: 'I use agile sprints and milestone-based delivery to keep projects on track. Fast delivery, no missed deadlines, no surprise costs. Just reliable execution.',
    gradient: 'from-brand-red/20 to-orange-500/5',
    iconBg: 'bg-brand-red/10',
    iconColor: 'text-brand-red',
  },
]

const WhyChoose = () => {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="why-choose" className="section-padding bg-dark-card">
      <div className="container-max" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            tag="Why Me"
            title="Why Businesses Choose Me"
            subtitle="I've earned the trust of 50+ clients by delivering real GHL setups, automation systems, and digital growth — without the agency overhead."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className={`relative rounded-3xl p-8 bg-gradient-to-br ${feature.gradient} border border-white/5 card-hover group overflow-hidden`}
              >
                {/* Number */}
                <div className="absolute top-6 right-6 text-6xl font-black text-white/5 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={feature.iconColor} size={26} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-mid text-sm leading-relaxed">{feature.description}</p>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-3xl border border-brand-red/0 group-hover:border-brand-red/20 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChoose
