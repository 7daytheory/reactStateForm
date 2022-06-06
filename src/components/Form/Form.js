import React, { Component } from 'react';
import './Form.css';

class AddForm extends Component {
   //set state for inputs
    state = {
      firstname: '',
      email: '',
      phone: '',
   };

   onInputChange = e => this.setState({ [e.target.name]:
      e.target.value});
   

render() {
   //Define states as variables
   let { firstname, email, phone } = this.state;
    return (
      <div className="card mb-3">
         <div className="card-header">
            Send Message
         </div>
         <div class="card-body">
            <form>
               <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                     type="text"
                     className="form-control form-control-lg"
                     placeholder="Enter Name..."
                     required
                     name="firstname"
                     value={firstname}
                     onChange={this.onInputChange}
                  >
                  </input>
                  <label htmlFor="name">Email</label>
                  <input
                     type="text"
                     className="form-control form-control-lg"
                     placeholder="Enter email..."
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
                     placeholder="Enter phone number..."
                     name="phone"
                     value={phone}
                     onChange={this.onInputChange}
                  >
                  </input>
                  </div>
            </form>
         </div>
      </div>
    );
  }
}
  
  export default AddForm;
  