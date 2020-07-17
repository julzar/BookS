import React from 'react';
import Jumbotron from './components/Jumbotron'
import SearchBooks from './pages/SearchBooks'
import SavedBooks from './pages/SavedBooks'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';


function App() {
  

  return (
    <div className="App">
      <Router>
        <Jumbotron />
        <Container>
          <Row className='mb-4 d-flex justify-content-center'>
            <Col className='col-2' style={{borderRight: "1px solid lightgrey"}}>
              <Link to='/search' style={{color: "grey"}}>Search Books</Link>
            </Col>
            <Col className='col-2 d-flex justify-content-end'>
              <Link to='/saved' style={{color: "grey"}}>View Saved</Link>
            </Col>
          </Row>
        </Container>
        <Route exact path={['/', '/search']}>
          <Container>
            <SearchBooks />
          </Container>
        </Route>
        <Route exact path='/saved'>
          <Container>
            <SavedBooks />
          </Container>
        </Route>
      </Router>
    </div>
  )
}

export default App;
