// src/components/sections/WhyChoose.jsx
import { motion } from 'framer-motion'
import { useScrollAnimation, staggerContainer, staggerItem, fadeUp } from '../../hooks/useScrollAnimation'
import SectionHeader from '../ui/SectionHeader'
import { FiZap, FiShield, FiUsers, FiGlobe, FiHeart, FiClock } from 'react-icons/fi'

const features = [
  {
    icon: FiZap,
    title: 'Innovation Driven',
    description: 'We stay ahead of the curve — adopting AI, automation, and cloud-native technologies before they become mainstream. Your business gets tomorrow\'s tools today.',
    gradient: 'from-yellow-500/20 to-orange-500/5',
    iconBg: 'bg-yellow-500/10',
    iconColor: 'text-yellow-400',
  },
  {
    icon: FiShield,
    title: 'Built for Quality',
    description: 'Every line of code is reviewed, tested, and deployed with CI/CD pipelines. We don\'t ship until it\'s bulletproof. Your software works when it matters most.',
    gradient: 'from-blue-500/20 to-cyan-500/5',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: FiUsers,
    title: 'Reliable Team',
    description: 'Senior developers, experienced designers, and certified cloud architects — all under one roof. You get a full team without the overhead of hiring one.',
    gradient: 'from-purple-500/20 to-violet-500/5',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
  },
  {
    icon: FiGlobe,
    title: 'Global Solutions',
    description: 'Proudly Canadian, globally capable. We\'ve delivered projects across North America, Europe, and Asia — bringing world-class expertise to businesses of all sizes.',
    gradient: 'from-green-500/20 to-emerald-500/5',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-400',
  },
  {
    icon: FiHeart,
    title: 'Client First Always',
    description: 'We measure success by your results, not just our deliverables. Regular check-ins, transparent communication, and a genuine investment in your growth.',
    gradient: 'from-rose-500/20 to-pink-500/5',
    iconBg: 'bg-rose-500/10',
    iconColor: 'text-rose-400',
  },
  {
    icon: FiClock,
    title: 'On Time. Every Time.',
    description: 'We use agile sprints and milestone-based delivery to keep projects on track. No missed deadlines, no surprise costs. Just reliable execution.',
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
            tag="Why LSP"
            title="Why Businesses Choose Us"
            subtitle="From startups to enterprises, we've earned the trust of 100+ clients by delivering real results — not just software."
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
