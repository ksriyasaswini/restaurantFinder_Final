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
        let id = this.props.location.state.id
        this.state = {
            id1 : this.props.location.state.id
         
        }
        console.log(this.state.id1)
      }

    render() {
       
        return (
           
            <div>
              console.log(this.state.id1)
              
                     {  
                     (localStorage.getItem("AccessToken")?(<Header1/>):(<Header/>))      
                    }
                <div style={{position:'relative'}}>
                <Bread/>
                <Search/> 
                <br></br>
                </div>
                <div><NaviBar id={this.state.id1}/></div><br/>
                <Menu id={this.state.id1}/>
                
            </div>
                
            
        );
    }
} 

export default MenuFinal;
