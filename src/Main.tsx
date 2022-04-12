import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Header from './components/home/Header';
import Login from './components/login/Login';
import Navigation from './components/home/Navigation';


const Main = () => {
  return (
    <>
        {/* <GlobalStyles />  */}
        {/* <Header />
        <Login />  */}
        <BrowserRouter>
          <GlobalStyles />
          <Header />
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/home' component={Navigation}/>
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default Main;
