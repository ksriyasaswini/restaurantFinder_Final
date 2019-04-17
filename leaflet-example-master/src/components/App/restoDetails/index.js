import React from "react";
import Photo from "./photos";
import Menu from "./Menu";
import Review from "./reviews";
import Rating from "./rating";
import Bread from "./breadCrumbs"
import Header from "../Home/header"
import Header1 from "./../loggedUser/header"
import Search from "./../Home/search"
import NaviBar from "./NaviBar";
import AvgRating from "./avgRating"
import { Card, CardImg,CardBody,CardTitle, CardSubtitle, CardText } from "react-bootstrap";
import ODetails from './ODetails'


let id;
let id1;
var body;
class Details extends React.Component {

    constructor(props){
        super(props);
         id =(localStorage.getItem("id"))
       console.log(id)
        this.state = {
          data : [],
          id1:localStorage.getItem("id")
        }
        //this.setState({id1 : id})
    
    }
   
    render() {
        return (
           

            <div>

                
                    <div>
                     {  
                     (localStorage.getItem("AccessToken")?(<Header1/>):(<Header/>))      
                    }
                    <div style={{position:'relative'}}>
                    <Bread />
                    <Search id={localStorage.getItem("id")}/> 
                     <br></br>
                     </div>
                    <div><NaviBar id={localStorage.getItem("id")}/></div><br/>
                   
                     <br></br>
                     <ODetails id={localStorage.getItem("id")}/>
                    <br/>
                     <Menu id={localStorage.getItem("id")}/>
                     <br>
                     </br>
                     <Photo id={localStorage.getItem("id")}/>
                     <br></br>
                     <Rating id={localStorage.getItem("id")}/>

                    </div>
              
            </div>
                
            
        );
    }
} 

export default Details;
