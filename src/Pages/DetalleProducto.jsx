import { useParams, useSearchParams } from "react-router"

function DetalleProducto(){

    const parametros = useParams()
    const [parametrosGet, setParametrosGet] = useSearchParams()

    return(
        <>
        <h2>DETALLES DEL PRODUCTO {parametros.id}</h2>
        <p>Información del producto.</p>
        <p>Plantilla: {parametrosGet.get('format')}</p>
        </>
    )
}

export default DetalleProducto