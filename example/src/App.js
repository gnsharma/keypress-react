import React from 'react'

import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'
import ListShortcuts from './ListShortcuts'

const App = () => {
  return (
    <div className='app'>
      <ComponentA />
      <ComponentB />
      <ComponentC />
      <ListShortcuts />
    </div>
  )
}

export default App
