import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router";
import axios from "axios";

function EditarProducto(props) {

    const parametros = useParams()

    useEffect(() => {
        axios.get('https://dsm-react-clase-2025-default-rtdb.europe-west1.firebasedatabase.app/productos.json?orderBy="$key"&equalTo="' + parametros.id + '"')
        .then((response)=>{
            console.log(response.data)
            setNombre(response.data[parametros.id].nombre)
            setPrecio(response.data[parametros.id].precio)
            setFecha(response.data[parametros.id].fecha)
            setDescripcion(response.data[parametros.id].descripcion)
        })
    }, [])

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [fecha, setFecha] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        const producto = {
            nombre: nombre,
            precio: precio,
            fecha: new Date(fecha),
            descripcion: descripcion
        }
        axios.put('https://dsm-react-clase-2025-default-rtdb.europe-west1.firebasedatabase.app/productos/' + parametros.id + '.json?auth=' + props.idToken, producto)
        .then((response)=>{
            alert('Se ha modificado.')
        })
        .catch((error)=>{
            alert('No se ha podido modificar.')
            console.log(error)
        })
    }

    return (
        <div>
            <Form onSubmit={submitHandler}>
                <Container>
                    <Row>
                        <Col><Form.Label>Nombre:</Form.Label>
                            <Form.Control type='text' onChange={(event)=>{setNombre(event.target.value)}} value={nombre} /></Col>
                        <Col><Form.Label>Precio:</Form.Label>
                            <Form.Control type='number' onChange={(event)=>{setPrecio(event.target.value)}} value={precio} /></Col>
                        <Col><Form.Label>Fecha:</Form.Label>
                            <Form.Control type='date' onChange={(event)=>{setFecha(event.target.value)}} value={fecha} /></Col>
                        <Col><Form.Label>Descripcion:</Form.Label>
                            <Form.Control type='text' onChange={(event)=>{setDescripcion(event.target.value)}} value={descripcion} /></Col>
                        <Col><Button type='submit' variant="success">EDITAR PRODUCTO</Button></Col>
                    </Row>
                </Container>
            </Form>
        </div>
    )
}

export default EditarProducto;