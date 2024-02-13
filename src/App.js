import React, { useState } from "react";
import Header from "./components/Header";
import Card from "./components/shared/Card";
// import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedBack, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedBack} />
        <Card>hello World</Card>
      </div>
    </>
  );
}

export default App;
