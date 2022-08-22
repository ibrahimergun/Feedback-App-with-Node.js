import React from 'react';

function FeedbackStats(props) {
  let average =
    props.feedback.reduce((sum, cur) => {
      return sum + cur.rating;
    }, 0) / props.feedback.length;

  return (
    <div className='feedback-stats'>
      <h4>{props.feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : Math.round(average)}</h4>
    </div>
  );
}

export default FeedbackStats;
