import React from 'react';

import FeedbackItem from './FeedbackItem';
import { AnimatePresence, motion } from 'framer-motion';
import Card from './shared/Card';

function FeedbackList(props) {
  if (!props.feedbackList || props.feedbackList.length === 0) {
    return <Card className='card'>No Feedback Yet</Card>;
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {props.feedbackList.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              feedbackItem={item}
              onDelete={props.onDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
