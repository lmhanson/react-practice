import React, { useState } from "react";
import './Header.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function Header(){
  //const [click, setClick] = useState(false);
  //const handleClick = () => setClick(!click)

    return (
      <div className="header">
        <div className="dropDown">
          <i className="bi bi-list-nested">
          <div className="dropDown-content">
            <h3>kenny on99</h3>
            <h3>tpk on99</h3>
            <h3>kay on99</h3>
            <h3>all on99</h3>
          </div>
          </i>
        </div>
      </div>  
    );
}

export default Header;