const Total = (props) => {
  const sumExercises = (arr) => {
    let res = 0
    arr.forEach(element => {
      res += element.exercises
    })
    return res
  }
  return (
    <p>Number of exercises {sumExercises(props.parts)}</p>
  )
}

export default Total
