import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // const [isLoading, setIsLoading] = useState(true);
  // setIsLoading(true); // just for deployment,
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure, you want to delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addNewFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
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
        // isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
