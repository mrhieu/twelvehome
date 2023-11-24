import React from 'react';
import { mdiStar, mdiStarOutline } from '@mdi/js';
import Icon from '@mdi/react';

type Props = {
  data: any;
}

const ReviewItem = ({ data }: Props) => (
  <div className="reviewItem text-left">
    <div className="">
      <div className="font-bold">{ data.title }</div>
      <div className="flex mb-2">
        <Icon path={ mdiStar } color="#ff9500" size="16px" />
        <Icon path={ mdiStar } color="#ff9500" size="16px" />
        <Icon path={ mdiStar } color="#ff9500" size="16px" />
        <Icon path={ mdiStar } color="#ff9500" size="16px" />
        <Icon path={ data.rating === 5 ? mdiStar : mdiStarOutline } color="#ff9500" size="16px" />
      </div>
    </div>
    <div className="text-sm mb-1 text-slate-500">
      { data.metadata }
    </div>
    <div className="">
      { data.body }
    </div>
  </div>
)

export default ReviewItem;
