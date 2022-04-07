import {Component, createContext} from "react";


export const context = createContext();

export const reducer = (state,action)=>{
    switch (action.type){
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts:state.contacts.filter(contact=>contact.id !== action.payload)
            }
        case 'Add_CONTACT':
            return {
                ...state,
                contacts:[action.payload,...state.contacts]
            }
        default:
            return state;
    }
}
export class Provider extends Component{

    state = {
        contacts:[
            {id:1,name:'Eng.Sallam Rady',email:'sallamrady@gmail.com',phone:'011099211111'},
            {id:2,name:'Eng.Ahmed Ezzet',email:'AhmedEzzet@gmail.com',phone:'011099211111'},
            {id:3,name:'Dr.Mohamed Rady',email:'Mohamedrady@gmail.com',phone:'011099211111'},
            {id:4,name:'Dr.Mohamed Rady',email:'Mohamedrady@gmail.com',phone:'011099211111'},
            {id:5,name:'Eng.Ibrahim El-morshady',email:'Ibrahim@gmail.com',phone:'011099211111'},
            {id:6,name:'Eng.Mohamed Gad',email:'Mohamedgad@gmail.com',phone:'011099211111'}
        ],
        dispatch:(action)=>{
            this.setState(state =>reducer(state,action))
        }
    }
    render(){
        return (
            <context.Provider value={this.state}>
                {this.props.children}
            </context.Provider>
        );
    }
}

export const Consumer = context.Consumer;