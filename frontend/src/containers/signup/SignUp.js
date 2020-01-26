import React from 'react';
import './SignUp.css';
// import { Snackbar } from '@material-ui/core';
// import { Alert } from '@material-ui/lab';
import { Link } from 'react-router-dom';


class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      firstName: "James",
      lastName: "Bond",

      // email: "",
      // password: "",
      // firstName: "",
      // lastName: ""
      flash: '',
      open: false
    };


    this.updateEmailField = this.updateEmailField.bind(this);
    this.updatePasswordField = this.updatePasswordField.bind(this);
    this.updateFirstNameField = this.updateFirstNameField.bind(this);
    this.updateLastNameField = this.updateLastNameField.bind(this);
    this.submitForm = this.submitForm.bind(this);
    // this.handleClose = this.handleClose.bind(this);
  }


  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  updatePasswordField(event) {
    this.setState({ password: event.target.value });
  }

  updateFirstNameField(event) {
    this.setState({ firstName: event.target.value });
  }

  updateLastNameField(event) {
    this.setState({ lastName: event.target.value });
  }


  submitForm(e) {
    e.preventDefault();
    // JSON.stringify(this.state,1,1)
    // console.log(JSON.stringify(this.state,1,1))
    fetch("/auth/signup",
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(this.state),
      })
      .then(res => res.json())
      .then(
        res => this.setState({ "flash": res.flash, open: true }),
        err => this.setState({ "flash": err.flash, open: true })
      )
  }


  // handleClose = (reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   this.setState({ open: false });
  // };


  render() {
    console.log("flash: " + this.state.flash)
    return (
      <div>
        <h1 className='title'>{this.state.lastName === '' ? 'SignUp' : 'Hello, ' + this.state.lastName}</h1>
        {/* <h1 className='dsp'> Hello, {this.state.lastName}</h1> */}
        <form className='formfields' onSubmit={this.submitForm}>

          <input className='textfields' value={this.state.email} placeholder="E-mail" onChange={this.updateEmailField} type="email" name="email" />
          <input className='textfields' value={this.state.password} placeholder="Password" onChange={this.updatePasswordField} type="password" name="password" />
          <input className='textfields' value={this.state.password} placeholder="Confirm Password" onChange={this.updatePasswordField} type="password" name="password" />
          <input className='textfields' value={this.state.firstName} placeholder="First Name" onChange={this.updateFirstNameField} type="firstName" name="firstName" />
          <input className='textfields' value={this.state.lastName} placeholder="Last Name" onChange={this.updateLastNameField} type="lastName" name="lastName" />
          <input className='btn' type="submit" value="Sign Up" />
          <br></br>
          <h5>If you already have an account please <Link to="/SignIn">Sign In</Link></h5>

          {/* <Snackbar style={{ 'top': '-27rem' }} open={this.state.open} autoHideDuration={3000} onClose={this.handleClose}>
            <Alert onClose={this.handleClose} severity={this.state.flash === 'User has been signed up!' ? "success" : "error"} variant="filled">
              {this.state.flash}
            </Alert>
          </Snackbar> */}

        </form>

      </div>
    )
  }
}

export default SignUp;