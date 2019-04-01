import React, { PureComponent } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'leaflet/dist/leaflet.css';

import LeafletMap from './components/map';
import Header from './components/header';

import Home from "./components/App/Home/index"
import Login from "./components/App/login/login";


import Signup from "./components/App/login/signup";

import ModalLogin from "./components/App/ModalLogin/index"
import ModalRegister from "./components/App/ModalRegister/index"
import PhotoFinal from "./components/App/restoDetails/photoFinal";
import ReviewFinal from "./components/App/restoDetails/ReviewFinal";
import loggedin from "./components/App/loggedUser/index"

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import SearchDetails from "./components/App/searchDetails";
import Details from "./components/App/restoDetails/index";
import addRestaurants from "./components/App/profilePage/addRestaurants";
import ProfilePage from "./components/App/profilePage";
import addRestaurant1 from "./components/App/profilePage/addrestaurant1";
import MenuFinal from "./components/App/restoDetails/menuFinal";
 
import MapRender from './components/mapRender';
class App extends PureComponent {
 
  render() {
    return (
      <div className="App" >
        <Router>
        <Switch>
            <Route exact path ="/home" component ={Home}/>
            <Route path ="/login" component ={Login}/>
            <Route path ="/Signup" component ={Signup}/>
            <Route path="/Search" component = {SearchDetails}/>
          
            <Route path ="/Menu" component ={MenuFinal}/>
        
            <Route path="/Photo" component={PhotoFinal}/>
            <Route path="/Review" component={ReviewFinal}/>
            <Route path="/Details" component={Details}/>
            <Route exact path="/loggedin" component={loggedin}/>
            <Route exact path="/Register" component={ModalRegister} />
            <Route exact path="/addRestaurant" component={addRestaurants} />
            <Route exact path="/addRestaurant1" component={addRestaurant1} />
            <Route exact path="/ProfilePage" component={ProfilePage}/>
            <Route exact path="/Maps" component={MapRender}/>
            <Redirect to ="/home"/>
        </Switch>
    </Router> 
    </div>
  
    
    );
}
}

export default App;
