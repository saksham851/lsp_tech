// src/components/sections/Testimonials.jsx
import { motion } from 'framer-motion'
import { useScrollAnimation, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'
import SectionHeader from '../ui/SectionHeader'
import { testimonials } from '../../data/testimonials'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { FiStar } from 'react-icons/fi'

const Stars = ({ count = 5 }) => (
  <div className="flex items-center gap-1 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={16} />
    ))}
  </div>
)

const TestimonialCard = ({ testimonial }) => (
  <div className="glass rounded-3xl p-8 h-full border border-white/5 hover:border-brand-red/20 transition-colors duration-300 flex flex-col">
    <Stars count={testimonial.rating} />

    <blockquote className="text-white/80 text-base leading-relaxed mb-8 italic flex-1">
      "{testimonial.review}"
    </blockquote>

    <div className="flex items-center gap-4 mt-auto">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
        style={{ background: testimonial.avatarColor }}
      >
        {testimonial.avatar}
      </div>
      <div>
        <div className="text-white font-semibold">{testimonial.name}</div>
        <div className="text-gray-mid text-sm">{testimonial.role}</div>
        <div className="text-brand-red text-xs font-medium">{testimonial.company}</div>
        <div className="text-gray-mid text-xs">{testimonial.location}</div>
      </div>
    </div>
  </div>
)

const Testimonials = () => {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="testimonials" className="section-padding bg-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-red/5 via-transparent to-transparent" />

      <div className="container-max relative z-10" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            tag="Client Stories"
            title="What Our Clients Say"
            subtitle="Don't just take our word for it — hear from businesses we've helped grow through technology."
          />

          <motion.div variants={staggerItem}>
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              style={{ '--swiper-navigation-size': '18px' }}
              className="pb-12"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id} style={{ height: 'auto', alignSelf: 'stretch' }}>
                  <TestimonialCard testimonial={t} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={staggerItem}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-40"
          >
            {['Clutch.co', 'GoodFirms', 'Upwork', 'Google Reviews', 'DesignRush'].map((platform) => (
              <div key={platform} className="text-white font-semibold text-sm tracking-wide">
                {platform}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
