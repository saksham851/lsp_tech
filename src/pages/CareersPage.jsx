// src/pages/CareersPage.jsx
import { Helmet } from 'react-helmet-async'
import Careers from '../components/sections/Careers'
import { motion } from 'framer-motion'

const CareersPage = () => (
  <>
    <Helmet>
      <title>Careers — LSP Technologies Inc.</title>
      <meta name="description" content="Join the LSP Technologies team. Remote-first positions in software development, design, and business automation. See current openings." />
    </Helmet>
    <div className="pt-20 bg-dark section-padding">
      <div className="container-max text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-section font-black text-white mb-4">
          Join Our Team
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="text-gray-mid text-lg max-w-2xl mx-auto">
          Help us build products that power possibilities for businesses around the world.
        </motion.p>
      </div>
    </div>
    <Careers />
  </>
)

export default CareersPage
