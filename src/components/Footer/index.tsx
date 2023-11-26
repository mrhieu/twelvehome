import React from 'react';

import { InnerContainer } from '../Layout';

const Footer = () => {
  return (
    <section className="text-center md:text-left pt-4 pb-4 bg-black">
      <InnerContainer>
        <div className="text-center text-slate-600 text-xs">
          Twelve O'clock App © {new Date().getFullYear()}
        </div>
      </InnerContainer>
    </section>
  )
}

export default Footer;
