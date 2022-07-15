import React, { Component } from 'react';
import './Form.css';

class AddForm extends Component {
   //set state for inputs
    state = {
      name: '',
      email: '',
      phone: '',
      message: ''
   };

   //You *Could* do this for every input and do e.firstname.name : e.firstname.value (or something like that) but it would not be efficient
   onInputChange = e => this.setState({ [e.target.name]: e.target.value});
   

render() {
   //Define states as variables
   const { name, email, phone, message } = this.state;
    return (
      <div className="card mb-3 center">
         <div className="card-header">
            <h2>Add User</h2>
         </div>
         <div class="card-body">
            <form>
               <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                     type="text"
                     className="form-control form-control-lg"
                     placeholder="Enter Name"
                     required
                     name="name"
                     value={name}
                     onChange={this.onInputChange}
                  >
                  </input>
                  <label htmlFor="name">Email</label>
                  <input
                     type="text"
                     className="form-control form-control-lg"
                     placeholder="Enter email"
                     required
                     name="email"
                     value={email}
                     onChange={this.onInputChange}
                  >
                  </input>
                  <label htmlFor="name">Phone(optional)</label>
                  <input
                     type="text"
                     className="form-control form-control-lg"
                     placeholder="Enter phone number"
                     name="phone"
                     value={phone}
                     onChange={this.onInputChange}
                  >
                  </input>

                  <label htmlFor="message">Message</label>
                  <textarea
                     type="text"
                     className="form-control form-control-lg"
                     placeholder="Message ..."
                     name="message"
                     value={message}
                     onChange={this.onInputChange}
                  >
                  </textarea>

                  <input
                     type="submit"
                     class="btn-dark rounded mt-2"
                     style={{cursor: 'pointer', float: 'right', padding: '2px 15px'}}

                  />
                  </div>
            </form>
         </div>
      </div>
    );
  }
}
  
  export default AddForm;
  