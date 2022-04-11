import React from 'react';
import {Route, Routes} from 'react-router';
import GlobalStyles from './GlobalStyles';
// import Header from './components/home/Header';
// import Login from './components/login/Login';
import Navigation from './components/home/Navigation';


const Main = () => {
  return (
    <>
        <GlobalStyles /> 
        {/* <Header />
        <Login />  */}
        <Routes>
            <Route path='/home' element={<Navigation />}/>
        </Routes>

    </>
  );
}

export default Main;
