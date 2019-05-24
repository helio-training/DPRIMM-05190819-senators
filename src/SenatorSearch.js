import React, { useState } from 'react'

// export default ({ onSearched }) => {
export default props => {
  const [filterState, setFilterState] = useState('')
  const [filterName, setName] = useState('')
  const [filterParty, setParty] = useState('')

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        const filter = { state: filterState, party: filterParty, name: filterName }

        if (props.onSearched) {
          props.onSearched(filter)
        }
      }}
    >
      <label htmlFor="state">State</label>
      <input type="text" className="inPut" name="state" minLength="2" maxLength="2" value={filterState} onChange={e => setFilterState(e.target.value)} />
      <label htmlFor="name">Name</label>
      <input type="text" className="inPut" name="name" value={filterName} onChange={e => setName(e.target.value)} />
      <select onChange={e => setParty(e.target.value)}>
        <option value="">All</option>
        <option value="Democrat">Democrat</option>
        <option value="Republican">Republican</option>
        <option value="Independent">Independent</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  )
}
