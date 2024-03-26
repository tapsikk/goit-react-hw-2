const Feedback = ({ marks }) => {
  const total = marks.good + marks.neutral + marks.bad;
  return (
    <div>
      <p>Good: {marks.good}</p>
      <p>Neutral: {marks.neutral}</p>
      <p>Bad: {marks.bad}</p>
      <p>Total: {total}</p>
    </div>
  );
};
export default Feedback;
