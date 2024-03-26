const Options = ({ updateF, resetFeedbacks }) => {
  return (
    <div>
      <button onClick={() => updateF("good")}>Good</button>
      <button onClick={() => updateF("neutral")}>Neutral</button>
      <button onClick={() => updateF("bad")}>Bad</button>
      <button onClick={resetFeedbacks}>Reset</button>
    </div>
  );
};
export default Options;
