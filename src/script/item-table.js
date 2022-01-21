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

    return (
        <div className="item-table">
            <li>{
                    editingWeekday ? (
                        <select id = "dropdown" value={ changedWeekday }  onChange={ (e) => { handleWeekdaySelected(e.target.value) } }>
                            {
                                prop.weekdays.map( ele => {
                                    return <option key={ele}>{ele}</option>
                                } )
                            }
                        </select>
                    ) : (<p onDoubleClick={ () => setEditingWeekday(true) } >{ changedWeekday }</p>)
                }
            </li>
            <li>
                { 
                    editingItem ? (
                                    <input value={ changedText } onChange={ e => handleChange(e.target.value) } onClick={ () => setChangedText(changedText) } 
                                    autoFocus onBlur={ () => setEditing(false) } onKeyDown={ (e) => keyEnterPressed(e) } ></input>
                                ) : (<p onDoubleClick={ () => setEditing(true) }>{ changedText }</p>) 
                }

                <button className='delete-btn' onClick={ () => prop.deleteOne(prop.title) } >Delete</button>
            </li>
        </div>
    );
}