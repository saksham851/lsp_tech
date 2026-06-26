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
      <title>Services — LSP Technologies Inc.</title>
      <meta name="description" content="Explore LSP Technologies services: software development, web, mobile, ERP, HRMS, AI, cloud, business automation with n8n, and more." />
    </Helmet>
    <div className="pt-20 bg-dark section-padding">
      <div className="container-max text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-section font-black text-white mb-4">
          Our Services
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="text-gray-mid text-lg max-w-2xl mx-auto">
          End-to-end technology solutions designed to grow your business.
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
