import React from 'react'

export const EventosComponente = () => {
 
    const peopleDioClick = (e, nombre) => {
        alert("As dado click al boton !!"+ nombre );
    }

    function peoplesDioDobleClick (e)  {
        alert("As dado doble click");
    }

    const hasIngresado = (e, accion) => {
        console.log(`Has ${accion}  a la caja con el mouse`)
    }

    // const hasSalido = (e) => {
    //     alert("has salido de la caja")
    // }

    
    const estasDentro = e => {
        console.log("Estas dentro del input, mete tu nombre!!");
        e.target.focus(); 
    }

    const estasFuera = e => {
       console.log("Estas fuera del input,Chao!!");
    }

  return (
    <div>
        <h1>
            Eventos en React
        </h1>
        <p>
             {/* Evento Click */}
        <button onClick={ e => peopleDioClick (e, "Andres")}> 
            Dame Click
        </button>
        </p>
       
       <p>
        {/* Evento doble Click */}
        <button onDoubleClick={ peoplesDioDobleClick }> 
           Doble click
        </button>
       </p>

        {/* Evento Mouse enter */}
       <div id='caja' 
            onMouseEnter={ e => hasIngresado (e, "ingresado")}
            onMouseLeave={ e => hasIngresado (e, "salido")}  
                >
        
        Pasa por encima
       </div>

       <p>
        <input type="text" 
            onFocus={ estasDentro } 
            onBlur={ estasFuera }
            placeholder='Introduce tu nombre...' 

            />
       </p>
        
    </div>
  )
}

export default EventosComponente