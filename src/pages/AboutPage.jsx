// src/pages/AboutPage.jsx
import { Helmet } from 'react-helmet-async'
import About from '../components/sections/About'
import Statistics from '../components/sections/Statistics'
import { motion } from 'framer-motion'

const AboutPage = () => (
  <>
    <Helmet>
      <title>About Us — LSP Technologies Inc.</title>
      <meta name="description" content="Learn about LSP Technologies Inc., a Canadian software company based in Tillsonburg, Ontario. Our mission, vision, values, and story." />
    </Helmet>
    <div className="pt-20 bg-dark">
      <div className="section-padding">
        <div className="container-max text-center">
          <motion.span
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="tag inline-flex mb-4"
          >Our Story</motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-section font-black text-white mb-6"
          >
            Who We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-gray-mid text-lg max-w-2xl mx-auto"
          >
            A team of passionate builders, problem-solvers, and technology enthusiasts — helping businesses grow, one product at a time.
          </motion.p>
        </div>
      </div>
    </div>
    <About />
    <Statistics />
  </>
)

export default AboutPage
