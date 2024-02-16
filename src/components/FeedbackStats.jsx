// import PropTypes from "prop-types";

import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <div className="feedback-stats">No feedback available</div>;
  }

  const totalRating = feedback.reduce((acc, cur) => {
    return acc + (cur.rating || 0);
  }, 0);

  const average = totalRating / feedback.length;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average.toFixed(1).replace(/[.,]0$/, "")}</h4>
    </div>
  );
}

// FeedbackStats.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };

export default FeedbackStats;
