import { Component } from 'react';

export default class DoList extends Component {

    render(){
        return (
            <div className="list-item">
                <ul>{
                    this.props.msg.map(ele => {
                        return <li key={ele.key}>{ele.key}</li> })
                }</ul>
            </div>
        );
    }
  
}
