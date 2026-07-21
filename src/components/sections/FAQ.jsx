import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "Do you only work with startups?",
    a: "No, I work with a variety of clients including established businesses, agencies looking for freelance help, and ecommerce brands. However, my agile process is especially beneficial for startups."
  },
  {
    q: "How do you charge for projects?",
    a: "It depends on the project scope. I typically offer flat-rate pricing for clear deliverables (like a landing page or standard app), and hourly/retainer rates for ongoing development and support."
  },
  {
    q: "Can you help me redesign my existing application?",
    a: "Yes! A large part of my work involves auditing existing codebases, improving UI/UX, and refactoring applications to perform better and look modern."
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Absolutely. I offer monthly retainer packages to ensure your application stays updated, secure, and continues to evolve with your business needs."
  }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-padding bg-black border-t border-white/5">
      <div className="container-max max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-section font-bold tracking-tight mb-4">Common Questions</h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass border border-white/5 rounded-2xl overflow-hidden"
            >
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-medium text-lg">{faq.q}</span>
                <span className={`text-white/50 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-white/50 leading-relaxed text-sm"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
