import axios from "axios"
import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

function Login(props){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAdj6z29EM7yDz_i9vSn29Qex2a6qaxlqQ', authData)
        .then((response) => {
            alert('Login correcto')
            console.log(response)
            props.actualizarLogin(true, response.data)
        })
        .catch((error)=>{
            alert('Login incorrecto')
            console.log(error)
        })
    }

    const logoutHandler = ()=>{
        props.actualizarLogin(false, {})
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
                            <Button type='submit' variant='primary'>LOGIN</Button>
                        </Col>
                        <Col>
                            <Button onClick={logoutHandler} variant='warning'>LOGOUT</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </>
    )
}

export default Login