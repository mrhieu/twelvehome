import React from 'react';

import Layout, { InnerContainer } from '../components/Layout';
import { SEO } from '../components/Seo';
import Hero from '../components/Hero';
import Reviews from '../components/Reviews';
import Connect from '../components/Connect';
import Footer from '../components/Footer';

type Props = {
  location: any;
}

const NotFoundPage = ({ location }: Props) => (
  <Layout>
    <div className="h-24 min-h-full">
      <InnerContainer>
        <div className="flex flex-col flex-center items-center pt-24 pb-24">
          <p className="text-2xl font-bold mb-8">Page not found</p>
          <img src="/images/404.jpeg" className="w-24 h-24 rounded-xl" alt="a cat" />
          <p className="text-sm text-slate-500 mt-2 mb-24">"Well, but you found me."</p>
          <a href="/" className="text-red-400 underline">Go home ▶</a>
        </div>
      </InnerContainer>
    </div>
  </Layout>
)

export default NotFoundPage;
