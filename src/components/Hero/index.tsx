import React from 'react';

import { InnerContainer } from '../Layout';

const Hero = () => {
  return (
    <section className="bg-[url('/images/hero_bg.jpg')] bg-cover bg-left md:bg-center">
      <InnerContainer>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 pb-8">
          <div className="text-content mr-0 md:mr-8 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Welcome to
              <br/>
              <span className="inline-block">Twelve O'clock App</span>
            </h1>
            <p className="text-base lg:text-xl mb-8 text-white">
              The easiest way to track your watch accuracy. <span className="font-bold inline-block">No devices needed.</span>
            </p>
            <div className="flex justify-center md:justify-start">
              <a href="https://apps.apple.com/app/twelve-oclock/id1570977980" className="mr-2" rel="noreferrer nopener">
                <img src="/images/download_appstore.png" width="144" height="48" alt="Appstore link"/>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.takethatdesign.twelveappofficial" rel="noreferrer nopener">
                <img src="/images/download_android.png" width="161" height="48" alt="Playstore link"/>
              </a>
            </div>
          </div>
          <div className="w-4/6 md:w-96">
            <img src="/images/thumbnail.png" alt="screenshot"/>
          </div>
        </div>
      </InnerContainer>
    </section>
  )
}

export default Hero;
