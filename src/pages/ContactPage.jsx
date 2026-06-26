// src/pages/ContactPage.jsx
import { Helmet } from 'react-helmet-async'
import Contact from '../components/sections/Contact'
import FAQ from '../components/sections/FAQ'
import { motion } from 'framer-motion'

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact Us — LSP Technologies Inc.</title>
      <meta name="description" content="Get in touch with LSP Technologies Inc. in Tillsonburg, Ontario. Start your software project today. We respond within 24 hours." />
    </Helmet>
    <div className="pt-20 bg-dark section-padding">
      <div className="container-max text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-section font-black text-white mb-4">
          Let's Talk
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="text-gray-mid text-lg max-w-2xl mx-auto">
          Tell us about your project and we'll help you figure out the best path forward.
        </motion.p>
      </div>
    </div>
    <Contact />
    <FAQ />
  </>
)

export default ContactPage
