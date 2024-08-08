import * as React from 'react';
import Container from '@mui/material/Container';

import './App.css';

import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {
  return (
    <Container variant="fluid">
      {/* <Login/>   */}
      <Signup/>
    </Container>
  );
}

export default App;
