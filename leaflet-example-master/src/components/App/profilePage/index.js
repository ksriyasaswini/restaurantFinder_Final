import React from "react";
import Header from "../Home/header";


import LoggedHeader from "../loggedUser/header"


import Profile from "./profile";
 

class ProfilePage extends React.Component {

   
    
    render() {
        
        return (
            
            <div >
                <Profile/>
            </div>
            
        );
    }
} 

export default ProfilePage;