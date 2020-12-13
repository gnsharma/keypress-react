import React, { useState } from 'react'
import { KeyboardShortcut } from 'react-keypress'

import Square from './Square'

export default function ComponentA() {
  const [style, setStyle] = useState({ backgroundColor: 'blue' })

  const toggleGreen = () => {
    setStyle((style) => ({
      backgroundColor: style.backgroundColor === 'green' ? 'blue' : 'green'
    }))
  }

  return (
    <>
      <KeyboardShortcut
        combo='shift a'
        callback={toggleGreen}
        description='Toggles the component A background color to green'
      />
      <Square text='A' style={style} />
    </>
  )
}
