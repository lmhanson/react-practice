import React from "react";
import './Header.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function Header(){
    return (
      <div className="header">
        <div className="dropDown">
          <i className="bi bi-list-nested">
          <div className="dropDown-content"> <h3>This is drop down menu</h3> </div>
          </i>
        </div>
      </div>  
    );
}

export default Header;