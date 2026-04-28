import React, { useEffect } from 'react';
import Navbar from '../Navbar';

type LayoutProps = {
  children: React.ReactNode;
  disabled?: boolean;
}

const Layout = ({ children, disabled }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar disabled={disabled} />
      <main aria-label="Content">
        {children}
      </main>
    </div>
  )
}

export default Layout;

export const InnerContainer = ({ children }: LayoutProps) => {
  return (
    <div className="container max-w-5xl mx-auto px-4">
      {children}
    </div>
  )
}