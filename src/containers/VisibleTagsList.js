import { connect } from 'react-redux'
import { toggleTags } from '../actions'
import TagsList from '../components/TagsList'

const getVisibleTagss = (tags, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return tags.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return tags.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return tags
  }
}

const mapStateToProps = state => {
  return {
    tags: getVisibleTagss(state.tags, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTagsClick: id => {
      dispatch(toggleTags(id))
    }
  }
}

const VisibleTagsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsList)

export default VisibleTagsList
