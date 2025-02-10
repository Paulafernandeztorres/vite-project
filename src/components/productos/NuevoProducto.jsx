import { useState } from "react";

function NuevoProducto() {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [fecha, setFecha] = useState('')

    return (
        <div>
            <form>
                <div>
                    <label>Nombre:</label>
                    <input type='text' />
                </div>
                <div>
                    <label>Precio:</label>
                    <input type='number' />
                </div>
                <div>
                    <label>Fecha:</label>
                    <input type='date' />
                </div>
                <div>
                    <button type='submit'>NUEVO PRODUCTO</button>
                </div>
            </form>
        </div>
    )
}

export default NuevoProducto;