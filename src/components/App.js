import React from 'react'
import Footer from './Footer'
import AddTags from '../containers/AddTags'
import VisibleTagsList from '../containers/VisibleTagsList'

const App = () => (
  <div>
    <AddTags />
    <VisibleTagsList />
    <Footer />
  </div>
)

export default App
