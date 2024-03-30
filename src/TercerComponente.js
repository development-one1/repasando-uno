import React from 'react';
import PropTypes from 'prop-types';

const TercerComponente = ({
                            nombre,
                            apellido,
                            ficha
                          }) => {

    // console.log(props)
  return (
    <div>
        <h1>Comunicacion entre componentes</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{ficha.grupo}</li>
            <li>{ficha.estado}</li>
        </ul>
    </div>
  )
}

TercerComponente.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  ficha: PropTypes.object
}

TercerComponente.defaultProps = {
  nombre: "Andres",
  apellido: "Camacho Rodriguez"
}

export default TercerComponente
