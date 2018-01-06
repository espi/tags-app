import { connect } from 'react-redux'
import { toggleTags } from '../actions'
import PeopleList from '../components/PeopleList'

const getVisiblePeople = (people, filter) => {
  switch (filter) {
    case 'SHOW_TAGGED':
      return people.filter(t => t.tagged)
    case 'SHOW_UNTAGGED':
      return people.filter(t => !t.tagged)
    case 'SHOW_ALL':
    default:
      return people
  }
}

const mapStateToProps = state => {
  return {
    people: getVisiblePeople(state.people, state.visibilityFilter)
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
