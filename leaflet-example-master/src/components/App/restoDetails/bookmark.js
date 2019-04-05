import React from "react"

import { render } from 'react-dom'
import MdOut from 'react-ionicons/lib/MdHeartOutline'
import MdHeart from 'react-ionicons/lib/MdHeart'

var body;
var user={}
var favorites=[]
var visible;
export default class bookmark extends React.Component {
 
    constructor(props){
        super(props);
        
     
        this.addFav = this.addFav.bind(this);
        this.removeFav = this.removeFav.bind(this);
        this.state = {
            data:[],
          visibility : false,
         
        
        }
      }

    //   componentDidMount() {
    //     const url = "http://10.10.200.10:9000/profile?Token="+localStorage.getItem("AccessToken"); 
    //     let headers = new Headers();

    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Accept', 'application/json');

    //     headers.append('Access-Control-Allow-Origin', url);
    //     headers.append('Access-Control-Allow-Credentials', 'true');

    //     headers.append('GET', 'POST');

    //     fetch(url, {
    //         headers: headers,
    //         method: 'GET'
    //     })
    //     .then(response => response.json())
    //     .then(contents => {console.log("in fetch: "+ contents);
    //                         this.setState ({
    //                         data : contents}
    //                         )
    //                         return(
    //                             <div> {this.state.data.map((ProfileDetails, index)=> {
                                 
    //                                  console.log(ProfileDetails.favorites)
    //                                  if(ProfileDetails.favorites != undefined ) {
    //                                      for(let i=0;i<ProfileDetails.favorites.length;i++) {
    //                                          favorites[i]=ProfileDetails.favorites[i];  
    //                                          console.log(this.props.id)
    //                                      if(favorites[i].id == this.props.id){
    //                                          console.log("fav id")
    //                                          visible=true
    //                                          console.log(visible)
    //                                     } 
    //                                  }
    //                                  }
    //                                  user=ProfileDetails.user
                                      
    //                                  })}
                         
    //                                  </div>
    //                          )
                            
    //         })
           
    //     .catch(() => console.log("Can’t access " + url + " response. "))
    //     console.log(this.state.data)
        
    //   }

      addFav(x) {
        console.log(this.props.id)
        {(!localStorage.getItem("AccessToken")) ?alert("Please Login to Bookmark") : visible=true} 
        x.beat="true";

        body = {
          Token : localStorage.getItem("AccessToken"),
          favourites :this.props.id
        }

        const url = "http://10.10.200.10:9000/favourite"; 
          let headers = new Headers();

          headers.append('Content-Type', 'application/json');
          headers.append('Accept', 'application/json');

          headers.append('Access-Control-Allow-Origin', url);
          headers.append('Access-Control-Allow-Credentials', 'true');

          headers.append('GET', 'POST','PUT');

          fetch(url, {
              headers: headers,
              method: 'PUT',
              body: JSON.stringify(body)
          })
          .then(response => response.json())
          .then(contents => {console.log("in fetch: "+ contents);
                              this.setState ({
                              data : contents}
                              )
                              
              })
             
          .catch(() => console.log("Can’t access " + url + " response. "))
          console.log(this.state.data)
      }

      removeFav() {
        if(!localStorage.getItem("AccessToken")) {
           alert("Please Login to Remove Bookmark")}
        else {

              const url = "http://10.10.200.10:9000/favourite?id="+this.props.id+ "&AccessToken="+localStorage.getItem("AccessToken"); 
                let headers = new Headers();
      
                headers.append('Content-Type', 'application/json');
                headers.append('Accept', 'application/json');
      
                headers.append('Access-Control-Allow-Origin', url);
                headers.append('Access-Control-Allow-Credentials', 'true');
      
                headers.append('GET', 'POST','PUT','DELETE');
      
                fetch(url, {
                    headers: headers,
                    method: 'DELETE'
                })
                .then(response => response.json())
                .then(contents => {console.log("in fetch: "+ contents);
                                    this.setState ({
                                    data : contents}
                                    )
                                    
                    })
                   
                .catch(() => console.log("Can’t access " + url + " response. "))
                console.log(this.state.data)
                visible=false
       
        }
      }
      onMouseEnterHandler(x) {
        console.log("Enter")
       
        
    }

    onMouseLeaveHandler() {
        console.log("Leave")
        // x.beat="false"
   
    }  


    render(){
        return(
            <div onMouseOver={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler} >
             
            {/* <div>{this.state.data.map((ProfileDetails, index)=> {
            
            console.log(ProfileDetails.favorites)
            if(ProfileDetails.favorites != undefined ) {
                for(let i=0;i<ProfileDetails.favorites.length;i++){
                    favorites[i]=ProfileDetails.favorites[i];

                if(favorites[i].id == this.props.id)
                   visible=true
                
            }
            }
            user=ProfileDetails.user
           
            
            })}

            </div> */}
            {
                console.log(visible)}
                
              {  
                   
                      (!visible)?( <MdOut fontSize="30px"  onClick={this.addFav} color='#fffa8b' />):( <MdHeart fontSize="30px" color='#fffa8b' onClick={this.removeFav}/> )     
             }
          
           
            

            </div>
        )

}


}
