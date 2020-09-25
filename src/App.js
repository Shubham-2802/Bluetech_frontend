import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Welcome from './components/Welcome/Welcome';
import Carousal from './components/Carousal/Carousal';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Users from './components/Users/Users';
import Rank from './components/Rank/Rank';
import Courses from './components/Courses/Courses';
import Register from './components/Register/Register';
import Adminsignin from './components/Adminsignin/Adminsignin';
import Adminregister from './components/Adminregister/Adminregister';


const particlepara = {
                 "particles": {
                      "number": {
                          "value": 50
                      },
                      "size": {
                          "value": 3
                      }
                  },
                  "interactivity": {
                      "events": {
                          "onhover": {
                              "enable": true,
                              "mode": "repulse"
                          }
                      }
                  }
              }

const initialState = {
      input:'',
      route: 'Welcome',
      isSignedIn: false,
      isAdminSignedIn: false,
      user: {
        id:'',
        name:'',
        email:'',
        entries:0,
        joined:''
      }
    }             

class App extends Component {

  constructor() {
    super();
    this.state = initialState;
  }

  onLoadUser = (data) =>{
    this.setState({user: {
        id:data.id,
        name:data.name,
        email:data.email,
        entries:data.entries,
        joined:data.joined
    }})
  }

  onRouteChange = (route) => {
    if(route === 'Courses') {
      this.setState({isSignedIn:true})
    }
    else if (route === "signout"){
      this.setState(initialState)
    } 
    else if (route === "Users"){
      this.setState({isAdminSignedIn:true})
    } 
    else if (route === "adminsignout"){
      this.setState(initialState)
    } 
    this.setState({route: route})
    }
  
  render() {
      return (
      <div className="App">
        <Particles className="particles"
                params={particlepara}
              />
        <Navigation joined={this.state.user.joined} 
                    isSignedIn={this.state.isSignedIn} 
                    isAdminSignedIn={this.state.isAdminSignedIn} 
                    onRouteChange={this.onRouteChange} />
        {   
            this.state.route === 'Welcome'
            ?   <div className="welcome">
                      <Carousal onRouteChange={this.onRouteChange}/>
                      <Welcome onRouteChange={this.onRouteChange}/>
                </div>
            : this.state.route === 'Users'
              ? <Users onRouteChange={this.onRouteChange}/>
              : ( this.state.route === 'Adminsignin'
                ? <Adminsignin onRouteChange={this.onRouteChange}/>
                : (this.state.route === 'Adminregister'
                    ? <Adminregister onRouteChange={this.onRouteChange}/>
                    : (this.state.route === 'Courses'
                      ? <div>
                              <Rank name={this.state.user.name} entries={this.state.user.entries}/><br/><br/>
                              <Courses onLoadUser={this.onLoadUser} onRouteChange={this.onRouteChange}/>
                        </div>
                      : (this.state.route === 'SignIn'
                         ?  <SignIn onLoadUser={this.onLoadUser} onRouteChange={this.onRouteChange}/>
                         :  <Register onLoadUser={this.onLoadUser} onRouteChange={this.onRouteChange}/>
                         )
                      )
                  )
              )
                
        }
      </div>
    );
  }
}

export default App;
