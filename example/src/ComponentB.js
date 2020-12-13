import React, { useState } from 'react'
import { KeyboardShortcut } from 'react-keypress'

import Square from './Square'

export default function ComponentB() {
  const [style, setStyle] = useState({ backgroundColor: 'blue' })

  const toggleRed = () => {
    setStyle((style) => ({
      backgroundColor: style.backgroundColor === 'red' ? 'blue' : 'red'
    }))
  }

  return (
    <>
      <KeyboardShortcut
        combo='alt b'
        callback={toggleRed}
        description='Toggles the component B background color to red'
      />
      <Square text='B' style={style} />
    </>
  )
}
