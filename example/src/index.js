import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { KeyboardShortcutsProvider } from 'react-keypress'
import 'react-keypress/dist/index.css'

import App from './App'

ReactDOM.render(
  <KeyboardShortcutsProvider>
    <App />
  </KeyboardShortcutsProvider>,
  document.getElementById('root')
)
