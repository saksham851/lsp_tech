import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding border-t border-white/5">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section font-bold tracking-tight mb-6">Built for <br/><span className="text-white/50">results.</span></h2>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              As an independent developer, I don't just write code—I solve business problems. 
              Whether you're a startup founder needing an MVP, or an ecommerce brand scaling up, 
              I build custom solutions tailored to your goals.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              No agency overhead, no junior devs assigned to your project. You work directly with me, 
              ensuring fast communication, clean code, and a final product that performs.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden glass-dark border border-white/10 flex items-center justify-center bg-white/5"
          >
            <p className="text-white/30 text-sm tracking-widest uppercase">[Image Placeholder]</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
