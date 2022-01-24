import { useEffect } from 'react';
import { useState } from 'react';
import '../../src/style/item-table.css';

export default function ItemTable(prop) {

    const [changedText, setChangedText] = useState(prop.title);
    const [changedWeekday, setChangedWeekday] = useState(prop.weekday);
    const [editingItem, setEditing] = useState(false);
    const [editingWeekday, setEditingWeekday] = useState(false);

    function handleChange(changeValue) {
        setChangedText(changeValue);
    }

    function keyEnterPressed(e){
        if(e.key === 'Enter') { 
            setEditing(false) 
            prop.updateList(changedWeekday, changedText, prop.index);
        }
    }

    function handleWeekdaySelected (value) {
        setChangedWeekday(value);
        setEditingWeekday(false);
    }

    useEffect( () => {
        console.log(prop.title,changedText);
    });

    return (
        <div className="item-table">
            <li onDoubleClick={ () => setEditingWeekday(true) }>{
                    editingWeekday ? (
                        <select id = "dropdown" value={ changedWeekday }  onChange={ (e) => { handleWeekdaySelected(e.target.value) }} >
                            {
                                prop.weekdays.map( ele => {
                                    return <option key={ele}>{ele}</option>
                                } )
                            }
                        </select>
                    ) : (<p>{ changedWeekday }</p>)
                }
            </li>
            <li onDoubleClick={ () => setEditing(true) }>
                {   
                    editingItem ? (
                                    <input value={ changedText } onChange={ e => handleChange(e.target.value) } onClick={ () => setChangedText(changedText) } 
                                    autoFocus onBlur={ () => { setEditing(false); prop.updateList(changedWeekday, changedText, prop.index); } } onKeyDown={ (e) => keyEnterPressed(e) } ></input>
                                ) : (<p>{ changedText }</p>) 
                }
            </li>
            <button className='delete-btn' onClick={ () => prop.deleteOne(prop.index) } >Delete</button>
        </div>
    );
}