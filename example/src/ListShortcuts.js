import React from 'react'
import { withKeyboardShortcuts } from 'react-keypress'

import Square from './Square'

function ListShortcuts({ keyboardShortcuts }) {
  return (
    <Square>
      {keyboardShortcuts.map((combo) => (
        <div>
          <strong>{combo.value}</strong> - {combo.description}
        </div>
      ))}
    </Square>
  )
}

export default withKeyboardShortcuts(ListShortcuts)
