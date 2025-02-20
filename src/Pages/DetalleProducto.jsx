import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Link, useParams, useSearchParams } from "react-router"

function DetalleProducto() {

    const parametros = useParams()
    const [parametrosGet, setParametrosGet] = useSearchParams()

    const [producto, setProducto] = useState({})

    useEffect(() => {
        axios.get('https://dsm-react-clase-2025-default-rtdb.europe-west1.firebasedatabase.app/productos.json?orderBy="$key"&equalTo="' + parametros.id + '"')
            .then((response) => {
                setProducto(response.data[parametros.id])
                //console.log(response.data[parametros.id])
            })
    }, [])

    return (
        <>
            <h2>DETALLES DEL PRODUCTO {parametros.id}</h2>
            <p>Nombre: {producto.nombre}</p>
            <p>Información del producto: {producto.descripcion}</p>
            <p>Plantilla: {parametrosGet.get('format')}</p>
            <Button variant='warning'><Link to={`/product/edit/${parametros.id}`}>EDITAR PRODUCTO</Link></Button>
        </>
    )
}

export default DetalleProducto