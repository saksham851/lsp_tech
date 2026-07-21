import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "[Project Name 1]",
    desc: "A full-stack SaaS application built with Next.js and Supabase. Features real-time collaboration, Stripe billing, and AI integration.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Stripe"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "[Project Name 2]",
    desc: "A high-performance ecommerce headless storefront built on Shopify and Remix. Achieved 99/100 Lighthouse score.",
    tech: ["Remix", "Shopify", "GraphQL", "Framer Motion"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "[Project Name 3]",
    desc: "An internal dashboard for an agency to manage client onboarding, integrating various APIs and automating workflows.",
    tech: ["React", "Node.js", "PostgreSQL", "Express"],
    demoLink: "#",
    githubLink: "#",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding border-t border-white/5">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-section font-bold tracking-tight mb-4">Featured Work</h2>
            <p className="text-white/50 text-lg max-w-xl text-balance">A selection of recent applications and websites I've designed and developed.</p>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white transition-all"
          >
            View GitHub
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-2 rounded-3xl group card-hover"
            >
              <div className="aspect-[16/10] w-full rounded-2xl bg-white/5 mb-6 flex items-center justify-center overflow-hidden relative">
                 <p className="text-white/30 text-sm tracking-widest uppercase">[Image Placeholder]</p>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="px-6 pb-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-white/60 mb-6 text-sm leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a href={project.demoLink} className="text-sm font-medium text-white hover:text-white/70 transition-colors">Live Demo &rarr;</a>
                  <a href={project.githubLink} className="text-sm font-medium text-white/50 hover:text-white transition-colors">GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
