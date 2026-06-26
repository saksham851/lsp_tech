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
const Careers = lazy(() => import('../components/sections/Careers'))
const Blog = lazy(() => import('../components/sections/Blog'))
const FAQ = lazy(() => import('../components/sections/FAQ'))
const Contact = lazy(() => import('../components/sections/Contact'))

const Home = () => {
  return (
    <>
      <Helmet>
        <title>LSP Technologies Inc. — Building Products. Powering Possibilities.</title>
        <meta
          name="description"
          content="LSP Technologies Inc. is a Canadian software company specializing in custom software, web development, mobile apps, ERP, AI solutions, and business automation with n8n. Rooted in Ontario. Built for the world."
        />
        <meta name="keywords" content="software development Canada, ERP development Ontario, n8n automation, custom software Tillsonburg, mobile app development, AI solutions Canada" />
        <link rel="canonical" href="https://lsptechnologies.com/" />
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
        <Careers />
        <Blog />
        <FAQ />
        <Contact />
      </Suspense>
    </>
  )
}

export default Home
