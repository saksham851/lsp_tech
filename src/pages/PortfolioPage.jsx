// src/pages/PortfolioPage.jsx
import { Helmet } from 'react-helmet-async'
import Portfolio from '../components/sections/Portfolio'
import Testimonials from '../components/sections/Testimonials'
import { motion } from 'framer-motion'

const PortfolioPage = () => (
  <>
    <Helmet>
      <title>Portfolio — LSP Technologies Inc.</title>
      <meta name="description" content="Explore LSP Technologies project portfolio — ERP, web apps, mobile, automation, HRMS, payroll systems and more for clients across Canada." />
    </Helmet>
    <div className="pt-20 bg-dark section-padding">
      <div className="container-max text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-section font-black text-white mb-4">
          Our Portfolio
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="text-gray-mid text-lg max-w-2xl mx-auto">
          Real projects. Real results. Browse what we've built for businesses like yours.
        </motion.p>
      </div>
    </div>
    <Portfolio />
    <Testimonials />
  </>
)

export default PortfolioPage
