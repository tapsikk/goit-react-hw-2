// import Profile from './components/Profile/Profile';
import { useState } from 'react';
import Description from "./components/description/Description";
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';

const App = () => {
  const [feedbacks, setFeedbacks] = useState ({
    good: 0,
    neutral: 0,
    bad: 0
  })
  const updateFeedback = feedbackType => {
    setFeedbacks(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  }  
  return (
    <>
    <Description/>
    <Options updateF={updateFeedback} />
    <Feedback 
      valueG = {feedbacks.good}
      valueN = {feedbacks.neutral}
      valueB = {feedbacks.bad}
    />
    </>
  )
}

export default App;
