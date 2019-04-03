import React from "react";
import Header from "./header";
import Cards from "./cards";
import Search from "./search"
import SearchImage from "./searchImage"
import LoggedHeader from "./../loggedUser/header"
import {CardDeck} from "reactstrap";
import {CardColumns} from "reactstrap";


import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import Filters from "./filter";
 

class Home extends React.Component {

   
    
    render() {
        //localStorage.setItem("AccessToken",null)
        
        return (
            
            <div >
                
               
            <div style ={{position:'relative',width:'100%'}}>
            
            {
              ((localStorage.getItem("AccessToken") == null )?(<Header/>):(<LoggedHeader/>))
            }
            </div>
                <hr></hr>
                <div class="ml-auto" >
                <SearchImage/>
                </div>
                <br></br>
                <div style={{marginTop:'-200px'}} >
                <Search/> </div>
                <br></br>
               <div class="container">
               <div class="row">
                <div style={{width:"30%",position:'absolute',marginTop:'200px'}}>
                <Filters/>
                </div >
                <div class="ml-auto" style={{position:'absolute',left:'300px',marginTop:'200px'}}>
                
                <label>Near Me</label>

                <CardColumns >
                    <Cards/> 
                </CardColumns>
                </div>
                </div>
                </div>
            </div>
            
        );
    }
} 

export default Home;