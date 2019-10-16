import React from 'react';
import './App.css';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  return valid;

}


class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors : {
        firstName: "",
        lastName:"",
        email:"",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (formValid(this.state.formErrors)) {
      console.log (`
       --SUBMITTING --
       First Name: ${this.state.firstName}
       Last Name: ${this.state.lastName}
       Email: ${this.state.email}
       Password: ${this.state.password}
        `)
    } else {
      console.error ('FORM VALID - DISPLAY ERROR MESSAGES')
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;
 

    switch(name) {
      case "firstName":
        formErrors.firstName = 
        value.length < 2 && value.length > 0 ? 
        "minimum 3 characters required" : ""; 
        break;
      case "lastName":
        formErrors.firstName =
          value.length < 2 && value.length > 0 ?
            "minimum 3 characters required" : "";
        break;
      case "email":
        formErrors.firstName =
          value.length < 2 && value.length > 0 ?
            "minimum 3 characters required" : "";
        break;
      case "password":
        formErrors.firstName =
          value.length < 6 && value.length > 0 ?
            "minimum 6 characters required" : "";
        break;
        default:
        break;

    }
  }


  render(){
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="firstName">
                <label htmlFor="firstName">First Name </label>
                  <input 
                  type="text" 
                  className="" 
                  placeholder="First Name"
                  name="firstName"
                  onChange={this.handleChange}
                  noValidate />
              </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className=""
                placeholder="Last Name"
                name="lastName"
                onChange={this.handleChange}
                noValidate />
            </div>
            <div className="email">
              <label htmlFor="email">Enter Email</label>
              <input
                type="text"
                className=""
                placeholder="Email Address"
                name="email"
                onChange={this.handleChange}
                noValidate />
            </div>
            <div className="password">
              <label htmlFor="password">Enter Password</label>
              <input
                type="text"
                className=""
                placeholder="Enter Password"
                name="password"
                onChange={this.handleChange}
                noValidate />
            </div>
            <div className="createAccount">
            <button className="submit">Create Account</button>
            <small>Already have an account? </small>
            </div>
            </form>
        </div>
      </div>
    );
  }
  }


export default App;
