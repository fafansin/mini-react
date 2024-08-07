import * as React from 'react';
import Button from '@mui/material/Button';

import './App.css';

import Login from './pages/login/Login'

function App() {
  return (
    <div className="App">
      <Login/>
      <Button variant="contained">Hello world</Button>
    </div>
  );
}

export default App;
