import React from 'react';
import { Link } from 'gatsby';
import Icon from '@mdi/react';
import { mdiApple } from '@mdi/js';
import { mdiGooglePlay } from '@mdi/js';

import './index.scss';

type Props = {}

const Navbar = ({}: Props) => (
  <nav className="navBar shadow-sm sticky top-0">
    <div className="container mx-auto h-16 px-4 max-w-5xl flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="mr-4 shrink-0">
          <img src="/images/icon.png" className="rounded-lg" width="40" height="40" alt=""/>
        </Link>
        <div>
          <Link to="/">
            <span className="color-black font-bold">
              Twelve O'clock App
            </span>
          </Link>
        </div>
      </div>
      <div className="download-links flex items-center gap-2">
        <a href="https://apps.apple.com/app/twelve-oclock/id1570977980" className="mr-2" target="_blank" rel="noreferrer nopener">
          <Icon path={ mdiApple } className="h-8" color="#64748b" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.takethatdesign.twelveappofficial" target="_blank" rel="noreferrer nopener">
          <Icon path={ mdiGooglePlay } className="h-8" color="#64748b" />
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar;
