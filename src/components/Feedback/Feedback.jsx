const Feedback = ({ marks, total, positive }) => {
  // const total = marks.good + marks.neutral + marks.bad;
  // Math.round((good / totalFeedback) * 100)
  return (
    <div>
      <p>Good: {marks.good}</p>
      <p>Neutral: {marks.neutral}</p>
      <p>Bad: {marks.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
};
export default Feedback;
