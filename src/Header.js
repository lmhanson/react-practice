import React, { useState } from "react";
import './Header.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import SidebarContent from "./SidebarContent";
import Background from "./Background.js";

function Header(){
  const [widths, setwidth] = useState(0);
  const menuConent = ["Home", "About Me", "nth", "Contect"]
  

    return (
      <div className="header">
        
        <div className="dropDown-content" style={{width:widths}}>
          <a href="#" className="closebtn"><i className="bi bi-x-lg"  onClick={() => setwidth(widths-250)} ></i></a>
          <SidebarContent content={menuConent}/>
        </div>

        <div className="dropDown" onClick={ () => setwidth(widths+250)}>
          <a href="#" className="dropDown"><i class="bi bi-list-nested"></i></a>
        </div>

        <Background/>
      </div>  
    );
}



export default Header;