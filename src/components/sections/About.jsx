// src/components/sections/About.jsx
import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUp, staggerContainer, staggerItem, slideLeft, slideRight } from '../../hooks/useScrollAnimation'
import SectionHeader from '../ui/SectionHeader'
import { FiTarget, FiEye, FiHeart, FiGlobe, FiUsers, FiAward } from 'react-icons/fi'

const values = [
  { icon: FiTarget, title: 'Innovation First', desc: 'We embrace new technologies and creative thinking to solve complex business problems.' },
  { icon: FiHeart, title: 'Client Obsessed', desc: 'Your success is our success. We go above and beyond on every single project.' },
  { icon: FiAward, title: 'Quality Standard', desc: 'We build with precision, following best practices that stand the test of time.' },
  { icon: FiGlobe, title: 'Global Mindset', desc: 'Canadian roots, global delivery. We work across time zones, borders, and industries.' },
]

const timeline = [
  { year: '2018', title: 'Founded in Ontario', desc: 'LSP Technologies was founded in Tillsonburg, Ontario with a vision to help local businesses grow through technology.' },
  { year: '2019', title: 'First 10 Clients', desc: 'Delivered our first batch of web and mobile projects for small businesses across Southern Ontario.' },
  { year: '2021', title: 'ERP & Enterprise', desc: 'Expanded into ERP, HRMS, and Payroll systems for mid-sized manufacturing and logistics companies.' },
  { year: '2023', title: 'Automation & AI', desc: 'Launched our Business Automation division, helping clients eliminate manual work with n8n and AI solutions.' },
  { year: '2025', title: 'Global Reach', desc: 'Now serving 100+ clients in 10+ countries, with a fully remote team of 25+ engineers and designers.' },
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
            tag="Our Story"
            title="Built on Trust. Driven by Technology."
            subtitle="We are a Canadian technology company that genuinely cares about your business. We don't just build software — we build partnerships."
          />

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <motion.div variants={slideLeft} className="glass rounded-3xl p-8 border border-brand-red/20 hover:border-brand-red/40 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-2xl flex items-center justify-center">
                  <FiTarget className="text-brand-red" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-mid leading-relaxed text-lg">
                To empower small and medium businesses with enterprise-grade technology solutions that are
                accessible, affordable, and built to scale. We believe every business — regardless of size —
                deserves world-class software.
              </p>
            </motion.div>

            <motion.div variants={slideRight} className="glass rounded-3xl p-8 border border-white/5 hover:border-brand-red/20 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                  <FiEye className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-mid leading-relaxed text-lg">
                To become the most trusted technology partner for growing businesses in Canada and beyond —
                recognized not just for the code we write, but for the transformation we enable in every
                company we work with.
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
            <h3 className="text-2xl font-bold text-white text-center mb-12">Our Journey</h3>
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
