import React from "react";
import Photo from "./photos";
import Bread from "./breadCrumbs"
import Header from "./../Home/header"
import Search from "./../Home/search"
import NaviBar from "./NaviBar";
import Rating from "./rating";
import Review from "./reviews";
import { Button } from "react-bootstrap";

class ReviewFinal extends React.Component {
       
    constructor(props){
        super(props);
        let id = this.props.location.state.id
        this.state = {
            id1 : this.props.location.state.id
         
        }
        console.log(this.state.id1)
      }

    render() {
        return (
            <div>
                
                <Header/>
                <div style={{position:'relative'}}>
                <Bread/>
                <Search/> 
                <br></br>
                </div>
                <div><NaviBar id={this.state.id1}/></div><br/>
                <Rating id={this.state.id1}/>
                <br/>
             
            </div>
                
            
        );
    }
} 

export default ReviewFinal;
