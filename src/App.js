import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Homepage from './pages/Homepage';
import PokemonPage from './pages/PokemonPage';
import Header from './components/Header';
import Register from './components/Register';
import LogIn from './pages/LogIn';


const App = () => {

  const [userInfo, setUserInfo] = useState()

  useEffect(() => {
    if(localStorage.userInfo) setUserInfo(localStorage.userInfo)
    // window.addEventListener('localStorage', () => {
    //   const user = localStorage.getItem('userInfo')
    //   setUserInfo(user);
    // })
  }, []);

  return (
    <Router>
      {userInfo? 
      <>
      <Header/>
      <Container>
        <Route exact path='/' component={Homepage} />
        <Route path='/pokemon/:id' component={PokemonPage}/>
      </Container>
      </>
      :
      <>
        <Route exact path='/' component={LogIn} />
        <Route path='/register' component={Register}/>
      </>
       } 
    </Router>
  );
}

export default App;
