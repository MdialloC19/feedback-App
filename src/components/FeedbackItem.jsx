import Card from "./shared/Card";
import PropTypes from "prop-types";
function FeedbackItem({ item }) {
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
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
