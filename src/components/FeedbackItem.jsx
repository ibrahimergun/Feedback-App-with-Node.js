import React from 'react';
import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';

function FeedbackItem(props) {
  return (
    <Card reverse={false}>
      <div className='num-display'>{props.feedbackItem.rating}</div>
      <button
        onClick={() => props.onDelete(props.feedbackItem.id)}
        className='close'
      >
        <FaTimes color='red' />
      </button>
      <div className='text-display'>{props.feedbackItem.text}</div>
    </Card>
  );
}

export default FeedbackItem;
