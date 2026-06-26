// src/components/layout/Layout.jsx
import Navbar from './Navbar'
import Footer from './Footer'
import CustomCursor from '../ui/CustomCursor'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
