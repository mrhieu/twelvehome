import React from 'react';

import { InnerContainer } from '../Layout';
import { REVIEW_LIST } from '../../services/constants';
import ReviewItem from '../ReviewItem';

const Reviews = () => {
  return (
    <section className="text-center md:text-left pt-12 pb-12 bg-[url('/images/reviews_bg.png')] bg-repeat bg-center">
      <InnerContainer>
        <h2 className="text-2xl font-bold mb-2">Ratings and Reviews</h2>
        <p className="text-slate-500 mb-12">From App Store and Google Play around the world</p>

        <div className="columns-1 md:columns-2 gap-8 break-inside-avoid">
          {
            REVIEW_LIST.map(item => (
              <div className="mb-8" key={item.title}>
                <ReviewItem data={item} />
              </div>
            ))
          }
        </div>
      </InnerContainer>
    </section>
  )
}

export default Reviews;
