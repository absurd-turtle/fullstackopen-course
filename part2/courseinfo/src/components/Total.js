const Total = (props) => {
  const sumExercises = (arr) => arr.reduce((previous, current) =>
    previous + current.exercises, 0)

  return (
    <p><b>total of {sumExercises(props.parts)} exercises</b></p>
  )
}

export default Total
