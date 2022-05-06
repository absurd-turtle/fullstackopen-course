const Filter = ({ filterString, handleFilterChange }) => {
  return <>
    find countries <input value={filterString} onChange={handleFilterChange} />
  </>
}

export default Filter
