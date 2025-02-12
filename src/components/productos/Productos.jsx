import { useState } from "react";
import FiltroProductos from "./FiltroProductos";
import Producto from "./Producto";
import { Alert } from "react-bootstrap";

function Productos(props) {

    const [ano, setAno] = useState('')

    const updateAno = (ano) => {
        setAno(ano)
    }

    const productosFiltrados = props.productos.filter((producto) => {
        if (ano !== '') {
            return producto.fecha.getFullYear().toString() === ano
        }
        return true
    })

    let contenido = <Alert>No hay productos de este año</Alert>

    if (productosFiltrados.length > 0) {
        contenido = <div>
            {productosFiltrados.map((elemento) => {
                return <Producto key={elemento.id} producto={elemento} borraProducto={props.borraProducto} />
            })}
        </div>
    }

    return (
        <>
            <FiltroProductos updateAno={updateAno} />
            {contenido}
        </>
    )
}

export default Productos;