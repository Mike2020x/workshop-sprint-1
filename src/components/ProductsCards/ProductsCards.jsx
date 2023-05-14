import "./index.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProductsCards(props) {
  const { id, image, title } = props;
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    const randomTime = Math.floor(Math.random() * 2 + 1) * 60;
    setTimeLeft(randomTime);

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          setTimerExpired(true);
          clearInterval(intervalId);
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="container">
      <div className="up">
        <img src={image} alt={title} />
        <h2 className="title">{title}</h2>
      </div>
      <div className="down">
        <div className="timer">
          {timerExpired ? (
            <p>Time is up!</p>
          ) : (
            <p>
              {minutes} minutes {seconds} seconds
            </p>
          )}
        </div>
        <Link
          className={`btn ${timerExpired ? "disabled" : ""}`}
          to={`/productdetail/${id}`}
          disabled={timerExpired}
        >
          Go to Details
        </Link>
      </div>
    </div>
  );
}

ProductsCards.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductsCards;
