import { Component, React } from 'react';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import '../../src/style/App.css';
import InputField from './InputField.js';
import LoginPage from './LoginPage.js';

export default class App extends Component {

  render(){
    return (
      <div className="wrapper">
        <Router>
          <Routes>
            <Route path={"/"} element={ <LoginPage /> }/>
            <Route path={"/home"} element={ <InputField/> } />
          </Routes>
        </Router>
      </div>
    );
  }
  
}
