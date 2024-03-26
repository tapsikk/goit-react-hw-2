import { useEffect, useState } from "react";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";
import Description from "./Description/Description";

const App = () => {
  const [feedbacks, setFeedbacks] = useState(
    JSON.parse(localStorage.getItem("marks")) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );

  useEffect(() => {
    localStorage.setItem("marks", JSON.stringify(feedbacks));
  }, [feedbacks]);

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
  const total = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positivePercentage = total > 0 ? Math.round((feedbacks.good / total) * 100) : 0;
  return (
    <>
      <Description />
      <Options
        isVisible={total > 0}
        updateF={updateFeedback}
        resetFeedbacks={resetFeedbacks}
      />
      {total > 0 ? (
        <Feedback
          marks={feedbacks}
          total={total}
          postive={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
