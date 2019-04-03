import React from 'react';
import {withRouter} from 'react-router-dom';
import Bookmark from './bookmark';
import {Card} from "reactstrap";

class NaviBar extends React.Component{
  constructor(props) {
    super(props);
    this.handleOverview = this.handleOverview.bind(this)
    this.handleMenu = this.handleMenu.bind(this)
    this.handlePhotos = this.handlePhotos.bind(this)
    this.handleReview = this.handleReview.bind(this)
    this.state ={
       data :[]
    }
   
  }

  componentDidMount() {
   //const url = "http://10.10.200.12:9000/foods"; 
   const url = "http://10.10.200.10:9000/restaurants/id?id="+this.props.id; 
   let headers = new Headers();
   console.log(url)
   
   headers.append('Content-Type', 'application/json');
   headers.append('Accept', 'application/json');
   
   headers.append('Access-Control-Allow-Origin', url);
   headers.append('Access-Control-Allow-Credentials', 'true');
   
   headers.append('GET', 'POST');
   
   fetch(url, {
   headers: headers,
   method: 'GET'
   })
   .then(response => response.json())
   .then(contents => {console.log("in fetch: "+ contents);
   this.setState ({
   data : contents,
   }
   )
   })
   .catch(() => console.log("Can’t access " + url + " response. "))
   
   }
 
  handleOverview() {
    console.log(this.props.id)
    let path=`Details`;
    
   this.props.history.push({
      pathname: path,
      state: {
         id:this.props.id
      }
     });
  }
  handleMenu() {
    console.log(this.props.id)
    let path=`Menu`;
    
   this.props.history.push({
      pathname: path,
      state: {
         id:this.props.id
      }
     });
  }

  handlePhotos() {
    console.log(this.props.id)
    let path=`Photo`;
    
   this.props.history.push({
      pathname: path,
      state: {
         id:this.props.id
      }
     });
  }

  handleReview() {
    console.log(this.props.id)
    let path=`Review`;
    
   this.props.history.push({
      pathname: path,
      state: {
         id:this.props.id
      }
     });
  }

    render() {
        const ul= {
          listStyleType: 'none',
          margin: '0',
          padding: '0',
          overflow: 'hidden',
          backgroundColor: '#333',
          width: '100%',
          position: 'sticky',
          top:'0'
        }
        
        const li= {
          float: 'left'
        }
        
        const a= {
          
          display: 'block',
          color: '#fffa8b',
          textAlign: 'center',
          padding: '14px 16px',
          textDecoration: 'none'
        }

   

  return (
     <>

   <div >
         <div>{this.state.data.map((RestaurantDetails,index) =>{
               return (
               <div>
                  <Card>
                  <center><h3>{RestaurantDetails.name}</h3></center>
                  </Card>
               </div>
         

               )
               })
               }
         </div>
</div>
   
<div >

    <ul style={ul}>
    <li style={li}><a onClick={this.handleOverview} style={a}>Overview</a></li>
    <li style={li}><a onClick={this.handleMenu} style={a}>Menu</a></li>
    <li style={li}><a onClick={this.handlePhotos} style={a}>Photos</a></li>
    <li style={li}><a onClick={this.handleReview} style={a}>Reviews</a></li>
    <li style={li}><a onClick={this.handlefav} style={a}><Bookmark id={this.props.id}/></a></li>
    </ul>   
    </div>
    </>
)
}
}
export default withRouter(NaviBar);



