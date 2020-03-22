import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const elem = document.getElementById('react-app')

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, elem)
})
