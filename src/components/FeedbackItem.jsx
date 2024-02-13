import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
function FeedbackItem({ item, handleDelete }) {
  // const [rating, setRating] = useState(Prating);
  // const [text, setText] = useState(Ptext);
  // const handClick = () => {
  //   setRating((prev) => {
  //     return prev + 1;
  //   });
  //   // setText("rating ok");
  // };

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
