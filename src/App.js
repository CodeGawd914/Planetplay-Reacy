import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Particles from 'react-particles-js'
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
import Gallary from './Components/Gallary'




const particleOpt = {
    particles:{
      number: {
        value:150,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
}

class App extends Component {

  render() {
    return (

      <div className='App'>
      <Navbar/>
        <div className="wrapper">
          <div id="stars"></div>
          <div id="stars1"></div>
          <div id="stars3"></div>
        </div>
      <br></br>
      <Switch>
        <Route exact path='/Gallary' component ={Gallary}/>
        <Route exact path="/Cosmic" component={Cosmic}/>
        <Route exact path="/AboutUs" component={AboutUs}/>
        <Route exact path="/Attractions" component={Attractions}/>
        <Route exact path="/BdayParties" component={BdayParties}/>
        <Route exact path="/General" component={GeneralAdmission}/>
        <Route exact path="/Classes" component={Classes}/>
        <Route exact path="/Schedule" component={Schedule}/>
        <Route exact path="/Waiver" component={Waiver}/>
        <Route exact path='/' component={Home} />
      </Switch>
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
