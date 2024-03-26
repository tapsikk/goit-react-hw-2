import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [feedbacks, setFeedbacks] = useState(
    JSON.parse(localStorage.getItem("marks")) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );

  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  useEffect(() => {
    setTotal(feedbacks.good + feedbacks.neutral + feedbacks.bad);
    localStorage.setItem("marks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  useEffect(() => {
    // формулу зробив як на вiдео, в теорiї була iнша :)
    if (total) setPositive(Math.round((feedbacks.good / total) * 100));
  }, [total]);

  const updateFeedback = (feedbackType) => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };
  const resetFeedbacks = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        updateF={updateFeedback}
        total={total}
        resetFeedbacks={resetFeedbacks}
      />
      {/* зменшити при тотал */}
      {total ? (
        <Feedback marks={feedbacks} total={total} positive={positive} />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
