import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    

    //Unnccessary function -> toggles on line 21
    // onShowClick = e => {
    //     this.setState({showContactInfo: 
    //     !this.state.showContactInfo});
    // };

    onDeleteClick = () => {
        console.log("Clicked!");
    }

    render() {
        const {firstname, phone, email } = this.props.contact;

        return (
            <div className="card card-body mb-3">
                <h4>{firstname}{' '} 
                <i onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})}
                className='fas fa-sort-down'
                style={{cursor: 'pointer'}}
                />
                </h4>

                <i
                className='fas fa-times'
                style={{float: 'right', cursor: 'pointer', color: 'red'}}
                onClick = {this.onDeleteClick}
                />
                
            <ul className='list-group'>
                <li className='list-group-item'>Email : {email}</li>
                <li className='list-group-item'>Phone : {phone}</li>
                </ul> 
            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;