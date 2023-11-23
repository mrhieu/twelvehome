import React from 'react';
import { Link } from 'gatsby';
import './index.scss';

type Props = {}

const Navbar = ({}: Props) => (
  <nav className="navBar shadow-sm sticky top-0">
    <div className="container mx-auto h-16 flex items-center px-4 max-w-5xl">
      <Link to="/" className="mr-4">
        <img src="/images/icon.png" className="rounded-lg" width="40" alt=""/>
      </Link>
      <div>
        <Link to="/">
          <span className="color-black font-bold">
            Twelve O'clock App
          </span>
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar;
