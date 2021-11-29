import { useState } from 'react';
import DoList from './DoList.js';

export default function InputField(prop) {
    const [input, setUserInput] = useState('');
    const [list, setList] = useState([]);

    window.onload = function() {
        if(!prop.checkCookie()) {
            console.log('No Cookie woooooooo !');
            window.location.href = '/';
        };
    };

    function userInputChange(e){
        setUserInput({input : e.target.value});
    }

    function confirmButton() {
        if(!input || Object.values(input).indexOf(' ') === 0 || !document.getElementById('input').value) return;
        setList(prevItems  => [...prevItems , <li key={Object.values(input)[0]}>{Object.values(input)[0]}</li>]);
        document.getElementById('input').value = '';
    };

    function cleanButton() {
        setList([]);
    }

    const deleteOne = (index_) => {
        setList(list.filter( (ele, index) => index !== index_) );
    }

    return (
        <div className="input-field">
            <p>Please type your work for today</p>
            <input id="input" type="text" onChange={ (e) => userInputChange(e) } ></input>
            <button onClick={confirmButton}> confirm </button>
            <button onClick={cleanButton}> Clean All Work </button>
            <DoList msg={list} cleanOneLi={deleteOne} />
        </div>
        
    )
}
