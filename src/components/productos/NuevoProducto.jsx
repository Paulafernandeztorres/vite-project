import { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactDOM from 'react-dom'
import './NuevoProducto.css'
import { useNavigate } from "react-router";
import axios from "axios";

function InfoModal(props) {

    const [open, setOpen] = useState(true)

    const cerrarHandler = () => {
        setOpen(false)
    }

    if (open) {
        return (
            <>
                <h2>{props.titulo}</h2>
                <p>{props.mensaje}</p>
                <button onClick={cerrarHandler}>CERRAR</button>
            </>
        )
    }

    return null

}

function NuevoProducto(props) {

    useEffect(() => {
        nombreRef.current.focus()
    }, [])

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [fecha, setFecha] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const [nombreValid, setNombreValid] = useState(true)

    const nombreRef = useRef()

    const navega = useNavigate()

    const nombreHandler = (event) => {
        setNombre(event.target.value)
        setNombreValid(true)
    }

    const precioHandler = (event) => {
        setPrecio(event.target.value)
    }

    const fechaHandler = (event) => {
        setFecha(event.target.value)
    }

    const descripcionHandler = (event) => {
        setDescripcion(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const producto = {
            id: Math.random().toString(),
            nombre: nombre,
            precio: precio,
            fecha: new Date(fecha)
        }
        //console.log(producto)
        props.addProducto(producto)
        setNombre('')
        setPrecio('')
        setFecha('')
        nombreRef.current.focus()
        setTimeout(() => { navega('/products') }, 500)

        const productoFirebase = {
            nombre: nombre,
            precio: precio,
            fecha: precio,
            descripcion: descripcion
        }

        axios.post('https://dsm-react-clase-2025-default-rtdb.europe-west1.firebasedatabase.app/productos.json?auth=' + props.idToken, productoFirebase)
        .then((response)=>{
            alert('Se ha insertado el producto.')
        })
        .catch((error)=>{
            alert('No se ha podido insertar.')
            console.log(error)
        })

    }

    const nombreBlurHandler = () => {
        if (nombre.length === 0) {
            setNombreValid(false)
        }
    }

    const contenidoModal = ReactDOM.createPortal(
        <InfoModal titulo='CONFIRMA LA VALIDEZ' mensaje='Nombre está vacío.'></InfoModal>
        , document.getElementById('overlay')
    )


    return (
        <div>
            {/* {!nombreValid && contenidoModal} */}
            <Form onSubmit={submitHandler}>
                <Container>
                    <Row>
                        <Col><Form.Label className={`${nombreValid ? '' : 'invalid'}`}>Nombre:</Form.Label>
                            <Form.Control ref={nombreRef} type='text' onChange={nombreHandler} value={nombre} onBlur={nombreBlurHandler} /></Col>
                        <Col><Form.Label>Precio:</Form.Label>
                            <Form.Control type='number' onChange={precioHandler} value={precio} /></Col>
                        <Col><Form.Label>Fecha:</Form.Label>
                            <Form.Control type='date' onChange={fechaHandler} value={fecha} /></Col>
                        <Col><Form.Label>Descripcion:</Form.Label>
                            <Form.Control type='text' onChange={descripcionHandler} value={descripcion} /></Col>
                        <Col><Button type='submit' variant="success">NUEVO PRODUCTO</Button></Col>
                    </Row>
                </Container>
            </Form>
        </div>
    )
}

export default NuevoProducto;