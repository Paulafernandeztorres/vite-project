import './producto.css'
import FechaProducto from './FechaProducto';
import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ProductosContext from '../../store/ProductosContext';
import { Link } from 'react-router';
import axios from 'axios';

function Producto(props) {

    const [nombre, setNombre] = useState(props.producto.nombre)

    // const nombre = 'Pantalla táctil';
    // const precio = 45.6;
    // const fecha = new Date();
    //let nombre = props.producto.nombre;
    const precio = props.producto.precio;
    const fecha = props.producto.fecha;
    // const ano = fecha.getFullYear();
    // const mes = fecha.toLocaleString('es-ES', { month: 'long' });
    // const dia = fecha.toLocaleString('es-ES', { day: '2-digit' });

    const borrarContext = useContext(ProductosContext).borrar

    const cambiaNombre = () => {
        //nombre = 'NUEVO NOMBRE'
        setNombre('NUEVO NOMBRE')
        //console.log(nombre)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const borrar = () => {
        props.borraProducto(props.producto.id)
        axios.delete('https://dsm-react-clase-2025-default-rtdb.europe-west1.firebasedatabase.app/productos/' + props.producto.id + '.json')
        .then()
    }

    const borrarC = () => {
        borrarContext(props.producto.id)
    } 

    return (
        <div className='producto'>
            <FechaProducto fecha={fecha} />
            <div className='producto__descripcion'>
                <h2>{nombre} - <Button variant="outline-warning"><Link to={`/product/${props.producto.id}?format=extended`}>Ver detalles</Link></Button></h2>
                <div className='producto__precio'>{precio}</div>
                <Button variant="warning" onClick={handleShow}>VER DETALLES</Button>
                <Button onClick={cambiaNombre}>CAMBIA NOMBRE</Button>
                <Button variant='danger' onClick={borrar}>BORRAR P</Button>
                <Button variant='danger' onClick={borrarC}>BORRAR C</Button>
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>DETALLES DEL PRODUCTO: {nombre}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Precio: {precio}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            OK
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            CANCELAR
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default Producto;