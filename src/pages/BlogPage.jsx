// src/pages/BlogPage.jsx
import { Helmet } from 'react-helmet-async'
import Blog from '../components/sections/Blog'
import { motion } from 'framer-motion'

const BlogPage = () => (
  <>
    <Helmet>
      <title>Blog | GHL, Automation & Digital Growth Insights</title>
      <meta name="description" content="GoHighLevel tips, automation guides, WordPress, Shopify, SEO, and digital growth insights from your expert. Built for business owners." />
    </Helmet>
    <div className="pt-20 bg-dark section-padding">
      <div className="container-max text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-section font-black text-white mb-4">
          Blog & Insights
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="text-gray-mid text-lg max-w-2xl mx-auto">
          Practical technology content to help your business grow smarter.
        </motion.p>
      </div>
    </div>
    <Blog />
  </>
)

export default BlogPage
