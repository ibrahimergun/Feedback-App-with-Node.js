import React, { useState, useRef } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
  const [text, setText] = useState('');
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
      setButtonDisabled(false);
      setMessage(null);
    }
  };

  const reviewHandler = (e) => {
    e.preventDefault();
    setText(inputValue.current.value);
    inputValue.current.value = '';
  };
  console.log(text);

  return (
    <Card>
      <form onSubmit={reviewHandler}>
        <h2> How would you rate your service with us?</h2>
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
            {' '}
            {message}{' '}
          </div>
        )}
      </form>
    </Card>
  );
}

export default FeedbackForm;
