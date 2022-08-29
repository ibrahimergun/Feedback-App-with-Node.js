import React,{useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {

  const {feedback} = useContext(FeedbackContext);

  let average =
    feedback.reduce((sum, cur) => {
      return sum + cur.rating;
    }, 0) / feedback.length;

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : Math.round(average)}</h4>
    </div>
  );
}

export default FeedbackStats;
