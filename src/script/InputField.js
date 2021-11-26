import { Component } from 'react';
import DoList from './DoList.js';

export default class InputField extends Component {
    state = {
        msg : '',
        input: '',
        list : []
        
    }

    userInputChange(e){
        this.setState({
            input : e.target.value
        });
    }

    confirmButton = () => {
        var inputArray = this.state.list.slice();
        inputArray.push(<li key={this.state.input}>{this.state.input}</li>);
        this.setState({
            list : inputArray
        });
    };


  render(){
    return (
      <div className="input-field">
            <p>Please type your work for today</p>
            <input type="text" onChange={ (e) => this.userInputChange(e) } ></input>
            <button onClick={this.confirmButton}> confirm </button>
            <DoList msg={this.state.list} />
      </div>
      
    )
  }
  
}
