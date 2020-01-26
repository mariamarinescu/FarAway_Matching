import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import {connect} from 'react-redux'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "mon@email.com",
            password: "monPassw0rd",
            open: false
        }
        this.updateEmailField = this.updateEmailField.bind(this);
        this.updatePasswordField = this.updatePasswordField.bind(this);
    }

    updateEmailField(event) {
        this.setState({ email: event.target.value });
    }

    updatePasswordField(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch("/auth/signin",
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(this.state),
            })
            .then(res => res.json())
            
            .then(res => {
                console.log(res.flash)
                this.setState({ "flash": res.flash, open: true })
                this.props.dispatch(
                    {
                        type: "CREATE_SESSION",
                        user: res.user,
                        token: res.token,
                        msg: res.flash
                    }
                )
            })
            // .catch(err => this.setState({ "flash": err.flash, open: true }))

            .catch (err => {
            this.setState({ "flash": err.flash})
            this.props.dispatch(
                {
                    type: "CREATE_SESSION",
                    msg: err.flash
                }
            )
        }).then(() => {                
            this.props.history.replace("/")
    })
    }

    // handleClose = (reason) => {
    //     if (reason === "clickaway") {
    //         return;
    //     }
    //     this.setState({ open: false });
    // };

  render() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={this.handleSubmit}> 
                <p className="h4 text-center py-4">Sign In</p>
                <div className="grey-text">
               
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.updateEmailField}
                  />
                
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onChange={this.updatePasswordField}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Log In
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
};

function mapStateToProps(state) {
  return {
      flash: state.auth.token,
  }
};

export default connect(mapStateToProps)(SignIn);