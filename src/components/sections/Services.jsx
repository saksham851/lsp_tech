import React from 'react';
import { motion } from 'framer-motion';

const servicesList = [
  {
    title: "Custom Web App Development",
    desc: "Full-stack web applications built from scratch using modern frameworks like React and Node.js."
  },
  {
    title: "Shopify Development",
    desc: "Custom headless storefronts, theme development, and deep API integrations for ecommerce brands."
  },
  {
    title: "High-Converting Landing Pages",
    desc: "Blazing fast, SEO-optimized landing pages designed to maximize your conversion rates."
  },
  {
    title: "API & AI Integration",
    desc: "Connecting third-party services, automating workflows, and integrating LLMs to supercharge your app."
  },
  {
    title: "Performance Optimization",
    desc: "Auditing and fixing slow websites to improve Core Web Vitals, SEO, and user retention."
  },
  {
    title: "Maintenance & Support",
    desc: "Ongoing bug fixing, feature additions, and technical support to keep your business running smoothly."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-black border-t border-white/5 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container-max relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-section font-bold tracking-tight mb-4">Services</h2>
          <p className="text-white/50 text-lg max-w-2xl text-balance">Everything you need to launch, scale, and optimize your digital presence.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl card-hover group"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
