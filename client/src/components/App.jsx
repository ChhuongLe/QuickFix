import React, {useState, useEffect} from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';
import axios from 'axios';

import dummyData from '../../../sampleData.json';
import Login from './Login/Login';
import Navbar from './Navigation/Navbar';
import Landing from './Landing/Landing';
import Recipes from './RecipeList/Recipes';
import Create from './Create';
import MakeDish from './MakeDish';
import Contact from './Contact';

const GlobalStyle = createGlobalStyle`
* {
  background-color: #849483;
}`;

const App = () => {
  const [username, setUsername] = useState('Guest');
  const [data, setData] = useState([]);

  // const getDefault = () =>{
  //   axios.get('/default')
  //   .then((res)=>{
  //     setData(res.data);
  //   })
  //   .catch((err)=>{
  //     alert("Error getting data");
  //   });
  // };

  // Ran out of API calls for the day so I use this as a sample 10
  const getDefault = () => {
    setData(dummyData.recipes);
  }

  useEffect(() => {
    getDefault();
  }, []);



  return (
    <>
    <GlobalStyle/>
      <Router>
        <Navbar userName = {username}/>
          <Routes>
            <Route path = "/" element ={<Landing />} />
            <Route path = "/recipes" element = {<Recipes recipes={data}/>} />
            <Route path = "/contact" element ={<Contact />} />
          </Routes>
      </Router>
    </>
    );
}

export default App;
