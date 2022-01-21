import { React } from 'react';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import { useCookies } from 'react-cookie';
import '../../src/style/App.css';
import InputField from './InputField.js';
import LoginPage from './LoginPage.js';

export default function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  const createCookie = (inputUserName, inputUserpw) => {
    if(checkCookie()) return;
    setCookie('auth-cookie', inputUserName + inputUserpw, { path: '/' });
    console.log('[cookie] ---> created !');
  }

  function checkCookie() {
    return cookies['auth-cookie'] ? true : false;
  }

  function deleteCookie() {
    removeCookie('auth-cookie');
  }

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path={"/"} element={ <LoginPage createCookie={createCookie} checkCookie={checkCookie}/> }/>
          <Route path={"/home"} element={ <InputField checkCookie={checkCookie} deleteCookie={deleteCookie}/> }/>
        </Routes> 
      </Router>
    </div>
  );
  
}
