import React from 'react'
import PropTypes from 'prop-types'

const People = ({ onClick, email, phone, tagged }) => (
  <li
    onClick={onClick}
    style={ {
      textDecoration: tagged ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

People.propTypes = {
  onClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  tagged: PropTypes.bool.isRequired
}

export default People
