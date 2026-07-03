import React from 'react'
import Navbar from '@components/navbar/Navbar'
import Footer from '@components/footer/Footer'

interface LayoutProps {
  children: React.ReactNode
  hideNavbar?: boolean
  hideFooter?: boolean
}

export default function Layout({ 
  children, 
  hideNavbar = false, 
  hideFooter = false 
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {!hideNavbar && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  )
}
