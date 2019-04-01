import React from "react";


import Header from "./../Home/header"
import LoggedHeader from "./../loggedUser/header"
import Search from "./../Home/search"
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {CardColumns} from "reactstrap";

let name;
let id;
class SearchDetails extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit =this.handleSubmit.bind(this)
        this.onButtonChange =this.onButtonChange.bind(this)
        console.log(name)
        this.state = {
          data : [],
          id : "",
          name: this.props.location.state.name
        }
      }

      onButtonChange(event) {
        this.setState({id:event.currentTarget.value}, ()=>{
          console.log(this.state.id)
        }
        
        );
        console.log(this.state.id)
        let path=`Details`;
        
       this.props.history.push({
          pathname: path,
          state: {
             id:event.currentTarget.value
          }
         });
         
      }
    
    componentDidMount() {
       // console.log("hello")
        this.requestData(this.state.name);
      }

      handleSubmit(name) {
        console.log("hello")
        this.requestData(name);
    }

      requestData(name) {
        const url = "http://localhost:9000/restaurants/search?name="+name;
        console.log(url) 
        let headers = new Headers();

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
                            data : contents})
            })
        .catch(() => console.log("Can’t access " + url + " response. "))
      }

    render() {
       
        return (
            <div>
                
                {
                
                ((localStorage.getItem("AccessToken") == null )?(<Header/>):(<LoggedHeader/>))
              }
                <br></br>
                <div style={{position:'relative'}}>
                
                <Search /> 
                <br></br>
                <label>Search Results:</label>
                <br></br>
                <CardColumns>
                <div>{this.state.data.map((RestaurantDetails,index) =>{
                    //let url="http://localhost:9000/images?id="+RestaurantDetails.urls[0];
                return(
                    
                        <Card >
                        <CardImg top width="100%"  src={RestaurantDetails.imageUrls[0]} alt="Card image cap" height="200px"/>
                        <CardBody> 
                            <div key={index}>
                                <CardTitle>{RestaurantDetails.name}</CardTitle>
                                <CardSubtitle>{RestaurantDetails.phNo}</CardSubtitle>
                                <CardText>{RestaurantDetails.address}</CardText>

                                <Button onClick={this.onButtonChange} value={RestaurantDetails.id}>Details</Button> 
                                </div>
                            
                        </CardBody>
                        </Card>
                      
                    )
                })}
                </div>
                </CardColumns>
                <br></br>
                </div>
                
            </div>
                
            
        );
    }
} 

export default SearchDetails;
