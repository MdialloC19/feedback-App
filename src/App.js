import React, { useState } from "react";
import Header from "./components/Header";
import Card from "./components/shared/Card";
// import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
function App() {
  let [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure, you want to delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        <Card>hello World</Card>
      </div>
    </>
  );
}

export default App;
