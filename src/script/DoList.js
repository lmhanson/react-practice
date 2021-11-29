export default function DoList(prop) {
    return (
        <div className="list-item">
            <ul>{
                Object.values(prop.msg).map( (ele, index) => {
                    return <li key={ index }> { ele.key } 
                                <button onClick={ () => prop.cleanOneLi(index)}>Delete work</button>
                            </li>
                })
            }</ul>
        </div>
    );
}
