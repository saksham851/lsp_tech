import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your business goals, target audience, and technical requirements." },
  { num: "02", title: "Planning", desc: "Architecting the solution, defining the tech stack, and creating a project roadmap." },
  { num: "03", title: "Development", desc: "Writing clean, scalable code with regular updates and milestone deliveries." },
  { num: "04", title: "Testing", desc: "Rigorous QA testing across devices to ensure a bug-free, performant experience." },
  { num: "05", title: "Deployment", desc: "Launching your product to production with CI/CD pipelines and monitoring." },
  { num: "06", title: "Support", desc: "Post-launch maintenance, optimization, and scaling as your business grows." }
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-black border-t border-white/5">
      <div className="container-max">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 text-balance mx-auto max-w-2xl"
        >
          <h2 className="text-section font-bold tracking-tight mb-4">How I Work</h2>
          <p className="text-white/50 text-lg">A streamlined, transparent process designed to deliver high-quality results without the agency bloat.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="text-5xl font-black text-white/5 mb-4 absolute -top-6 -left-4 -z-10">{step.num}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
