import { createContext, useState, useEffect } from "react";
import { json } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/feedback?_sort=rating&-view`
      );

      const data = await response.json();
      console.log(response);
      setFeedback(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure, you want to delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addNewFeedback = async (newFeedback) => {
    try {
      const response = await fetch("http://localhost:5000/feedback", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newFeedback),
      });

      const data = response.json();
      setFeedback([data, ...feedback]);
    } catch (error) {
      console.log(error.message);
    }
    // newFeedback.id = uuidv4();
    // setFeedback([newFeedback, ...feedback]);
  };
  const updateFeedback = (id, newValue) => {
    setFeedback(feedback.map((item) => (item.id === id ? newValue : item)));

    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        updateFeedback,
        deleteFeedback,
        editFeedback,
        addNewFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
