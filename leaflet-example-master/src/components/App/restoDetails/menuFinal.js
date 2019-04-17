import React from "react";
import Photo from "./photos";
import Menu from "./Menu";
import Review from "./reviews";
import Rating from "./rating";
import Header1 from "./../loggedUser/header"
import Bread from "./breadCrumbs"
import Header from "./../Home/header"
import Search from "./../Home/search"
import NaviBar from "./NaviBar";

class MenuFinal extends React.Component {
       
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
                <Menu id={localStorage.getItem("id")}/>
                
            </div>
                
            
        );
    }
} 

export default MenuFinal;
