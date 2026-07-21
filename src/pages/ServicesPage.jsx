// src/pages/ServicesPage.jsx
import { Helmet } from 'react-helmet-async'
import Services from '../components/sections/Services'
import Industries from '../components/sections/Industries'
import Process from '../components/sections/Process'
import Contact from '../components/sections/Contact'
import { motion } from 'framer-motion'

const ServicesPage = () => (
  <>
    <Helmet>
      <title>My Services | GHL, N8N, Make, Zapier, WordPress, Shopify & SEO</title>
      <meta name="description" content="Explore my freelance services: GoHighLevel setup, N8N automation, Make/Zapier workflows, WordPress development, Shopify stores, SEO, and more." />
    </Helmet>
    <div className="pt-20 bg-dark section-padding">
      <div className="container-max text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-section font-black text-white mb-4">
          My Services
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="text-gray-mid text-lg max-w-2xl mx-auto">
          From GoHighLevel to N8N, Make, Zapier, WordPress, Shopify & SEO — I provide every digital service your business needs to automate, scale, and dominate.
        </motion.p>
      </div>
    </div>
    <Services />
    <Industries />
    <Process />
    <Contact />
  </>
)

export default ServicesPage
