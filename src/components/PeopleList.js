import React from 'react'
import PropTypes from 'prop-types'
import People from './People'

const PeopleList = ({ people, onPeopleClick }) => (
  <ul>
    {people.map(person => (
      <People key={person.id} {...person} onClick={() => onPeopleClick(person.id)} />
    ))}
  </ul>
)

PeopleList.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.number.isRequired,
      tagged: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  onPeopleClick: PropTypes.func.isRequired
}

export default PeopleList