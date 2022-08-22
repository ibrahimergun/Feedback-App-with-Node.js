import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStaats';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure want to delete?')) {
      setFeedback(feedback.filter((newItems) => newItems.id !== id));
    } else return;
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedbackList={feedback} onDelete={deleteHandler} />
      </div>
    </>
  );
}
export default App;
