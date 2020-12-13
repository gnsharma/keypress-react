# keypress-react

> React wrapper for Keypress.js

  This library is a react wrapper around the excellent Keypress.js https://dmauro.github.io/Keypress/.

[![NPM](https://img.shields.io/npm/v/keypress-react.svg)](https://www.npmjs.com/package/keypress-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save keypress-react
```

## Usage

  This library has 3 public components.

1. `KeyboardShortcutsProvider` is the Context Provider Component

         import { KeyboardShortcutsProvider } from 'keypress-react'

    This should be at the top of the component tree for which you want to enable shortcuts. It passes the keyboard shortcut context down to your app. All the keyboard shortcut are store in this context.
      
  2. `KeyboardShortcut` is the Shortcut Component

         import { KeyboardShortcut } from 'keypress-react'

       This component take the props `combo`  along with the `callback` and the `description`. 

         <KeyboardShortcuts combo="shift a" callback={callback} description="Example Shortcut" />

  3. `withKeyboardShortcuts` is the HOC Component

         import { withKeyboardShortcuts } from 'keypress-react'

      This is a higher order components. This will inject a prop `keyboardShortcuts` into the provided component. This props contains all the keyboard shortcuts. It is an array of objects with value and description keys.
    
          withKeyboardShortcuts(Component)

  


## License

MIT © [Govind N Sharma](https://github.com/Govind N Sharma)
