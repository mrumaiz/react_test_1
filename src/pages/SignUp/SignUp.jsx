import React from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {dispatchSignUp} from '../../actions/signUp/actions';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userDetails: {}
        }
    };

    handleSUbmit(e){
        if(this.refs.password.value !==this.refs.rePassword.value){
            alert("Passwords not matched.");
            return;
        }
        const userDetails = {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            userName: this.refs.email.value,
            password: this.refs.password.value
        };
        console.log("Dispatching....");
        dispatchSignUp(userDetails);
    }
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Link to="/" replace>
                            <Button variant="outline-primary">Login</Button>
                        </Link>
                    </Col>
                </Row>
                <div>
                    <h4>Sign Up</h4>
                    <Row>
                        <Col>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control ref="firstName" type="text" placeholder="Enter First Name" required/>
                            </Form.Group>

                            <Form.Group controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control ref="lastName" type="text" placeholder="Enter Last Name" required/>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control ref="email" type="email" placeholder="Enter email" required/>
                            </Form.Group>
                        
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control ref="password" type="password" placeholder="Password" required/>
                            </Form.Group>

                            <Form.Group controlId="formReenter">
                                <Form.Label>Re-enter Password</Form.Label>
                                <Form.Control ref="rePassword" type="password" placeholder="Re-enter Password" required/>
                            </Form.Group>

                            <Button onClick = {(e) => this.handleSUbmit(e)} variant="primary" type="button">Sign Up</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
     }
}
const mapStateToProps = state => ({
    userDetails: state.userDetails
  });
export default connect(mapStateToProps)(SignUp);