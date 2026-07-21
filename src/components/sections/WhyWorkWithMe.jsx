import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  {
    title: "Direct Communication",
    desc: "You talk to the developer writing your code. No account managers, no playing telephone. Just clear, honest communication."
  },
  {
    title: "Speed & Agility",
    desc: "Without agency bureaucracy, I can move fast, adapt to changes quickly, and deliver your product ahead of schedule."
  },
  {
    title: "Quality over Quantity",
    desc: "I take on a limited number of projects at a time to ensure your product gets the focus and attention to detail it deserves."
  }
];

const WhyWorkWithMe = () => {
  return (
    <section className="section-padding border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-section font-bold tracking-tight mb-6">Why hire a<br/><span className="text-white/50">solo freelancer?</span></h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-md">
              Hiring an agency often means paying for overhead you don't need. Hiring a solo specialist means getting dedicated expertise, faster execution, and better ROI.
            </p>
            <a href="#contact" className="btn-outline">Start a Project</a>
          </motion.div>

          <div className="flex flex-col gap-6">
            {reasons.map((reason, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-dark p-8 rounded-2xl"
              >
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
