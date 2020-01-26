import React from 'react';
import './Profile.css';
// import { Link } from 'react-router-dom';
import Avatar from './mystery-avatar.jpg'

import {connect} from  'react-redux'

class Profile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		profile:{
			email: "homer.simpson@wildcodeschool.fr",
			name: "Homer",
			lastname: "Simpson"
		}
	}
}

	componentDidMount() {
		if (this.props.token){
		fetch('/profile',
			{
				headers: {
					'Authorization': 'Bearer ' + this.props.token,
				}
			})
			.then(res => {
				if (res.ok)
					return res.json()
				else
					throw new Error(res.statusText)
			})
			.then(res => { this.setState({ profile: res }) })
			.catch()
	}	
}
	
handleLogOut = () => {
	console.log("here")
	this.props.dispatch(
		{
			type : "CREATE_SESSION",
			token : null,
		}
	)

	this.props.history.replace("/signin")
}


	render() {
		return (
			<div>
				<div class="image-crop">
					<img id="avatar" alt='avatar' src={Avatar}></img>
				</div>

				<div id="bio">
					<h2>{this.props.user ? this.props.user.name + ' ' + this.props.user.lastname: "?"}</h2>
				</div>

				<div id="bio">
					<h4>{this.state.email}</h4>
				</div>

				<div id="buttons">
					<button type='submit' onClick={this.handleLogOut}>Sign out</button>
				</div>
			</div>
		)
	}
}

function  mapStateToProps(state) {
	return {user:  state.auth.user}
};
export default connect(mapStateToProps)(Profile)  