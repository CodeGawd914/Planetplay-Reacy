import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter} from 'react-router-dom'
import Navbar from './Components/Navbar'
import AboutUs from './Components/AboutUS'
import Classes from './Components/Classes'
import GeneralAdmission from './Components/GeneralAdmission'
import Waiver from './Components/Waiver'
import Attractions from './Containers/Attractions'
import Schedule from './Containers/Schedules'
import Cosmic from './Containers/Cosmic'
import Home from './Containers/Home'
import Footer from "./Containers/Footer"
import BdayParties from './Containers/BdayParties'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
const LIST_ID = process.env.REACT_APP_LIST_ID
const API_KEY = process.env.REACT_APP_MAILCHIMP_API

class App extends Component {

    state={
      user: ''
    }


    onSubmit = (e,email) => {
      e.preventDefault()
      this.setState({user:email})
      fetch('http://localhost:5000/signup',{
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json'
          },
        body: JSON.stringify({email_address: email, status: 'subscribed'})
      }).then(console.log)
    };

  render() {
    console.log('yooooo',this.state.user);
    return (

      <div className='App'>
      <Navbar/>
        <div className="wrapper">
          <div id="stars"></div>
          <div id="stars1"></div>
          <div id="stars3"></div>
        </div>
      <br></br>
      <div className='margin13 w3-text-white gilroy'>
      <Switch>
        <Route exact path='/Gallery' component ={Gallery}/>
        <Route exact path='/Contact' component ={Contact}/>
        <Route exact path="/Cosmic" component={Cosmic}/>
        <Route exact path="/AboutUs" component={AboutUs}/>
        <Route exact path="/Attractions" component={Attractions}/>
        <Route exact path="/BdayParties" component={BdayParties}/>
        <Route exact path="/General" component={GeneralAdmission}/>
        <Route exact path="/Classes" component={Classes}/>
        <Route exact path="/Schedule" component={Schedule}/>
        <Route exact path="/Waiver" component={Waiver}/>
        <Route exact path='/home' render={()=> <Home user={this.state.user} onSubmit={this.onSubmit}/>} />
        <Route exact path='/' render={()=> <Home user={this.state.user} onSubmit={this.onSubmit}/>} />

      </Switch>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer/>
      </div>
    );
  }
}

export default withRouter(App);
