import React, { useState } from 'react'
import { KeyboardShortcut } from 'react-keypress'

import Square from './Square'

export default function ComponentC() {
  const [style, setStyle] = useState({ backgroundColor: 'blue' })

  const toggleYellow = () => {
    setStyle((style) => ({
      backgroundColor: style.backgroundColor === 'yellow' ? 'blue' : 'yellow'
    }))
  }

  return (
    <>
      <KeyboardShortcut
        combo='alt ctrl c'
        callback={toggleYellow}
        description='Toggles the component C background color to yellow'
      />
      <Square text='C' style={style} />
    </>
  )
}
