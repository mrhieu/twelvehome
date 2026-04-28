import React from 'react';
import { Link } from 'gatsby';
import Icon from '@mdi/react';
import { mdiApple } from '@mdi/js';

import './index.scss';

const MagnetickNavbar = () => (
  <nav className="navBar shadow-sm sticky top-0">
    <div className="container mx-auto h-16 px-4 max-w-5xl flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/magnetick/policy" className="mr-4 shrink-0">
          <img src="/images/magnetick/icon.png" className="rounded-lg" width="40" height="40" alt="" />
        </Link>
        <div>
          <Link to="/magnetick/policy">
            <span className="color-black font-bold">
              Magnetick
            </span>
          </Link>
        </div>
      </div>
      <div className="download-links flex items-center gap-2">
        <a href="https://apps.apple.com/app/magnetick/id0000000000" target="_blank" rel="noreferrer noopener">
          <Icon path={mdiApple} className="h-8" color="#64748b" />
        </a>
      </div>
    </div>
  </nav>
);

export default MagnetickNavbar;
