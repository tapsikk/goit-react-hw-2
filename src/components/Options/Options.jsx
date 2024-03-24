const Options = ({updateF}) => {
  return (
      <div>
          <button onClick={() => updateF("good")}>Good</button>
          <button onClick={() => updateF("neutral")}>Neutral</button>
          <button onClick={() => updateF("bad")}>Bad</button>
      </div>
  )
  }
  export default Options;