import Producto from "./Producto";

function Productos(props) {
    return (
        <div>
            {props.productos.map((elemento)=>{
                return <Producto key={elemento.id} producto={elemento} borraProducto={props.borraProducto} />
            })}
        </div>
    )
}

export default Productos;