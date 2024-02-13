import React from "react";
import PropTypes from "prop-types";

import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedBack yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((data) => {
        return (
          <FeedbackItem handleDelete={handleDelete} key={data.id} item={data} />
        );
      })}
    </div>
  );
}

FeedbackItem.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
