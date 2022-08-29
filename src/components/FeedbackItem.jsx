import React,{useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';


import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';

function FeedbackItem(props) {

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext);

  return (
    <Card reverse={false}>
      <div className='num-display'>{props.feedbackItem.rating}</div>
      <button
        onClick={() => deleteFeedback(props.feedbackItem.id)}
        className='close'
      >
        <FaTimes color='red' />
      </button>
      <button
        onClick={() => editFeedback(props.feedbackItem)}
        className='edit'
      >
        <FaEdit color='red' />
      </button>
      <div className='text-display'>{props.feedbackItem.text}</div>
    </Card>
  );
}

export default FeedbackItem;
