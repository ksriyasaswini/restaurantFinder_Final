import React from "react";
import Photo from "./photos";
import Bread from "./breadCrumbs"
import Header from "./../Home/header"
import Search from "./../Home/search"
import NaviBar from "./NaviBar";
import Rating from "./rating";
import Header1 from "./../loggedUser/header"
import Review from "./reviews";
import { Button } from "react-bootstrap";

class ReviewFinal extends React.Component {
       
    constructor(props){
        super(props);
        let id = localStorage.getItem("id")
        this.state = {
            id1 : localStorage.getItem("id")
         
        }
        console.log(this.state.id1)
      }

    render() {
        return (
            
                
                <div>
                     {  
                     (localStorage.getItem("AccessToken")?(<Header1/>):(<Header/>))      
                    }
                <div style={{position:'relative'}}>
                <Bread/>
                <Search/> 
                <br></br>
                </div>
                <div><NaviBar id={localStorage.getItem("id")}/></div><br/>
                <Rating id={localStorage.getItem("id")}/>
                <br/>
             
            </div>
                
            
        );
    }
} 

export default ReviewFinal;
