const Feedback = ({valueG, valueN, valueB}) =>{
  return (
      <div>
          <p>Good: {valueG}</p>
          <p>Neutral: {valueN}</p>
          <p>Bad: {valueB}</p>
      </div>
  )
}
export default Feedback;