import React, { useState } from "react";
import './Header.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import SidebarContent from "./SidebarContent";

function Header(){
  const [widths, setwidth] = useState(0);
  const menuConent = ["Home", "About Me", "nth", "Contect"]
  

    return (
      <div className="header">

        <div class="dropDown-content" style={{width:widths}}>
          <a href="#" className="closebtn"><i class="bi bi-x-lg"  onClick={() => setwidth(widths-250)} ></i></a>
          <SidebarContent content={menuConent}/>
        </div>

        <div className="dropDown" onClick={ () => setwidth(widths+250)}>
          <a href="#" className="dropDown"><i className="bi bi-list-nested"></i></a>
        </div>
        
      </div>  
    );
}



export default Header;