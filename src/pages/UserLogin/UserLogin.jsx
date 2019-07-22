import React from 'react';
import {Form, Button, Row, Col, Tabs, Tab} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';

class UserLogin extends React.Component {
    render() {
       return (
           <div>
               <Row>
                    <Col>
                        <Link to="signUp" replace>
                            <Button variant="outline-primary">Signup</Button>
                        </Link>
                    </Col>
                </Row>
                <div>
                    <h4>User Login</h4>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
           </div>        
       )
    }
 }
 export default withRouter(UserLogin);