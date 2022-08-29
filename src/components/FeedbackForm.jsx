import React, { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
  const { newFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setButtonDisabled(false);
    }
  }, [feedbackEdit]);

  const styles = {
    color: 'red',
    marginLeft: '0px',
    textAlign: 'center',
  };

  const changeHandler = (e) => {
    e.preventDefault();
    if (text === '') {
      setButtonDisabled(true);
      setMessage(null);
    } else if (text.trim().length > 0 && text.trim().length < 11) {
      setButtonDisabled(true);
      setMessage('Text must be a least 10 characters');
    } else {
      setText(text);
      setButtonDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const ratingHandler = (rating) => {
    setRating(rating);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const feedbackData = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, feedbackData);
      } else {
        newFeedback(feedbackData);
      }

      setButtonDisabled(true);
      setText('');
      setRating(10);
    }
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h2> How would you rate your service with us?</h2>
        <RatingSelect select={ratingHandler} selected={rating} />
        <div className='input-group'>
          <input
            type='text'
            onChange={changeHandler}
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={buttonDisabled}>
            Send
          </Button>
        </div>
        {message && (
          <div style={styles} className='message'>
            {message}
          </div>
        )}
      </form>
    </Card>
  );
}

export default FeedbackForm;
