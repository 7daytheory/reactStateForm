import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onDeleteClick = () => {
        this.props.deleteClickHandler();
    }

    render() {
        const {name, phone, email } = this.props.contact;

        const { showContactInfo } = this.state;

        return (
            <div className="card card-body mb-3">
                <h4 style={{color: '#333', float: 'left'}}>{name}{' '} 
                <i onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})}
                className='fas fa-sort-down'
                style={{cursor: 'pointer'}}
                />

                {<i
                className='fas fa-times'
                style={{float: 'right', cursor: 'pointer', color: 'red'}}
                onClick = {this.onDeleteClick}
                />}
                </h4>
                
                {showContactInfo ? (<ul className='list-group'>
                <li className='list-group-item'>Email : {email}</li>
                <li className='list-group-item'>Phone : {phone}</li>
                </ul> ) :  null}
            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;