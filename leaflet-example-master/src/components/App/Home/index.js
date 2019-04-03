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
               <Container style={{marginTop:'200px'}}>
                <Row style={{width:'100%'}}>
                        <Col >
                        <Filters/>
                        </Col >
                        <Col >
                        
                        <label>Near Me</label>

                        <CardColumns >
                            <Cards/> 
                        </CardColumns>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        );
    }
} 

export default Home;