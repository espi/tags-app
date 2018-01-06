let nextTagsId = 0
export const addTags = text => {
  return {
    type: 'ADD_TAGS',
    id: nextTagsId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTags = id => {
  return {
    type: 'TOGGLE_TAGS',
    id
  }
}

let nextPeopleId = 0
export const addPeople = text => {
  return {
    type: 'ADD_PEOPLE',
    id: nextPeopleId++,
    text
  }
}

export const togglePeople = id => {
  return {
    type: 'TOGGLE_PEOPLE',
    id
  }
}