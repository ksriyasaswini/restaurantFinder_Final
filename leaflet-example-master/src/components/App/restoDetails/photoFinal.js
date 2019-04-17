import React from "react";
import Photo from "./photos";
import Bread from "./breadCrumbs"
import Header from "./../Home/header"
import Header1 from "./../loggedUser/header"
import Search from "./../Home/search";
import NaviBar from "./NaviBar";

class PhotoFinal extends React.Component {
      
    constructor(props){
        super(props);
        let id = localStorage.getItem("id")
        this.state = {
            id1 : localStorage.getItem("id")
         
        }
        console.log(localStorage.getItem("id"))
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
                
                <Photo  id={localStorage.getItem("id")}/>
                
            </div>
                
            
        );
    }
} 

export default PhotoFinal;
