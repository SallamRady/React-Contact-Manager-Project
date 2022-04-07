import React from 'react';
import './Contact.css';

function Contact(props){
    let {id,name,email,phone,DeleteContact} = props;
    let toggleDiv = ()=>{
        const element = document.getElementById(`phoneDiv${id}`);
        element.classList.toggle('hideDiv');
    }
    let handleDelete = ()=>{
        DeleteContact();
    }
    return (
        <div className='singleContact'>
            <div className='contactHead'>
                <h6 onClick={toggleDiv}>{name}</h6>
                <button onClick={handleDelete} title='remove contact'>x</button>
            </div>
            <div id={`phoneDiv${id}`} className='phone hideDiv'>
                <p>Email : {email}</p>
                <p>Phone : {phone}</p>
            </div>
        </div>
    );
}

export default Contact;