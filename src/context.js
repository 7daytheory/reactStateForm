import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {

    state = {
    contacts : [
        {
        id: 1,
        name: 'John Doe 1',
        email: 'jd1@gmail.com',
        phone: '111-111-1111',
        message: 'None received'
    },
    {
        id: 2,
        name: 'John Doe 1',
        email: 'jd1@gmail.com',
        phone: '111-111-1111',
        message: 'None received'
    },
    {
        id: 3,
        name: 'John Doe 1',
        email: 'jd1@gmail.com',
        phone: '111-111-1111',
        message: 'None received'
    },
    {
        id: 4,
        name: 'John Doe 1',
        email: 'jd1@gmail.com',
        phone: '111-111-1111',
        message: 'None received'
    }
]
}

// const reducer = (state, action) => {
    
//     switch(action.type) {
//         case 'DELETE_CONTACT':
//             return {
//                 ...state,
//                 contacts: state.contacts.filter(
//                     contact => contact.id !== action.payload
//                 )
//             }
//     case 'ADD_CONTACT':
//         return {
//             ...state,
//             contacts: [action.payload, ...state.contacts]
//         };
//     default:
//         return state;
//     }
// }

render() {
    return (
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
    )
}
}

//You can import just as Consumer but you'd need to call it as Context.Consumer every time
export const Consumer = Context.Consumer;