// src/components/sections/Process.jsx
import { motion } from 'framer-motion'
import { useScrollAnimation, staggerContainer, staggerItem, fadeUp } from '../../hooks/useScrollAnimation'
import SectionHeader from '../ui/SectionHeader'

const steps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    desc: 'We start with a deep-dive session to understand your business, current tech stack, and where you are losing time or leads.',
    color: 'text-brand-red',
    dotColor: 'bg-brand-red',
  },
  {
    number: '02',
    title: 'Strategy & Mapping',
    desc: 'We map out the exact GHL funnels, N8N/Zapier workflows, or website structure needed to hit your growth goals.',
    color: 'text-blue-400',
    dotColor: 'bg-blue-400',
  },
  {
    number: '03',
    title: 'Design & Copy',
    desc: 'For websites and funnels, our team crafts high-converting copy and modern designs that align with your brand.',
    color: 'text-purple-400',
    dotColor: 'bg-purple-400',
  },
  {
    number: '04',
    title: 'Build & Automate',
    desc: 'We build out the systems — configuring your GoHighLevel, developing your site, and connecting all your APIs and webhooks.',
    color: 'text-green-400',
    dotColor: 'bg-green-400',
  },
  {
    number: '05',
    title: 'Testing & QA',
    desc: 'Rigorous testing of every form, button, and automation path. We make sure leads flow perfectly before going live.',
    color: 'text-yellow-400',
    dotColor: 'bg-yellow-400',
  },
  {
    number: '06',
    title: 'Launch & Handover',
    desc: 'We push everything live, provide you with training videos, and hand over the keys to your new automated system.',
    color: 'text-orange-400',
    dotColor: 'bg-orange-400',
  },
  {
    number: '07',
    title: 'Ongoing Growth',
    desc: 'We stick around. We manage your SEO, maintain your automations, and optimize your funnels to keep your business scaling.',
    color: 'text-pink-400',
    dotColor: 'bg-pink-400',
  },
]

const Process = () => {
  const { ref, inView } = useScrollAnimation(0.05)

  return (
    <section id="process" className="section-padding bg-dark">
      <div className="container-max" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            tag="How We Work"
            title="Our Development Process"
            subtitle="A proven 7-step process that delivers results on time, every time. No surprises, just transparent and reliable execution."
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-red via-dark-border to-transparent md:-translate-x-1/2" />

            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  variants={staggerItem}
                  className={`relative flex items-center gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Content */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-20 md:ml-0`}
                  >
                    <div className="glass rounded-2xl p-6 hover:border-brand-red/20 border border-white/5 transition-colors duration-300">
                      <div className={`text-5xl font-black opacity-20 mb-1 ${step.color}`}>{step.number}</div>
                      <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-gray-mid text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>

                  {/* Center dot */}
                  <div className="absolute left-8 md:static md:flex-shrink-0 z-10">
                    <div className={`w-4 h-4 rounded-full ${step.dotColor} border-4 border-dark shadow-lg -translate-x-1.5 md:translate-x-0`} />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
