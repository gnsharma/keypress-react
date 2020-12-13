import React from 'react'

export default function Square({ text, style, children }) {
  return (
    <div style={style} className='square'>
      {text} {children}
    </div>
  )
}
