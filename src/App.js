import './App.css';
import Header from './components/header/Header';
import HomePage from './components/body/Homepage';
import SignupForm from './components/signUp/SignupForm';
import React, {Fragment} from 'react';

function App() {
  return (
    <Fragment>
      <Header className = "header"/>
      <body className='mainbody'>
        <HomePage/>
        {/* <SignupForm className="login"/> */}
        {/* <LoginForm className="login"/> */}
      </body>
    </Fragment>
  );
}
export default App;
