import React from 'react';
import Jumbotron from './components/Jumbotron'
import SearchBooks from './pages/SearchBooks'
// import SavedBooks from './pages/SavedBooks'
import NavTabs from './components/NavTabs'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <Router>
        <Jumbotron />
        <Route exact path={['/', '/search']}>
          {/* <SearchBooks /> */}
          <Container>
          < NavTabs />
          </Container>
        </Route>
        {/* <Route exact path='/saved'>
          <SavedBooks />
        </Route> */}
      </Router>
    </div>
  )
}

export default App;
