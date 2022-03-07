import React, {useState} from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';
import axios from 'axios';

import Login from './Login';
import Navbar from './Navigation/Navbar';
import Landing from './Landing/Landing';
import Recipes from './Recipes';
import Create from './Create';
import MakeDish from './MakeDish';
import Contact from './Contact';

const GlobalStyle = createGlobalStyle`
* {
  background-color: #849483;
}`;

function App () {
  const [username, setUsername] = useState('Guest');
  return (
    <>
    <GlobalStyle/>
      <Router>
        <Navbar userName = {username}/>
          <Routes>
            <Route path = "/" element ={<Landing />} />
            <Route path = "/contact" element ={<Contact />} />
          </Routes>
      </Router>
    </>
    );
}

export default App;
