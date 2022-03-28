import React from 'react';
import GlobalStyles from './GlobalStyles';
import Header from './components/home/Header';
import Login from './components/login/Login';



const Main = () => {
  return (
    <>
        <GlobalStyles />
        <Header />
        <Login />
    </>
  );
}

export default Main;
