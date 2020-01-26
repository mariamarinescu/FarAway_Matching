
// import Welcome from './containers/signup/Welcome.component';


import React from 'react';
import './App.css';
import SignUp from './containers/SignUp/SignUp';
import SignIn from './containers/SignIn/SignIn';
import Profile from './containers/Profile/Profile';

import { MuiThemeProvider } from "@material-ui/core/styles";
import { Grid, Paper } from '@material-ui/core';
// import { Snackbar } from '@material-ui/core';
// import { Alert } from '@material-ui/lab';

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import requireAuth from './hoc/requireAuth';
import requireNotAuth from './hoc/requireNotAuth';

// import PopUp from './containers/PopUp.js';


class App extends React.Component {

  render() {
    return (
      <div className="App">
              {/* <Welcome/> */}

        <MuiThemeProvider  >
          <Grid container alignItems='center' style={{ height: '100%' }}>
            <Grid item xs={12} >
              <Paper elevation={4} style={{ margin: 32 }}>
                <Grid container alignItems='center' justify='center' >

                  <Grid item xs={12} sm={6} style={{ 'text-align': 'center' }}>
                    <img alt='img' src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" />
                  </Grid>

                  <Grid item xs={12} sm={6} alignContent='center' style={{ 'text-align': 'center' }}  >
                    <BrowserRouter>
                      <Switch>
                        <Redirect exact from='/' to='/profile' />
                        <Route path='/SignIn' component={requireNotAuth(SignIn)} />
                        <Route path='/SignUp' component={requireNotAuth(SignUp)} />
                        <Route path='/Profile' component={requireAuth(Profile)} />
                      </Switch>
                    </BrowserRouter>
                    {/* <PopUp/> */}
                  </Grid>
                  
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </MuiThemeProvider>

      </div>
    );
  }
}

export default App;
