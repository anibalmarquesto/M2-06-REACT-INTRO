import React from "react";

 export default function Botones (props){
    const {m1,m2} = props.alerts;
    
    const boton1 = () => {
        alert(m1);
      };
    
      const boton2= () => {
        alert(m2);
      };
    
      return (
        <div>
          <button onClick={boton1}>Botón 1</button>
          <button onClick={boton2}>Botón 2</button>
 </div>);
}