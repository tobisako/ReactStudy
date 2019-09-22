import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import TestContainer from './component/container/TestContainer'
import NomalForm from './component/NomalForm'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
        <Route exact path="/" component={TestContainer} />
          <Route exact path="/test" component={NomalForm} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
