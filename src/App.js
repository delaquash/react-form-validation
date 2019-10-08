import React from 'react';
import './App.css';


class App extends React.Component  {
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
                  onChange={this.onChange}
                  noValidate />
              </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className=""
                placeholder="Last Name"
                name="lastName"
                onChange={this.onChange}
                noValidate />
            </div>
            <div className="email">
              <label htmlFor="email">Enter Email</label>
              <input
                type="text"
                className=""
                placeholder="Email Address"
                name="email"
                onChange={this.onChange}
                noValidate />
            </div>
            <div className="password">
              <label htmlFor="password">Enter Password</label>
              <input
                type="text"
                className=""
                placeholder="Enter Password"
                name="password"
                onChange={this.onChange}
                noValidate />
            </div>
            </form>
        </div>
      </div>
    );
  }
  }


export default App;
