import React from 'react'

const SegundoComponente = () => {

     const libros = ["Harry potter", "Juego de Tronos", "Clean Code"];
    //  const libros = [];
  return (
    <div className='segundo-componente'>
    <h1>Listado de libro:</h1>
    {libros.length >= 1 ? 
    (<ul>  
               { libros.map((libros, indice) => {
                    return <li key={indice}>{libros}</li>;
                }) }
        </ul>
       ) : (
            <ul>No hay libros</ul>
        )}     
    </div>
  )
}

export default SegundoComponente
