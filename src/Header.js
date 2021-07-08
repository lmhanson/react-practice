import React, { useState } from "react";
import './Header.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function Header(){

  const [widths, setwidth] = useState(0);

    return (
      <div className="header">

        <div class="dropDown-content" style={{width:widths}}>
          <i class="bi bi-x-lg" onClick={() => setwidth(widths-250)} ></i>
          <a href="#">Test1</a>
          <a href="#">Test2</a>
          <a href="#">Test3</a>
          <a href="#">Test4</a>
        </div>

        <div className="dropDown" onClick={ () => setwidth(widths+250)}>
          <i className="bi bi-list-nested"> Click Me </i>
        </div>
        
      </div>  
    );
}



export default Header;