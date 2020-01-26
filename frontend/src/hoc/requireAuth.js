import React from 'react'
import {connect} from 'react-redux'


export default function (ComposedComponent) {
    class Authentication extends React.Component
{
    componentWillMount(){
        if(!this.props.authenticated) 
            this.props.history.push('/signin');
        }
        componentWillUpdate() {
            if (!this.props.authenticated)
                this.props.history.push('/signin');
        }
        
        render() {
            return  <ComposedComponent  {...this.props}  />
        }
    }

    function  mapStateToProps(state) {
        return { authenticated:  state.auth.token ? true : false };
    }

    return  connect(mapStateToProps)(Authentication);
}

