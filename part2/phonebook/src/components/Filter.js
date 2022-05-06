const Filter = ({ filterString, handleFilterChange }) => {
  return <>
    filter shown with <input value={filterString} onChange={handleFilterChange} />
  </>
}

export default Filter
