import React, { useEffect } from 'react';
import Navbar from '../Navbar';

type LayoutProps = {
  children: React.ReactNode;
  location: any;
}

const Layout = ({ children, location }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container max-w-5xl mx-auto" aria-label="Content">
        {children}
      </main>
    </div>
  )
}

export default Layout;
