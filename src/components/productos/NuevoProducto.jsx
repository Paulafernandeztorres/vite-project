import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NuevoProducto(props) {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [fecha, setFecha] = useState('')

    const nombreHandler = (event) => {
        setNombre(event.target.value)
    }

    const precioHandler = (event) => {
        setPrecio(event.target.value)
    }

    const fechaHandler = (event) => {
        setFecha(event.target.value)
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
    }

    return (
        <div>
            <Form onSubmit={submitHandler}>
                <Container>
                    <Row>
                        <Col><Form.Label>Nombre:</Form.Label>
                            <Form.Control type='text' onChange={nombreHandler} value={nombre} /></Col>
                        <Col><Form.Label>Precio:</Form.Label>
                            <Form.Control type='number' onChange={precioHandler} value={precio} /></Col>
                        <Col><Form.Label>Fecha:</Form.Label>
                            <Form.Control type='date' onChange={fechaHandler} value={fecha} /></Col>
                        <Col><Button type='submit' variant="success">NUEVO PRODUCTO</Button></Col>
                    </Row>
                </Container>
            </Form>
        </div>
    )
}

export default NuevoProducto;