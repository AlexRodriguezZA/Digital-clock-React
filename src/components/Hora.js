import React from "react";
import "../styles/Hora.css"
import {Animated} from "react-animated-css";


const Hora = ({hora})=>{
    return(
    <Animated animationIn="flash" isVisible={true}>
        <h2>{hora}</h2>
    </Animated>

    )
}

export default Hora;
