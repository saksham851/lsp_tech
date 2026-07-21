// src/pages/Home.jsx
import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import WhyChoose from '../components/sections/WhyChoose'
import Services from '../components/sections/Services'

// Lazy loaded heavy sections below the fold
const Industries = lazy(() => import('../components/sections/Industries'))
const Process = lazy(() => import('../components/sections/Process'))
const Technologies = lazy(() => import('../components/sections/Technologies'))
const Portfolio = lazy(() => import('../components/sections/Portfolio'))
const Testimonials = lazy(() => import('../components/sections/Testimonials'))
const Statistics = lazy(() => import('../components/sections/Statistics'))
const Blog = lazy(() => import('../components/sections/Blog'))
const FAQ = lazy(() => import('../components/sections/FAQ'))
const Contact = lazy(() => import('../components/sections/Contact'))

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DevBridge — GoHighLevel, Automation & Digital Growth Experts</title>
        <meta
          name="description"
          content="DevBridge is your expert partner for GoHighLevel (GHL) setup, N8N, Make, Zapier automation, WordPress development, Shopify stores, and SEO. Scale your business with powerful systems."
        />
        <meta name="keywords" content="GoHighLevel agency, GHL setup, N8N automation, Make Integromat, Zapier automation, WordPress development, Shopify store, SEO services, CRM automation" />
        <link rel="canonical" href="https://devbridge.agency/" />
      </Helmet>

      <Hero />
      <About />
      <WhyChoose />
      <Services />

      <Suspense fallback={<div className="py-24" />}>
        <Industries />
        <Process />
        <Technologies />
        <Portfolio />
        <Testimonials />
        <Statistics />
        <Blog />
        <FAQ />
        <Contact />
      </Suspense>
    </>
  )
}

export default Home
