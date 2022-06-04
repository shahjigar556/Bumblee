import React, { useState } from 'react'
import './App.css'
import Switch from 'react-ios-switch'

import Advanced from './examples/Advanced'
import Simple from './examples/Simple'

function App () {
  const [showAdvanced, setShowAdvanced] = useState()

  return (
    <div className='app'>
      <Simple reject={false} />
    </div>
  )
}

export default App
