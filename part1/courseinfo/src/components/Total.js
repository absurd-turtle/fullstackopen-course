const Total = (props) => {
  const sum = (arr) => {
    let res = 0
    arr.forEach(element => {
      res += element
    })
    return res
  }
  return (
    <p>Number of exercises {sum(props.exercises)}</p>
  )
}

export default Total
