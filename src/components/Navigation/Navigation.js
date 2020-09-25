import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Logo from './logo2.png';
import 'bootstrap/dist/css/bootstrap.css';

const Navigation = ({joined,onRouteChange,isSignedIn,isAdminSignedIn}) => {

	if(isSignedIn){
		return (
			<Navbar
				        variant="dark"
				        expand="md"
				        className="animate-navbar nav-theme justify-content-between">
					  <div>
						  <Navbar.Brand href="#home">
							  <div className='white f3'>
						        {`Last Login: ${joined}`}
						      </div>
						  </Navbar.Brand>
					  </div>
					  <div>
						  <Navbar.Toggle aria-controls="basic-navbar-nav" />
						  <Navbar.Collapse id="basic-navbar-nav">
						    <Nav className="mr-auto">
						      <p onClick={() => onRouteChange('signout')} className="f3 link dim black underline pa3 pointer"> SignOut </p>
						    </Nav>
						  </Navbar.Collapse>
					  </div>
				</Navbar>
		        );
	} else if(isAdminSignedIn){
		return (
			<Navbar
				        variant="dark"
				        expand="md"
				        className="animate-navbar nav-theme justify-content-between">
					  <div>
						  <Navbar.Brand href="#home">
							  <div className='white f3'>
						        {`Last Admin Login: ${joined}`}
						      </div>
						  </Navbar.Brand>
					  </div>
					  <div>
						  <Navbar.Toggle aria-controls="basic-navbar-nav" />
						  <Navbar.Collapse id="basic-navbar-nav">
						    <Nav className="mr-auto">
						      <p onClick={() => onRouteChange('adminsignout')} className="f3 link dim black underline pa3 pointer"> SignOut </p>
						    </Nav>
						  </Navbar.Collapse>
					  </div>
				</Navbar>
		        );
	}
	else {
		return (
			<div>
				<Navbar
				        variant="dark"
				        expand="md"
				        className="animate-navbar nav-theme justify-content-between">
					  <div>
						  <Navbar.Brand>
							  <img
						        src={Logo}
						        className="logo"
						        alt="My logo"
						      />
						  </Navbar.Brand>
					  </div>
					  <div>
						  <Navbar.Toggle aria-controls="basic-navbar-nav" />
						  <Navbar.Collapse id="basic-navbar-nav">
						    <Nav className="mr-auto">
						      <p onClick={() => onRouteChange('Welcome')} className="f3 link dim black pa3 pointer">Home</p>
						      <p onClick={() => onRouteChange('SignIn')} className="f3 link dim black pa3 pointer">User Panel</p>
						      <p onClick={() => onRouteChange('Adminsignin')} className="f3 link dim black pa3 pointer">Admin Panel</p>
						    </Nav>
						  </Navbar.Collapse>
					  </div>
				</Navbar>		
			</div>
		);
	}
	
}

export default Navigation;