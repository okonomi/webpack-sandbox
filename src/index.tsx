import React from 'react'
import ReactDOM from 'react-dom'

const elem = document.getElementById('react-app')

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<div>hello webpack</div>, elem)
})
