// src/pages/AboutPage.jsx
import { Helmet } from 'react-helmet-async'
import About from '../components/sections/About'
import Statistics from '../components/sections/Statistics'
import { motion } from 'framer-motion'

const AboutPage = () => (
  <>
    <Helmet>
      <title>About Me | Freelance GHL & Automation Expert</title>
      <meta name="description" content="Learn about your freelance expert for GoHighLevel, N8N, Make, Zapier, WordPress, Shopify, and SEO. My mission, vision, values, and journey." />
    </Helmet>
    <div className="pt-20 bg-dark">
      <div className="section-padding">
        <div className="container-max text-center">
          <motion.span
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="tag inline-flex mb-4"
          >My Story</motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-section font-black text-white mb-6"
          >
            Who I Am
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-gray-mid text-lg max-w-2xl mx-auto"
          >
            A passionate freelance automation expert, GHL specialist, and digital growth strategist — helping your business automate, scale, and succeed.
          </motion.p>
        </div>
      </div>
    </div>
    <About />
    <Statistics />
  </>
)

export default AboutPage
