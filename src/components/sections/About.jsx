// src/components/sections/About.jsx
import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUp, staggerContainer, staggerItem, slideLeft, slideRight } from '../../hooks/useScrollAnimation'
import SectionHeader from '../ui/SectionHeader'
import { FiTarget, FiEye, FiHeart, FiGlobe, FiUsers, FiAward } from 'react-icons/fi'

const values = [
  { icon: FiTarget, title: 'Innovation First', desc: 'I embrace new technologies and creative thinking to solve complex business problems.' },
  { icon: FiHeart, title: 'Client Obsessed', desc: 'Your success is my success. I go above and beyond on every single project.' },
  { icon: FiAward, title: 'Quality Standard', desc: 'I build with precision, following best practices that stand the test of time.' },
  { icon: FiGlobe, title: 'Global Mindset', desc: 'Working remotely to deliver world-class automation and systems across time zones.' },
]

const timeline = [
  { year: '2023', title: 'My Freelance Journey Began', desc: 'I started my freelance career with a vision to help businesses achieve digital success through automation.' },
  { year: '2023', title: 'Mastering GoHighLevel', desc: 'Delivered my first GoHighLevel setups, funnels, and CRM configurations for agencies and local businesses.' },
  { year: '2024', title: 'Diving into Automation', desc: 'Expanded my skillset into N8N, Make, and Zapier — helping clients eliminate manual work and save 100s of hours.' },
  { year: '2024', title: 'Web & E-commerce', desc: 'Started building full WordPress and Shopify high-converting stores and business websites.' },
  { year: '2025', title: 'SEO & Growth', desc: 'Added dedicated SEO services to help my clients rank higher, drive organic traffic, and grow revenue.' },
  { year: '2026', title: 'Going Global', desc: 'Now serving clients worldwide as an independent expert specializing in GHL, automation, and digital growth.' },
]

const About = () => {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="about" className="section-padding bg-dark">
      <div className="container-max" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            tag="My Story"
            title="Built on Automation. Driven by Results."
            subtitle="I am a freelance expert who genuinely cares about your business growth. I don't just set up tools — I build complete systems that scale."
          />

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <motion.div variants={slideLeft} className="glass rounded-3xl p-8 border border-brand-red/20 hover:border-brand-red/40 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-2xl flex items-center justify-center">
                  <FiTarget className="text-brand-red" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">My Mission</h3>
              </div>
              <p className="text-gray-mid leading-relaxed text-lg">
                To empower businesses with powerful GoHighLevel setups, automation workflows, and digital systems
                that are accessible, affordable, and built to scale as a solo partner. Every business deserves world-class digital infrastructure.
              </p>
            </motion.div>

            <motion.div variants={slideRight} className="glass rounded-3xl p-8 border border-white/5 hover:border-brand-red/20 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                  <FiEye className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">My Vision</h3>
              </div>
              <p className="text-gray-mid leading-relaxed text-lg">
                To become the most trusted freelance automation and digital growth partner for businesses worldwide —
                recognized not just for the tools I set up, but for the transformation and revenue I enable
                in every business I work with.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div variants={fadeUp} className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-10">Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  variants={staggerItem}
                  className="glass rounded-2xl p-6 card-hover group text-center"
                >
                  <div className="w-14 h-14 bg-brand-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-red/20 transition-colors">
                    <val.icon className="text-brand-red" size={24} />
                  </div>
                  <h4 className="font-bold text-white mb-2">{val.title}</h4>
                  <p className="text-gray-mid text-sm leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={fadeUp}>
            <h3 className="text-2xl font-bold text-white text-center mb-12">My Journey</h3>
            <div className="relative">
              {/* Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-dark-border -translate-x-1/2 hidden md:block" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    variants={staggerItem}
                    className={`relative flex flex-col md:flex-row items-center gap-6 ${
                      i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="glass rounded-2xl p-6 card-hover inline-block w-full">
                        <div className="text-brand-red font-bold text-lg mb-1">{item.year}</div>
                        <h4 className="text-white font-semibold text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-mid text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex w-5 h-5 rounded-full bg-brand-red border-4 border-dark z-10 flex-shrink-0 shadow-glow-red" />

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
