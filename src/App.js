import { useState } from 'react';
import { v4 } from 'uuid';

import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStaats';
import FeedbackForm from './components/FeedbackForm';

import './App.css';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const newFeedback = (newFeedback) => {
    newFeedback.id = v4();
    setFeedback(prevValue => [newFeedback, ...prevValue]);
  };

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure want to delete?')) {
      setFeedback(feedback.filter((newItems) => newItems.id !== id));
    } else return;
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm feedbackData={newFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedbackList={feedback} onDelete={deleteHandler} />
      </div>
    </>
  );
}
export default App;
