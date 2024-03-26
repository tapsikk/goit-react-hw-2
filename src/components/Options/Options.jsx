const Options = ({ updateF, resetFeedbacks, total }) => {
  return (
    <div>
      <button onClick={() => updateF("good")}>Good</button>
      <button onClick={() => updateF("neutral")}>Neutral</button>
      <button onClick={() => updateF("bad")}>Bad</button>
      {total ? <button onClick={resetFeedbacks}>Reset</button>: <></>}
    </div>
  );
};
export default Options;
