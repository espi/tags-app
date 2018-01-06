import React from 'react'
import { connect } from 'react-redux'
import { addTags } from '../actions'

let AddTags = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTags(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Tags
        </button>
      </form>
    </div>
  )
}
AddTags = connect()(AddTags)

export default AddTags
