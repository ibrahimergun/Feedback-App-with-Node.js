import React from 'react';

import FeedbackItem from './FeedbackItem';
import Card from './shared/Card';

function FeedbackList(props) {
  if (!props.feedbackList || props.feedbackList.length === 0) {
    return <Card className='card'>No Feedback Yet</Card>;
  }

  return (
    <div className='feedback-list'>
      {props.feedbackList.map((item) => (
        <FeedbackItem
          key={item.id}
          feedbackItem={item}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
