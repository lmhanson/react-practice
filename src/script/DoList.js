import { Component } from 'react';

export default class DoList extends Component {

    deleteItself = (index) => {
        this.props.cleanOneLi(index);
    }
    
    render(){
        return (
            <div className="list-item">
                <ul>{
                    this.props.msg.map( (ele, index) => {
                        return <li key={ index }> { ele.key } 
                                    <button onClick={ () => this.props.cleanOneLi(index)}>Delete work</button>
                                </li>
                    })
                }</ul>
            </div>
        );
    }
  
}
