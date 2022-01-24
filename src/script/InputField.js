import { useEffect, useState } from 'react';
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

    useEffect( () => {
        
    });

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

    function deleteOne(index_) {
        setList(list.filter( ( (ele, index) => {
            return index !== index_;
        } ) ) );
        console.log(list);
    }

    function cleanButton() {
        setList([]);
    }

    function updateList (weekday,title, index_) {
        list.map( (ele, index) => {
            if(index_ === index) {
                if(title !== ele.title) return ele.title = title;
                if(weekday !== ele.weekday) return ele.weekday = weekday;
            }
            return null;
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
                        return <option key={ ele }>{ele}</option>
                    } )
                }
            </select>
            <button onClick={confirmButton}> confirm </button>
            <button onClick={cleanButton}> Clean All Work </button>
            <ul>
                {
                    list.map( (ele, index) => {
                        return (
                            <ItemTable key={ele.title + ele.weekdays + index} index={index} weekday={ ele.weekdays } title={ele.title} weekdays={ weekdays } deleteOne={deleteOne} updateList={ updateList }></ItemTable>
                        );
                    })
                }
            </ul>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
