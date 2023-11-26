import React from 'react';

import { InnerContainer } from '../Layout';

const Connect = () => {
  return (
    <section className="pt-12 pb-24 bg-slate-900">
      <InnerContainer>
        <h2 className="text-2xl font-bold mb-8 md:mb-4 text-white">Connect</h2>
        <div className="flex justify-start items-start md:items-center flex-col md:flex-row gap-8">
          <a href="https://twitter.com/twelveoclockapp" className="flex justify-center items-center gap-2" target="_blank" rel="noreferrer nopener">
            <img src="/images/x_icon.webp" width="48" height="48" className="w-12 rounded-lg" alt="Twitter link"/>
            <span className="text-white text-sm">/twelveoclockapp</span>
          </a>
          <a href="https://www.instagram.com/twelveoclockapp" className="flex justify-center items-center gap-2" target="_blank" rel="noreferrer nopener">
            <img src="/images/instagram_icon.webp" width="48" height="48" className="w-12 rounded-lg" alt="Instagram link"/>
            <span className="text-white text-sm">/twelveoclockapp</span>
          </a>
          <a href="mailto:twelveoclockapp@gmail.com" className="flex justify-center items-center gap-2">
            <img src="/images/mail_icon.webp" width="48" height="48" className="w-12 rounded-lg" alt="Instagram link"/>
            <span className="text-white text-sm">Send an email</span>
          </a>
        </div>
      </InnerContainer>
    </section>
  )
}

export default Connect;
