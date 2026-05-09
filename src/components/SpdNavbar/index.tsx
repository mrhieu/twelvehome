import React from 'react';
import { Link } from 'gatsby';
import Icon from '@mdi/react';
import { mdiApple } from '@mdi/js';

import { SPD_APP_STORE_URL } from '../../constants/spd';
import './index.scss';

type Variant = 'light' | 'dark';

interface Props {
  variant?: Variant;
  homeHref?: string;
}

const SpdNavbar = ({ variant = 'light', homeHref = '/spd/policy' }: Props) => {
  const isDark = variant === 'dark';
  const navClass = isDark ? 'navBar navBar--dark' : 'navBar';
  const titleClass = isDark ? 'font-bold text-white' : 'color-black font-bold';
  const iconColor = isDark ? '#e2e8f0' : '#64748b';

  return (
    <nav className={`${navClass} shadow-sm sticky top-0 z-20`}>
      <div className="container mx-auto h-16 px-4 max-w-5xl flex items-center justify-between">
        <div className="flex items-center">
          <Link to={homeHref} className="mr-4 shrink-0">
            <img src="/images/spd/icon.png" className="rounded-lg" width="40" height="40" alt="" />
          </Link>
          <div>
            <Link to={homeHref}>
              <span className={titleClass}>
                Seconds per day
              </span>
            </Link>
          </div>
        </div>
        <div className="download-links flex items-center gap-2">
          <a href={SPD_APP_STORE_URL} target="_blank" rel="noreferrer noopener">
            <Icon path={mdiApple} className="h-8" color={iconColor} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SpdNavbar;
