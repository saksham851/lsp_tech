import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  "React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", 
  "MongoDB", "PostgreSQL", "GraphQL", "Shopify", "Stripe", "AWS", "Vercel"
];

const TechStack = () => {
  return (
    <section className="py-24 border-y border-white/5 overflow-hidden bg-dark-card/50">
      <div className="container-max mb-12 text-center">
        <p className="text-white/40 uppercase tracking-widest text-sm font-semibold">Technologies I work with</p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-shimmer whitespace-nowrap flex items-center gap-12 px-6" style={{ animation: 'shimmer 20s linear infinite' }}>
          {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
            <span key={idx} className="text-2xl md:text-3xl font-bold text-white/10 hover:text-white/50 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}} />
    </section>
  );
};

export default TechStack;
