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
import { Container, Row, Col } from "reactstrap";
import { CardGroup } from "reactstrap";
 

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
                {/* <Row style={{marginTop:'200px'}}>
                        <div class="col-md-3"  >
                              <Filters/>
                        
                        </div>
                        <div class="col-md-9">
                                <label>Near Me</label>

                                <CardColumns >
                                    <Cards/> 
                                </CardColumns>
                        </div>
                </Row> */}
             <div style={{marginTop:"200px"}}>
                <Row style={{marginLeft:'150px'}}>
                        <Col xs="auto">
                        
                        <Filters/>
                        
                        </Col >
                        <Col xs="auto" sm = "12" md={{ size:'9'}} style={{width:'100%',marginLeft:'5%'}}>
                        
                        <label>Near Me</label>

                       
                            <Cards/> 
                       
                      
                        </Col>
                    </Row>
                    </div>
            </div>
            
        );
    }
} 

export default Home;