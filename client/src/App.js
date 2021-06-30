import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Router>
      <Container>
        <Nav />
       
      </Container>
    </Router>
  );
}

export default App;
