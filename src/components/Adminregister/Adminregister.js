import React from 'react';

class Adminregister extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			email:'',
			password:'',
			name:''
		}
	}

	onEmailChange = (event) => {
		this.setState({email:event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password:event.target.value})
	}

	onNameChange = (event) => {
		this.setState({name:event.target.value})
	}

	onRegisterSubmit = () =>{
		console.log(this.state)
		fetch('https://localhost:3001/adminRegister',{
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email:this.state.email,
				password:this.state.password,
				name:this.state.name
			})
		})
		//this.props.onRouteChange('home')
		.then(response => response.json())
		.then(user => {
			if(user.id){
				this.props.onLoadUser(user)
				this.props.onRouteChange('Adminsignin')
			}
		})
	}

	render() {
		return (
		<article className="br2 ba dark-gray b--black-10 mv4 w-80 w-50-m w-25-l mw6 center shadow-1">
			<main className="pa4 black-80">
			  <form className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f2 fw6 ph0 mh0">Admin Register</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
			        <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" required/>
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" required/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" required/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input onClick={this.onRegisterSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib shadow-5" type="submit" value="Register"/>
			    </div>
			  </form>
			</main>
		</article>
		);
	}
}

export default Adminregister;