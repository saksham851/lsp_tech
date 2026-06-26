// src/components/sections/FAQ.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'
import SectionHeader from '../ui/SectionHeader'
import { faqs } from '../../data/faqs'
import { FiPlus, FiMinus } from 'react-icons/fi'

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <motion.div
    variants={staggerItem}
    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
      isOpen ? 'border-brand-red/30 bg-brand-red/5' : 'border-dark-border bg-dark-card hover:border-white/10'
    }`}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 p-6 text-left"
    >
      <span className={`font-semibold text-base transition-colors ${isOpen ? 'text-white' : 'text-white/80'}`}>
        {faq.question}
      </span>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
        isOpen ? 'bg-brand-red text-white rotate-0' : 'glass text-gray-mid'
      }`}>
        {isOpen ? <FiMinus size={16} /> : <FiPlus size={16} />}
      </div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="px-6 pb-6 text-gray-mid text-sm leading-relaxed border-t border-white/5 pt-4">
            {faq.answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
)

const FAQ = () => {
  const { ref, inView } = useScrollAnimation()
  const [openId, setOpenId] = useState(1)

  const toggle = (id) => setOpenId(openId === id ? null : id)

  return (
    <section id="faq" className="section-padding bg-dark">
      <div className="container-max" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            tag="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before starting a project with LSP Technologies."
          />

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map(faq => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
