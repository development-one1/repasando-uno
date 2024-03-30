import React, {Fragment} from "react";


// Funcion del componente
const MiComponente = () => {
    // let nombre = "Andres Felipe";
    // let web = "andres.com"

    let usuario = {
        nombre: "Andres Felipe",
        apellido: "Camacho Rodriguez",
        web: "andres.com"
    };

    console.log(usuario)
    return (
        <Fragment>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>Nombre: <strong>{usuario.nombre}</strong></li>
                <li>Apellido: <strong>{usuario.apellido}</strong></li>
                <li>web: <strong>{usuario.web}</strong></li>
            </ul>
         </Fragment>
    )
};

// Export:
export default MiComponente;