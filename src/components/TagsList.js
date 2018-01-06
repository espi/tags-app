import React from 'react'
import PropTypes from 'prop-types'
import Tags from './Tags'

const TagsList = ({ tags, onTagsClick }) => (
  <ul>
    {tags.map(tag => (
      <Tags key={tag.id} {...tag} onClick={() => onTagsClick(tag.id)} />
    ))}
  </ul>
)

TagsList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTagsClick: PropTypes.func.isRequired
}

export default TagsList