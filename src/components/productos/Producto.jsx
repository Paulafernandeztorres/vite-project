import './producto.css'
import FechaProducto from './FechaProducto';

function Producto(props) {

    // const nombre = 'Pantalla táctil';
    // const precio = 45.6;
    // const fecha = new Date();
    const nombre = props.producto.nombre;
    const precio = props.producto.precio;
    const fecha = props.producto.fecha;
    // const ano = fecha.getFullYear();
    // const mes = fecha.toLocaleString('es-ES', { month: 'long' });
    // const dia = fecha.toLocaleString('es-ES', { day: '2-digit' });

    return (
        <div className='producto'>
            <FechaProducto fecha={fecha} />
            <div className='producto__descripcion'>
                <h2>Nombre: {nombre}</h2>
                <div className='producto__precio'>{precio}</div>
            </div>
        </div>
    )
}

export default Producto;