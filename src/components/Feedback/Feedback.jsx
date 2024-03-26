const Feedback = ({ marks }) => {
  const total = marks.good + marks.neutral + marks.bad;
  // формулу зробив як на вiдео, в теорiї була iнша :)
  const positive = Math.round(((marks.good + marks.neutral) / total) * 100)
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
