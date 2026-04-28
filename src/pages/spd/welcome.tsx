import React from 'react';
import Layout from '../../components/Layout';
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';

type Props = {
  location: any;
}

const Welcome = ({ location }: Props) => (
  // TODO: Remove #access_token from the URL

  <Layout disabled>
    <div className="container max-w-5xl mx-auto px-4">
      <article className="col-lg-8 offset-lg-2">
        <div className="post-content">
          <h2 id="why">Welcome to Seconds Per Day app</h2>

          <p className="post-body-text">
            Your account has been created successfully! <br />Please click the button below to go back to the app.
          </p>
        </div>
      
        <a href="spd://settings" className="rounded-lg px-4 py-3 bg-black hover:bg-black/50 transition duration-300 text-gray-100 font-semibold">
          Go back to App
          <Icon path={ mdiChevronRight } className="inline h-8" />
        </a>
      </article>
    </div>
  </Layout>
)

export default Welcome;

export const Head = () => (
  <>
    <title>Welcome to Seconds Per Day app</title>
    <meta name="description" content="Welcome to Seconds Per Day, the app that helps you track your watch accuracy and performance." />
  </>
);