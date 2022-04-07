import React, {useContext, useState} from 'react';
import './AddContact.css';
import {Button, Form} from "react-bootstrap";
import {context} from "../../Context";
import {useNavigate} from 'react-router'
function AddContact() {
    const { dispatch } = useContext(context);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const Navigator = useNavigate();
    let handleSubmit = (e) =>{
        e.preventDefault();
        let id = Math.ceil(Math.random()*198460);
        dispatch({type:'Add_CONTACT',payload:{id,name,email,phone}})
        Navigator('/');
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Add New Contact</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Contact Name</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                onChange={(e)=>setName(e.target.value)}
                                placeholder="Enter contact name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contact Email</Form.Label>
                            <Form.Control
                                type="email"
                                required
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder="Enter contact email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contact phone</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                onChange={(e)=>setPhone(e.target.value)}
                                placeholder="Enter contact phone" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add Contact
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );

}

export default AddContact;