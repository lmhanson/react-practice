import { Component } from 'react';
import '../../src/style/App.css';
import InputField from './InputField.js';

export default class App extends Component {

  render(){
    return (
      <div className="wrapper">
        <InputField />
      </div>
    );
  }
  
}
