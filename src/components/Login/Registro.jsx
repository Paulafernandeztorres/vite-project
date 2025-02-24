import axios from "axios"
import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

function Registro(props){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAdj6z29EM7yDz_i9vSn29Qex2a6qaxlqQ', authData)
        .then((response) => {
            alert('Regsitro correcto')
            console.log(response)
            props.actualizarLogin(true, response.data)
        })
        .catch((error)=>{
            alert('Registro incorrecto')
            console.log(error)
        })
    }

    return(
        <>
            <Form onSubmit={submitHandler}>
                <Container>
                    <Row>
                        <Col>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control onChange={(event)=>setEmail(event.target.value)} value={email} type='email'></Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control onChange={(event)=>setPassword(event.target.value)} value={password} type='password'></Form.Control>
                        </Col>
                        <Col>
                            <Button type='submit' variant='primary'>REGISTRARSE</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </>
    )
}

export default Registro