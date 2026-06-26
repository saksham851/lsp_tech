// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom'
import { FiLinkedin, FiTwitter, FiFacebook, FiInstagram, FiGithub, FiArrowRight, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'
import logo from '../../assets/logo.webp'

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'Software Development', href: '/services' },
    { label: 'Web Development', href: '/services' },
    { label: 'Mobile Applications', href: '/services' },
    { label: 'Cloud Solutions', href: '/services' },
    { label: 'AI Solutions', href: '/services' },
    { label: 'Business Automation', href: '/services' },
  ],
  Resources: [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Case Studies', href: '/portfolio' },
    { label: 'Technology Stack', href: '/#technologies' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

const socials = [
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
  { icon: FiFacebook, href: '#', label: 'Facebook' },
  { icon: FiInstagram, href: '#', label: 'Instagram' },
  { icon: FiGithub, href: '#', label: 'GitHub' },
]

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-dark-border">
      {/* CTA Banner */}
      <div className="bg-gradient-brand">
        <div className="container-max px-4 md:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Ready to Build Something Great?</h3>
              <p className="text-white/70 text-lg">Let's talk about your project. No pressure, just ideas.</p>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-red font-bold rounded-full hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Start a Conversation <FiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-max px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <div className="h-14 w-14 rounded-xl overflow-hidden shadow-glow-red flex items-center justify-center flex-shrink-0 bg-white/5 transition-transform duration-300 group-hover:scale-105">
                <img src={logo} alt="LSP" className="w-full h-full object-contain" style={{ imageRendering: '-webkit-optimize-contrast' }} />
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-tight">LSP Technologies</div>
                <div className="text-gray-mid text-xs">Inc.</div>
              </div>
            </Link>

            <p className="text-gray-mid text-sm leading-relaxed max-w-xs mb-6">
              Building products and powering possibilities for businesses across Canada and around the world.
              Rooted in Ontario. Built for the world.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 text-gray-mid text-sm hover:text-white transition-colors">
                <FiMapPin className="text-brand-red flex-shrink-0" size={14} />
                Tillsonburg, Ontario, Canada
              </a>
              <a href="tel:+1-519-000-0000" className="flex items-center gap-3 text-gray-mid text-sm hover:text-white transition-colors">
                <FiPhone className="text-brand-red flex-shrink-0" size={14} />
                +1 (519) 000-0000
              </a>
              <a href="mailto:hello@lsptechnologies.com" className="flex items-center gap-3 text-gray-mid text-sm hover:text-white transition-colors">
                <FiMail className="text-brand-red flex-shrink-0" size={14} />
                hello@lsptechnologies.com
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-8">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-mid hover:text-white hover:border-brand-red/30 hover:bg-brand-red/10 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns - 2 col on mobile, 3 col on md+ */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold text-white text-xs tracking-widest uppercase mb-4">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-gray-mid text-sm hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-mid text-sm">
            © {new Date().getFullYear()} LSP Technologies Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-mid text-sm">
            <span>🍁</span>
            <span>Proudly Canadian. Building for the World.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
