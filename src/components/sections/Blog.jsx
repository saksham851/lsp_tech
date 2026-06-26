// src/components/sections/Blog.jsx
import { motion } from 'framer-motion'
import { useScrollAnimation, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'
import SectionHeader from '../ui/SectionHeader'
import { blogPosts } from '../../data/blog'
import { FiArrowRight, FiClock, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const BlogCard = ({ post }) => (
  <motion.article
    variants={staggerItem}
    className="group bg-dark-card rounded-3xl overflow-hidden border border-dark-border card-hover"
  >
    {/* Image */}
    <div className="relative h-52 overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-card/60 to-transparent" />
      <div
        className="absolute top-4 left-4 px-3 py-1 text-white text-xs font-bold rounded-full"
        style={{ background: post.categoryColor }}
      >
        {post.category}
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="flex items-center gap-4 text-xs text-gray-mid mb-4">
        <span className="flex items-center gap-1.5"><FiUser size={11} /> {post.author}</span>
        <span className="flex items-center gap-1.5"><FiClock size={11} /> {post.readTime}</span>
        <span>{post.date}</span>
      </div>

      <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-brand-red transition-colors duration-300 line-clamp-2">
        {post.title}
      </h3>
      <p className="text-gray-mid text-sm leading-relaxed mb-6 line-clamp-3">
        {post.excerpt}
      </p>

      <div className="flex items-center gap-2 text-brand-red text-sm font-semibold group-hover:gap-3 transition-all duration-200">
        Read Article <FiArrowRight size={14} />
      </div>
    </div>
  </motion.article>
)

const Blog = () => {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="blog" className="section-padding bg-dark-card">
      <div className="container-max" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            tag="Insights"
            title="Latest from Our Blog"
            subtitle="Practical articles on software development, business automation, AI, and technology trends for growing businesses."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <motion.div variants={staggerItem} className="text-center mt-12">
            <Link to="/blog" className="btn-outline">
              Read All Articles <FiArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
