import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemTable from './item-table.js';

export default function InputField(prop) {
    const [input, setUserInput] = useState('');
    const [list, setList] = useState([]);
    const [weekday, setday] = useState('');
    const [newColumInput, setColumInput] =useState('');
    const [columNameList, setcolumName] = useState(['Date', 'Tittle']);
    const weekdays =[' ','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let navigate = useNavigate();

    window.onload = function() {
        if(!prop.checkCookie()) {
            console.log('No Cookie woooooooo !'); 
            window.location.href = '/';
        };
    };

    function confirmButton() {
        if(!input || input.indexOf(' ') === 0 || !document.getElementById('input').value) { 
            setUserInput(''); 
            return;
        }

        let data = { 'weekdays' : weekday, 'title': input};
        setList(prevItems  => [...prevItems , data]);
        setUserInput(''); 
    };

    function keyEnterPressed(e){
        if(e.key === 'Enter') { confirmButton(); }
    }

    const deleteOne = (title) => {
        setList(list.filter( ele => ele.title !== title) );
    }

    function cleanButton() {
        setList([]);
    }

    function updateList (weekday,title, index_) {
        list.map( (ele, index) => {
            if(index_ === index) {
                if(title !== ele.title) ele.title = title;
                if(weekday !== ele.weekday) ele.weekday = weekday;
            }
        } );
    }

    function logout() {
        prop.deleteCookie();
        navigate('/');
    }

    function addColum(e) {
        setcolumName(prevItems  => [...prevItems , newColumInput ]);
    }

    return (
        <div className="input-field">
            <p>Please type your work for today</p>
            <input id="input" type="text" value={input} onChange={ (e) => setUserInput(e.target.value) } onKeyDown={ keyEnterPressed }></input>
            <select id = "dropdown" onChange={ (e) => setday(e.target.value) }>
                {
                    weekdays.map( ele => {
                        return <option key={ ele } value={ele}>{ele}</option>
                    } )
                }
            </select>
            <button onClick={confirmButton}> confirm </button>
            <button onClick={cleanButton}> Clean All Work </button>
            <ul>
                {
                    list.map( (ele, index) => {
                        return (
                            <ItemTable key={index} index={index} title={ele.title} weekday={ ele.weekdays } weekdays={ weekdays } deleteOne={deleteOne} updateList={ updateList }></ItemTable>
                        );
                    })
                }
            </ul>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
