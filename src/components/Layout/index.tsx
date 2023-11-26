import React, { useEffect } from 'react';
import Navbar from '../Navbar';

type LayoutProps = {
  children: React.ReactNode;
}

export const InnerContainer = ({ children }: LayoutProps) => {
  return (
    <div className="container max-w-5xl mx-auto px-4">
      {children}
    </div>
  )
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main aria-label="Content">
        {children}
      </main>
    </div>
  )
}

export default Layout;
