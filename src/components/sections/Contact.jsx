import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-padding border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container-max max-w-4xl relative z-10">
        <div className="glass-dark border border-white/10 rounded-3xl p-8 md:p-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-section font-bold tracking-tight mb-6">Ready to start a project?</h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
              I'm currently available for new freelance opportunities. Let's discuss your requirements and see how I can help your business grow.
            </p>
            
            <a href="mailto:hello@example.com" className="btn-primary text-lg px-10 py-4 shadow-glow-accent">
              hello@example.com
            </a>
            
            <div className="mt-12 flex items-center justify-center gap-8">
              <a href="#" className="text-white/50 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">GitHub</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
