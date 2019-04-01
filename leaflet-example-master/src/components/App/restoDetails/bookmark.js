import React from "react"

import { render } from 'react-dom'
import MdOut from 'react-ionicons/lib/MdHeartOutline'
import MdHeart from 'react-ionicons/lib/MdHeart'

var body;
export default class bookmark extends React.Component {
 
    constructor(props){
        super(props);
        
     
        this.addFav = this.addFav.bind(this);
        this.removeFav = this.removeFav.bind(this);
        this.state = {
          visibility : false,
          color: '#fffa8b',
        
        }
      }

      addFav(x) {
        console.log(this.props.id)
        {(!localStorage.getItem("AccessToken")) ?alert("Please Login to Bookmark") : this.setState({visibility:true})} 
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
      }

      removeFav() {
        if(!localStorage.getItem("AccessToken")) {
           alert("Please Login to Remove Bookmark")}
        else {

              const url = "http://10.10.200.10:9000/favourite?id="+this.props.id; 
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
                
                this.setState({visibility:false})
       
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
            {  
                     (!this.state.visibility)?( <MdOut fontSize="30px"  onClick={this.addFav} color={this.state.color} />):( <MdHeart fontSize="30px" color={this.state.color} onClick={this.removeFav}/> )     
            }
          
           
            
             
            </div>
        )

}


}
