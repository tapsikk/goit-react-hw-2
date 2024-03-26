import { useState } from "react";
import Description from "./components/description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
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
      <Options updateF={updateFeedback} resetFeedbacks={resetFeedbacks}/>
      { /* зменшити при тотал */}
      {( feedbacks.good || feedbacks.neutral || feedbacks.bad) ?  <Feedback
        marks={feedbacks}
      /> : <p>No feedback yet</p>
}
    </>
  );
};

export default App;
