const Feedback = ({ marks, total, postive }) => {
  // const total = marks.good + marks.neutral + marks.bad;
  // Math.round((good / totalFeedback) * 100)
  return (
    <div>
      <p>Good: {marks.good}</p>
      <p>Neutral: {marks.neutral}</p>
      <p>Bad: {marks.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {postive}</p>
    </div>
  );
};
export default Feedback;
