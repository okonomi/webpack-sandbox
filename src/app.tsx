import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const Form = React.lazy(() => import('./pages/Form'))
const Confirm = React.lazy(() => import('./pages/Confirm'))
const Finish = React.lazy(() => import('./pages/Finish'))

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Router>
  )
}
