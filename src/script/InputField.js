import { Component } from 'react';
import DoList from './DoList.js';

export default class InputField extends Component {

    state = {
        msg : '',
        input: '',
        list : [],    
    }

    userInputChange(e){
        this.setState({
            input : e.target.value
        });
    }

    confirmButton = () => {
        if(!this.state.input || this.state.input.indexOf(' ') === 0 || !document.getElementById('input').value) return;
        var inputArray = this.state.list.slice();
        inputArray.push(<li key={this.state.input}>{this.state.input}</li>);
        this.setState({
            list : inputArray
        });
        document.getElementById('input').value = '';
    };

    cleanButton = (e) => {
        this.setState({
            list : []
        });
    }

    deleteOne = (index_) => {
        var list_ = this.state.list.slice();
        list_ = list_.filter( (ele, index) => index !== index_);
        this.setState({
            list : list_
        });
    }


  render(){
    return (
      <div className="input-field">
            <p>Please type your work for today</p>
            <input id="input" type="text" onChange={ (e) => this.userInputChange(e) } ></input>
            <button onClick={this.confirmButton}> confirm </button>
            <button onClick={this.cleanButton}> Clean All Work </button>
            <DoList msg={this.state.list} cleanOneLi={this.deleteOne} />
      </div>
      
    )
  }
  
}
