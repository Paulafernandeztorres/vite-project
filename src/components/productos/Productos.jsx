import { useState } from "react";
import FiltroProductos from "./FiltroProductos";
import Producto from "./Producto";

function Productos(props) {

    const [ano, setAno] = useState('')

    const updateAno = (ano) => {
        setAno(ano)
    }

    const productosFiltrados = props.productos.filter((producto)=>{
        if(ano!=='') {
            return producto.fecha.getFullYear().toString() === ano
        }
        return true
    })

    return (
        <>
            <FiltroProductos updateAno={updateAno} />
            <div>
                {productosFiltrados.map((elemento) => {
                    return <Producto key={elemento.id} producto={elemento} borraProducto={props.borraProducto} />
                })}
            </div>
        </>
    )
}

export default Productos;