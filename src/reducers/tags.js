const tags = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TAGS':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TAGS':
      return state.map(tag =>
        (tag.id === action.id) 
          ? {...tag, completed: !tag.completed}
          : tag
      )
    default:
      return state
  }
}

export default tags