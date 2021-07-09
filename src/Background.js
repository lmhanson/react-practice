import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import background from './background.jpg';
import "./Background.css"

function Background(){
    return (
      <div className="test">
        <img src={background}></img>
      </div>  
    );
}



export default Background;