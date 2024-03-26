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

  return (
    <>
      <Description />
      <Options
        isVisible={feedbacks.good || feedbacks.neutral || feedbacks.bad}
        updateF={updateFeedback}
        resetFeedbacks={resetFeedbacks}
      />
      {(feedbacks.good || feedbacks.neutral || feedbacks.bad) ? (
        <Feedback marks={feedbacks} />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
