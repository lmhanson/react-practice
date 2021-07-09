import React, { useState } from "react";
import './SidebarContent.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function SidebarContent(props){
    return (
      <div className="SidebarContent">
          {props.content.map(content => <a href="#">{content}</a>)}
      </div>  
    );
}



export default SidebarContent;