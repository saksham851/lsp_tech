// src/components/sections/Contact.jsx
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useScrollAnimation, staggerContainer, staggerItem, slideLeft, slideRight } from '../../hooks/useScrollAnimation'
import SectionHeader from '../ui/SectionHeader'
import { FiMapPin, FiPhone, FiMail, FiSend, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'
import { useState } from 'react'

const inputClass = `w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3.5 text-white 
  text-sm placeholder-gray-mid focus:outline-none focus:border-brand-red/50 focus:bg-dark-muted 
  transition-all duration-200`

const Contact = () => {
  const { ref, inView } = useScrollAnimation()
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500))
    console.log('Form data:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="section-padding bg-dark-card">
      <div className="container-max" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            tag="Contact Us"
            title="Let's Start Building"
            subtitle="Tell us about your project. We'll get back to you within 24 hours with a detailed response."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Info + Map */}
            <motion.div variants={slideLeft} className="space-y-8">
              {/* Contact info */}
              <div className="space-y-4">
                {[
                  { icon: FiMapPin, label: 'Office', value: 'Tillsonburg, Ontario, Canada' },
                  { icon: FiPhone, label: 'Phone', value: '+1 (519) 000-0000' },
                  { icon: FiMail, label: 'Email', value: 'hello@lsptechnologies.com' },
                ].map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-red/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-brand-red" size={20} />
                    </div>
                    <div>
                      <div className="text-gray-mid text-xs uppercase tracking-wider">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-gray-mid text-sm mb-4">Connect with us</p>
                <div className="flex gap-3">
                  {[
                    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
                    { icon: FiTwitter, href: '#', label: 'Twitter' },
                    { icon: FiInstagram, href: '#', label: 'Instagram' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-mid hover:text-brand-red hover:border-brand-red/30 transition-all"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-3xl overflow-hidden border border-dark-border h-64">
                <iframe
                  title="LSP Technologies Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47037.44234!2d-80.7302!3d42.8592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef8a8f8b2a937%3A0x4021b3e4e2b75ef0!2sTillsonburg%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div variants={slideRight}>
              <div className="glass rounded-3xl p-8 border border-white/5">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                      <span className="text-4xl">✅</span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                    <p className="text-gray-mid">We'll get back to you within 24 hours. Looking forward to talking!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/70 text-xs font-medium mb-1.5 block">Full Name *</label>
                        <input
                          {...register('name', { required: 'Name is required' })}
                          placeholder="John Smith"
                          className={inputClass}
                        />
                        {errors.name && <p className="text-brand-red text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="text-white/70 text-xs font-medium mb-1.5 block">Email Address *</label>
                        <input
                          {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                          })}
                          placeholder="john@company.com"
                          className={inputClass}
                        />
                        {errors.email && <p className="text-brand-red text-xs mt-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="text-white/70 text-xs font-medium mb-1.5 block">Company Name</label>
                      <input
                        {...register('company')}
                        placeholder="Your Company Inc."
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="text-white/70 text-xs font-medium mb-1.5 block">Service Needed</label>
                      <select {...register('service')} className={inputClass}>
                        <option value="" className="bg-dark-card">Select a service...</option>
                        <option value="software" className="bg-dark-card">Software Development</option>
                        <option value="web" className="bg-dark-card">Web Development</option>
                        <option value="mobile" className="bg-dark-card">Mobile Application</option>
                        <option value="erp" className="bg-dark-card">ERP / HRMS</option>
                        <option value="automation" className="bg-dark-card">Business Automation (n8n)</option>
                        <option value="ai" className="bg-dark-card">AI Solutions</option>
                        <option value="cloud" className="bg-dark-card">Cloud Solutions</option>
                        <option value="other" className="bg-dark-card">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-white/70 text-xs font-medium mb-1.5 block">Tell us about your project *</label>
                      <textarea
                        {...register('message', { required: 'Please describe your project' })}
                        rows={5}
                        placeholder="What are you looking to build? What problem are you trying to solve? Any timeline or budget in mind?"
                        className={`${inputClass} resize-none`}
                      />
                      {errors.message && <p className="text-brand-red text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend size={16} /> Send Message
                        </>
                      )}
                    </button>

                    <p className="text-gray-mid text-xs text-center">
                      We typically respond within 24 hours on business days 🍁
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
