import React, { useContext, useEffect, useState } from 'react'
import styles from './styles.module.css'

import { Listener } from 'keypress.js'

const KeyboardShortcutsContext = React.createContext({
  combos: [],
  setCombos: () => {}
})

var listener = new Listener()

const KeyboardShortcutsProvider = ({ children }) => {
  const [combos, setCombos] = useState([])
  return (
    <KeyboardShortcutsContext.Provider value={{ combos, setCombos }}>
      {children}
    </KeyboardShortcutsContext.Provider>
  )
}

const withKeyboardShortcuts = (Component) => ({ ...props }) => {
  const { combos } = useContext(KeyboardShortcutsContext)
  return <Component keyboardShortcuts={combos} {...props} />
}

const KeyboardShortcut = ({ combo, callback, description }) => {
  const { setCombos } = useContext(KeyboardShortcutsContext)
  useEffect(() => {
    const comboObject = listener.simple_combo(combo, callback)
    setCombos((combos) => [
      ...combos,
      {
        value: combo,
        description,
        comboObject
      }
    ])

    return () => {
      listener.unregister_combo(comboObject)
      setCombos((combos) =>
        combos.filter(
          (keypressCombo) => keypressCombo.comboObject !== comboObject
        )
      )
    }
  }, [])
  return null
}

export { KeyboardShortcutsProvider, KeyboardShortcut, withKeyboardShortcuts }
