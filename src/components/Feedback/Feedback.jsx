const Feedback = ({ marks }) => {
  const total = marks.good + marks.neutral + marks.bad;
  const positive = Math.round((marks.good / total) * 100)
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
