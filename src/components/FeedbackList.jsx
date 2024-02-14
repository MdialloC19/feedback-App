import React from "react";
import PropTypes from "prop-types";

import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedBack yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((data) => {
          return (
            <motion.div
              key={data.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                handleDelete={handleDelete}
                key={data.id}
                item={data}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((data) => {
  //       return (
  //         <FeedbackItem handleDelete={handleDelete} key={data.id} item={data} />
  //       );
  //     })}
  //   </div>
  // );
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
