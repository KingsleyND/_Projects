import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Greet from './Greetings.jsx'
import Food from './Food'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greet />
    <Food/>
  </React.StrictMode>,
)
