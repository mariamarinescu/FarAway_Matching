import React from 'react';
import './SignIn.css';
import { Link } from "react-router-dom";
// import { Snackbar} from '@material-ui/core';
// import { Alert } from '@material-ui/lab';
import { connect } from 'react-redux';

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
            <div>

                <form className='formfields' onSubmit={this.handleSubmit}>

                    <input className='textfields' value={this.state.email} placeholder="E-mail" onChange={this.updateEmailField} type="email" name="email" />
                    <input className='textfields' value={this.state.password} placeholder="Password" onChange={this.updatePasswordField} type="password" name="password" />
                    <input className='btn' type="submit" value="Sign In" />
                    <br></br>
                    <h5>Press <Link to="/SignUp">here</Link> to register!</h5>

                    {/* <Snackbar style={{ 'top': '-27rem' }} open={this.state.open} autoHideDuration={3000} onClose={this.handleClose}>
                        <Alert onClose={this.handleClose} severity={this.state.flash === 'Sign in succesful!' ? "success" : "error"} variant="filled">
                            {this.state.flash}
                        </Alert>
                    </Snackbar> */}


                </form>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        flash: state.auth.token,
    }
};

export default connect(mapStateToProps)(SignIn);

