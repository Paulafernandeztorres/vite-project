import './producto.css'
import FechaProducto from './FechaProducto';
import { useState } from 'react';

function Producto(props) {

    const [nombre, setNombre] = useState(props.producto.nombre)

    // const nombre = 'Pantalla táctil';
    // const precio = 45.6;
    // const fecha = new Date();
    //let nombre = props.producto.nombre;
    const precio = props.producto.precio;
    const fecha = props.producto.fecha;
    // const ano = fecha.getFullYear();
    // const mes = fecha.toLocaleString('es-ES', { month: 'long' });
    // const dia = fecha.toLocaleString('es-ES', { day: '2-digit' });

    const cambiaNombre = () => {
        //nombre = 'NUEVO NOMBRE'
        setNombre('NUEVO NOMBRE')
        //console.log(nombre)
    }

    return (
        <div className='producto'>
            <FechaProducto fecha={fecha} />
            <div className='producto__descripcion'>
                <h2>Nombre: {nombre}</h2>
                <div className='producto__precio'>{precio}</div>
                <button onClick={cambiaNombre}>CAMBIA NOMBRE</button>
            </div>
        </div>
    )
}

export default Producto;