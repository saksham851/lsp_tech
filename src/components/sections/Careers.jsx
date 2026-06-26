// src/components/sections/Careers.jsx
import { motion } from 'framer-motion'
import { useScrollAnimation, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'
import SectionHeader from '../ui/SectionHeader'
import { jobs, benefits } from '../../data/careers'
import { FiMapPin, FiClock, FiBriefcase, FiArrowRight, FiDollarSign } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const JobCard = ({ job }) => (
  <motion.div
    variants={staggerItem}
    className="glass rounded-3xl p-6 border border-white/5 hover:border-brand-red/20 card-hover group"
  >
    <div className="flex items-start justify-between gap-4 mb-4">
      <div>
        <h3 className="text-white font-bold text-lg group-hover:text-brand-red transition-colors">
          {job.title}
        </h3>
        <div className="flex items-center gap-1 text-gray-mid text-sm mt-1">
          <FiBriefcase size={12} /> {job.department}
        </div>
      </div>
      <span className="px-3 py-1 bg-brand-red/10 text-brand-red border border-brand-red/20 rounded-full text-xs font-medium flex-shrink-0">
        {job.type}
      </span>
    </div>

    <p className="text-gray-mid text-sm leading-relaxed mb-4">{job.description}</p>

    <div className="flex flex-wrap gap-4 text-xs text-gray-mid mb-5">
      <div className="flex items-center gap-1.5">
        <FiMapPin size={12} className="text-brand-red" />
        {job.location}
      </div>
      <div className="flex items-center gap-1.5">
        <FiDollarSign size={12} className="text-green-400" />
        {job.salary}
      </div>
    </div>

    {/* Requirements */}
    <div className="flex flex-wrap gap-2 mb-5">
      {job.requirements.map(req => (
        <span key={req} className="px-2.5 py-1 glass text-white/60 text-xs rounded-lg border border-white/10">
          {req}
        </span>
      ))}
    </div>

    <button className="flex items-center gap-2 text-brand-red text-sm font-semibold group-hover:gap-3 transition-all">
      Apply Now <FiArrowRight size={14} />
    </button>
  </motion.div>
)

const Careers = () => {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="careers" className="section-padding bg-dark">
      <div className="container-max" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            tag="Join Our Team"
            title="Build the Future with Us"
            subtitle="We're a remote-first team of passionate builders. If you love solving real problems with elegant technology, we'd love to hear from you."
          />

          {/* Benefits */}
          <motion.div variants={staggerItem} className="mb-16">
            <h3 className="text-xl font-bold text-white text-center mb-8">Why Work at LSP?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="glass rounded-2xl p-5 text-center border border-white/5 hover:border-brand-red/20 transition-colors card-hover">
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <div className="text-white font-semibold text-sm mb-1">{b.title}</div>
                  <div className="text-gray-mid text-xs leading-relaxed">{b.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Job Listings */}
          <motion.div variants={staggerItem}>
            <h3 className="text-xl font-bold text-white text-center mb-8">Current Openings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={staggerItem} className="mt-12 text-center">
            <p className="text-gray-mid mb-4">Don't see the right role? We're always looking for great people.</p>
            <Link to="/contact" className="btn-primary">
              Send Your Resume <FiArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Careers
