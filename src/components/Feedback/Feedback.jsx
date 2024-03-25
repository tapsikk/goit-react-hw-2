const Feedback = ({ marks }) => {
  return (
    <div>
      <p>Good: {marks.good}</p>
      <p>Neutral: {marks.neutral}</p>
      <p>Bad: {marks.bad}</p>
    </div>
  );
};
export default Feedback;
