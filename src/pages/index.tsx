import React from 'react';

import Layout from '../components/Layout';
import { SEO } from '../components/Seo';
import Hero from '../components/Hero';
import Reviews from '../components/Reviews';
import Connect from '../components/Connect';
import Footer from '../components/Footer';

type Props = {
  location: any;
}

const App = ({ location }: Props) => (
  <Layout>
    <Hero />
    <Reviews />
    <Connect />
    <Footer />
  </Layout>
)

export default App;

export const Head = () => {
  return (
    <SEO />
  );
}
