import { useSearchParams } from "react-router"

function Contact() {

    const [parametrosGet, setParametrosGet] = useSearchParams()

    return(
        <>
        <h2>INFORMACIÓN DE CONTACTO DE LA SEDE DE {parametrosGet.get('sede')}</h2>
        <p>Nuestras sedes y persona de contacto {parametrosGet.get('persona')}</p>
        </>
    )
}

export default Contact