// src/pages/Home.jsx
import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import WhyChoose from '../components/sections/WhyChoose'
import Services from '../components/sections/Services'
import Industries from '../components/sections/Industries'
import Process from '../components/sections/Process'
import Technologies from '../components/sections/Technologies'
import Portfolio from '../components/sections/Portfolio'
import Testimonials from '../components/sections/Testimonials'
import Statistics from '../components/sections/Statistics'
import Careers from '../components/sections/Careers'
import Blog from '../components/sections/Blog'
import FAQ from '../components/sections/FAQ'
import Contact from '../components/sections/Contact'

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
    </>
  )
}

export default Home
