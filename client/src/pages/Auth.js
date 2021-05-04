import React from 'react';
import {Container, Form} from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import {NavLink, useLocation} from 'react-router-dom';

const Auth = () => {

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
            >

                <Card style={{width: 600}} className="p-5">
                    <h2 className="m-auto">{isLogin ? 'Autorization': 'Registartion'}</h2>
                    <Form className="d-flex flex-column">
                        <Form.Control className="mt-2" placeholder="Enter your email" />
                        <Form.Control className="mt-2" placeholder="Enter your password" />
                        <Row className="d-flex justify-content-between mt-3">
                            {isLogin ?
                            <div>
                                You don't have account? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
                            </div>
                            
                            :

                            <div>
                                 Already have an account? <NavLink to={LOGIN_ROUTE}>Enter</NavLink>
                            </div>
                            }
                            <Button variant={"outline-success"}>
                                {isLogin ? 'Enter' : 'Registration'}
                            </Button>
                        </Row>
                    </Form>
                </Card>
        </Container>
    );
}

export default Auth;