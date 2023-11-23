import React from 'react';
import Icon from '@mdi/react';
import { mdiStar, mdiStarOutline } from '@mdi/js';

import Layout from '../components/Layout';
import { SEO } from '../components/Seo';
import { REVIEW_LIST } from '../services/constants';
import ReviewItem from '../components/ReviewItem';

type Props = {
  location: any;
}

const TwelveAppOfficial = ({ location }: Props) => (
  <Layout
    location={ location }
  >
    <div className="px-4">
      <section className="flex flex-col sm:flex-col md:flex-row justify-between items-center mb-24 mt-8">
        <div className="text-content mr-0 md:mr-8 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to <br/> Twelve O'clock App</h1>
          <p className="mb-8">
            The easiest way to track your watch accuracy. <span className="text-red-500 font-bold inline-block">No devices needed.</span>
          </p>
          <div className="flex justify-center md:justify-start">
            <a href="https://apps.apple.com/app/twelve-oclock/id1570977980" className="mr-2">
              <img src="/images/download_appstore.png" width="144" height="48" alt="Appstore link"/>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.takethatdesign.twelveappofficial">
              <img src="/images/download_android.png" width="161" height="48" alt="Playstore link"/>
            </a>
          </div>
        </div>
        <div className="w-4/6 md:w-96">
          <img src="/images/thumbnail.png" alt="screenshot"/>
        </div>
      </section>

      <section className="text-center mb-20">
        <h2 className="text-2xl font-bold mb-2">Ratings and Reviews</h2>
        <p className="text-slate-500 mb-12">From App Store and Google Play around the world</p>

        <div className="max-w-xl mx-auto">
          {
            REVIEW_LIST.map(item => (
              <div className="mb-8" key={item.title}>
                <ReviewItem data={item} />
              </div>
            ))
          }
        </div>
      </section>
    </div>
  </Layout>
)

export default TwelveAppOfficial;

export const Head = () => {
  return (
    <SEO />
  );
}
