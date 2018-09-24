import React from 'react';
import { Alert } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">React 16.2 para Mercado Libre</h1>
    </header>
    <p className="App-intro">
      <Alert bsStyle="warning">
        Para comenzar con el curso, podes ir a la documentación oficial del mismo
      </Alert>
    </p>
    <p className="App-intro">
      <a href="/api">Documentación del curso</a>
    </p>
  </div>
);

export default App;
