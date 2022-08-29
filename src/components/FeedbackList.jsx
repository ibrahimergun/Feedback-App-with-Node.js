import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

import FeedbackItem from './FeedbackItem';
import { AnimatePresence, motion } from 'framer-motion';
import Card from './shared/Card';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (feedback.length === 0) {
    return <Card className='card'>No Feedback Yet</Card>;
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={Math.random()}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            >
            <FeedbackItem key={item.id} feedbackItem={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
