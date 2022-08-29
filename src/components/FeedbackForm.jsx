import React, { useState, useRef } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm(props) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const styles = {
    color: 'red',
    marginLeft: '0px',
    textAlign: 'center',
  };

  const inputValue = useRef();

  const changeHandler = (e) => {
    e.preventDefault();
    if (
      inputValue.current.value === '' &&
      inputValue.current.value.trim().length === 0
    ) {
      setButtonDisabled(true);
      setMessage(null);
    } else if (
      inputValue.current.value.trim().length > 0 &&
      inputValue.current.value.trim().length < 11
    ) {
      setButtonDisabled(true);
      setMessage('Text must be a least 10 characters');
    } else if (inputValue.current.value.trim().length > 10) {
      setText(inputValue.current.value);
      setButtonDisabled(false);
      setMessage(null);
    }
  };

  const ratingHandler = (rating) => {
    setRating(rating);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      props.feedbackData(newFeedback);
      setButtonDisabled(true);
      setRating(10);
      inputValue.current.value ='';
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
            ref={inputValue}
            onChange={changeHandler}
            placeholder='Write a review'
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
