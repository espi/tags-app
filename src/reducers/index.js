import { combineReducers } from 'redux'
import tags from './tags'
import visibilityFilter from './visibilityFilter'

const tagApp = combineReducers({
  tags,
  visibilityFilter
})

export default tagApp
