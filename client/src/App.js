import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './pages/Books';
import Nav from './components/Nav';
import Title from './components/Title';
import Saved from './pages/Saved';
import { Footer } from './components/Footer';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Router>
      <Container>
        <Nav />
        <Title />
        <Switch>
          <Route exact path={['/', '/books']}>
            <Books />
          </Route>
          <Route exact path={['/api/books']}>
            <Saved />
          </Route>
        </Switch>
        <Footer/>
      </Container>
    </Router>
  );
}

export default App;
