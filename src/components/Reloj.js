import React from "react";
import { useState, useEffect } from "react";
import Hora from "../components/Hora.js";
import Fecha from "../components/Fecha.js"
import "../styles/Reloj.css"

const Reloj = () =>{
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);
    const date = new Date().toDateString();

 

    useEffect( ()=> {
        let temp;
        visible ? (temp = setInterval( ()=>{ setHora(new Date().toLocaleTimeString())},1000 )) : (clearInterval(temp))
        //Fase en la que el componente se desmonta
        return () => {
            clearInterval(temp);
        }
    },[visible] )//cada vez que la variable visible cambie se actualiza el useEffect()
 

    return(
        <div className="Reloj-container">
            <h1>Digital clock</h1>
            <div className="LineaDivisora"></div>
            
            {visible && <Hora hora={hora}/>}
            {visible && <Fecha fecha={date}/>}
           
            
            
        <div className="button-container">
            <button  className="Button-mostrar" onClick={ ()=> setVisible(true) }>Mostrar</button>
            <button className="Button-detener"  onClick={ ()=> setVisible(false) }>Detener</button>  
        </div>
        </div>


    )
}

export default Reloj;