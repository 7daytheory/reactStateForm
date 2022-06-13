import React, { Component } from 'react';
//import Consumer from '../../context';
import Contact from '../Contact/Contact';

export class Contacts extends Component {
    
    state = {
        contacts : [
            {
            id: 1,
            name: 'Matthew',
            email: 'matthew@gmail.com',
            phone: '111-111-1111',
            message: 'None received'
        },
        {
            id: 2,
            name: 'Shaq',
            email: 'shaq@gmail.com',
            phone: '222-222-2222',
            message: 'None received 2'
        },
        {
            id: 3,
            name: 'Sujin',
            email: 'sujin@gmail.com',
            phone: '444-444-4444',
            message: 'None received'
        },
        {
            id: 4,
            name: 'Omol',
            email: 'omol@gmail.com',
            phone: '333-333-3333',
            message: 'None received'
        }
    ]
    }
    
    // deleteContact = id => {
    //     const { contacts } = this.state;

    //     const newContacts = contacts.filter(contact => contact.id !== id);

    //     this.setState({
    //         contacts: newContacts
    //     });
    // };

    render() {
            const { contacts } = this.state;

            return (
               <React.Fragment>
                   {contacts.map(contact => (
                       <Contact
                        key={contact.id}
                        contact={contact}
                        />
                   ))}
               </React.Fragment>
            )
                   }}

export default Contacts;