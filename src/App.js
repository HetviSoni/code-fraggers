import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import HomePage from './components/body/homepage';
import React, {Fragment} from 'react';
function App() {
  return (
    <Fragment>
      <Header className = "header"/>
      <body className='mainbody'>
        <HomePage/>
        {/* <SignupForm className="login"/>
        <LoginForm className="login"/> */}
      </body>
    </Fragment>
  );
}
export default App;
