import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import About from './About'
import Home from './Home'
import ItemDetails from './ItemDetails'

const StyleWrapper = styled.div`
  font-family: Raleway;
  position: relative;
  margin: 0px 20px;
`

const App = (props) => {
  return (
    <Router>
      <StyleWrapper>
      <Header />
    <Switch>
      <Route path='/item/:id'>
        <ItemDetails />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
    </StyleWrapper>
    </Router>
  )
};

export default App;
