import React, { Component } from 'react';
import './Form.css';

class AddForm extends Component {

   constructor(props) {
      super(props);

      this.nameInput = React.createRef();
      this.emailInput = React.createRef();
      this.phoneInput = React.createRef();
      this.messageInput = React.createRef();
   }

   onSubmit = (e) => {
      e.preventDefault();
      const contact = {
         name: this.nameInput.current.value,
         email: this.emailInput.current.value,
         phone: this.phoneInput.current.value,
         message: this.messageInput.current.value,
      }

      console.log(contact);
   }

   static defaultProps = {
      firstname: 'Fred Flinston',
      email: 'Fred@gmail.com',
      phone: '777-777-777',
      message: 'Chiefs are the best team in football!'
   }
   

render() {
   //Define states as variables
   const { firstname, email, phone, message } = this.props;
    return (
      <div className="card mb-3 center">
         <div className="card-header">
            <h2>Contact Us</h2>
         </div>
         <div class="card-body">
            <form onSubmit={this.onSubmit}>
               <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                     type="text"
                     className="form-control form-control-lg"
                     placeholder="Enter Name"
                     required
                     name="firstname"
                     ref={this.nameInput}
                     defaultValue={firstname}
                  >
                  </input>
                  <label htmlFor="email">Email</label>
                  <input
                     type="email"
                     className="form-control form-control-lg"
                     placeholder="Enter email"
                     required
                     name="email"
                     ref={this.emailInput}
                     defaultValue={email}
                  >
                  </input>
                  <label htmlFor="phone">Phone(optional)</label>
                  <input
                     type="phone"
                     className="form-control form-control-lg"
                     placeholder="Enter phone number"
                     name="phone"
                     ref={this.phoneInput}
                     defaultValue={phone}
                  >
                  </input>

                  <label htmlFor="message">Message</label>
                  <textarea
                     type="text"
                     className="form-control form-control-lg"
                     placeholder="We will respond as soon as possible!"
                     name="message"
                     ref={this.messageInput}
                     defaultValue={message}
                  >
                  </textarea>

                  <input
                     type="submit"
                     class="btn-dark rounded mt-2"
                  />
                  </div>
            </form>
         </div>
      </div>
    );
  }
}
  
  export default AddForm;
  