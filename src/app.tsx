import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Form from './pages/Form'
import Confirm from './pages/Confirm'
import Finish from './pages/Finish'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/confirm">
          <Confirm />
        </Route>
        <Route path="/finish">
          <Finish />
        </Route>
        <Route path="/">
          <Form />
        </Route>
      </Switch>
    </Router>
  )
}
