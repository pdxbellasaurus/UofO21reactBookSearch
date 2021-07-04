import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './pages/Books';
import Saved from './pages/Saved';
import Nav from './components/Nav';
import Title from './components/Title';
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
            <Route exact path="/" component={Books} />
            <Route exact path="/api/books" component={Saved} />
            <Route exact path="/saved" component={Saved}/>
          </Switch>
        <Footer/>
      </Container>
    </Router>
  );
}

export default App;
