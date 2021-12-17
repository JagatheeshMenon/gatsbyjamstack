import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import Header from "../components/Header"
import FooterMessage from "../components/FooterMessage"

class Contactme extends Component {
    render() {
        return (
                <div>
                    <Header/>
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-6">
                                <div className="pt-5">
                                <h1>Contact us</h1>
                                <Form>
                                    <Form.Group className="mb-3" controlId="Contactme.Email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Contactme.Subject">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control type="text" placeholder="Subject" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="Contactme.Message">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as ="textarea" rows ="3" placeholder="Message"/>
                                    </Form.Group>
                                        <Button variant="primary" type="submit">Submit</Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterMessage/>
                </div>   
                );
        }
}
export default Contactme;