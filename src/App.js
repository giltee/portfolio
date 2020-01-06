import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'hookrouter';
import Routes from './utils/routes';
import { Nav } from './components/';
import { Container } from '@material-ui/core'
function App() {
  // setup hook router for navigation
  const router = useRoutes(Routes);
  return (
    <div className="App">
      <Nav />

    </div>
  );
}

export default App;
