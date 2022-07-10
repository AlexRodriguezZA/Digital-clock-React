import React from "react";
import "../styles/Fecha.css"
import {Animated} from "react-animated-css";

const Fecha = ({fecha})=>{
    return(
        <Animated animationIn="fadeIn" isVisible={true}>
             <h2 className="Date">{fecha}</h2>
        </Animated>
       
    )
}

export default Fecha;