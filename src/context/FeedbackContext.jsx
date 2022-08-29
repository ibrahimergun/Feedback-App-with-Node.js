import { v4 } from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext({
  feedback: [],
  feedbackEdit: {},
  newFeedback: () => {},
  deleteFeedback: () => {},
  editFeedback: () => {},
  updateFeedback: () => {},
});

export default FeedbackContext;

export const FeedbackContextProvider = (props) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 9,
    },
    {
      id: 3,
      text: 'This is feedback item 3',
      rating: 7,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update feedback item
  const updateFeedback = (itemId, updatedItem) => {
    setFeedback(
      feedback.map((item) => (item.id === itemId ? updatedItem : item)),
    );
    feedbackEdit.edit = false;
  };

  const newFeedback = (newFeedback) => {
    newFeedback.id = v4();
    setFeedback((prevValue) => [newFeedback, ...prevValue]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure want to delete?')) {
      setFeedback(feedback.filter((filteredItems) => filteredItems.id !== id));
    } else return;
  };

  const feedbackContext = {
    feedback,
    newFeedback,
    deleteFeedback,
    editFeedback,
    feedbackEdit,
    updateFeedback,
  };

  return (
    <FeedbackContext.Provider value={feedbackContext}>
      {props.children}
    </FeedbackContext.Provider>
  );
};
