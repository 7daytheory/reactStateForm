import React, { Component } from 'react';
//import Consumer from '../../context';
import Contact from '../Contact/Contact';

export class Contacts extends Component {
    
    deleteContact = id => {
        const { contacts } = this.state;

        const newContacts = contacts.filter(contact => contact.id !== id);

        this.setState({
            contacts: newContacts
        });
    };

    render() {
       return(
        <div>
            {value => {
                const { contacts } = value;

            return (
               <React.Fragment>
                   {contacts.map(contact => (
                       <Contact
                        key={contact.id}
                        contact={contact}
                        deleteClickHandler={this.deleteContact.bind(this.contact.id)}
                        />
                   ))}
               </React.Fragment> 
            )
                   }}
        </div>
       )
    }
}

export default Contacts;