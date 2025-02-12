// import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function FiltroProductos(props) {

    // const [ano, setAno] = useState('')

    const anoHandler = (event) => {
        // setAno(event.target.value)
        props.updateAno(event.target.value)
    }

    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Form.Label>Selecciona el año:</Form.Label>
                    <Form.Select onChange={anoHandler}>
                        <option value=''>Ver todos</option>
                        <option value='2025'>2025</option>
                        <option value='2026'>2026</option>
                        <option value='2027'>2027</option>
                    </Form.Select>
                </Col>
            </Row>
        </Container>
    )
}

export default FiltroProductos