import { useEffect } from 'react';
import axios from 'axios';

import { createContext, useState } from 'react';

const FeedbackContext = createContext({
  feedback: [],
  isLoading: true,
  feedbackEdit: {},
  newFeedback: () => {},
  deleteFeedback: () => {},
  editFeedback: () => {},
  updateFeedback: () => {},
});

export default FeedbackContext;

export const FeedbackContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = async () => {
    await axios
      .get('http://localhost:5000/feedback')
      .then(successfulResponse, unSuccesfullResponse);

    function successfulResponse(response) {
      setIsLoading(false);
      setFeedback(response.data);
    }
    function unSuccesfullResponse(error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update feedback item
  const updateFeedback = async (itemId, updatedItem) => {

    await axios
      .put(`http://localhost:5000/feedback/${itemId}`, updatedItem)
      .then(successfulResponse, unSuccesfullResponse);

    function successfulResponse(response) {
      setIsLoading(false);

      //getFeedback();

      setFeedback(
        feedback.map((item) => (item.id === itemId ? response.data : item)),
      );
      feedbackEdit.edit = false;
    }
    function unSuccesfullResponse(error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const newFeedback = async (newFeedback) => {
    await axios
      .post('http://localhost:5000/feedback', newFeedback)
      .then(successfulResponse, unSuccesfullResponse);

    function successfulResponse(response) {
      setIsLoading(false);
      setFeedback((prevValue) => [response.data, ...prevValue]);
    }
    function unSuccesfullResponse(error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure want to delete?')) {
      await axios
        .delete(`http://localhost:5000/feedback/${id}`)
        .then(successfulResponse, unSuccesfullResponse);

      function successfulResponse(response) {
        setIsLoading(false);
        setFeedback((prevValue) => [response.data, ...prevValue]);
      }
      function unSuccesfullResponse(error) {
        setIsLoading(false);
        console.log(error);
      }
      setFeedback(feedback.filter((filteredItems) => filteredItems.id !== id));
    } else return;
  };

  const feedbackContext = {
    feedback,
    newFeedback,
    deleteFeedback,
    editFeedback,
    feedbackEdit,
    isLoading,
    updateFeedback,
  };

  return (
    <FeedbackContext.Provider value={feedbackContext}>
      {props.children}
    </FeedbackContext.Provider>
  );
};
