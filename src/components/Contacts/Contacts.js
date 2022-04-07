import React, {useContext} from 'react';
import './Contacts.css';
import {Button, Card} from "react-bootstrap";
import userImg from '../../assets/images/user.png';
import {context} from "../../Context";

function Contacts(){
    const { contacts ,dispatch} = useContext(context);
    return (
        <div className='container-fluid'>
            <h1> Contacts :) </h1>
            <hr/>
            <br/>
            <div className='row'>
                {
                    contacts.map(
                        contact => {
                            return (
                                <div key={contact.id} className='col-12 col-sm-6 col-md-3'>
                                    <Card style={{width:'90%',boxSizing: 'border-box',margin: '10px'}} >
                                        <Card.Img variant="top" src={userImg}/>
                                        <Card.Body style={{textAlign: 'left'}}>
                                            <Card.Title>{contact.name}</Card.Title>
                                            <Card.Text>
                                                {contact.phone}<br/>
                                                {contact.email}
                                            </Card.Text>
                                            <Button
                                                onClick={()=>dispatch({type:'DELETE_CONTACT',payload:contact.id})}
                                                variant="danger">Delete Contact</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    );
}

export default Contacts;