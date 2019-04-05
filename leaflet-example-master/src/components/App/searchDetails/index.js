import React from "react";


import Header from "./../Home/header"
import LoggedHeader from "./../loggedUser/header"
import Search from "./../Home/search"
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Row,Col, Badge } from 'reactstrap';
import {CardColumns} from "reactstrap";
import Filters from "./../Home/filter"
import Call from 'react-ionicons/lib/IosCall'
import Cash from 'react-ionicons/lib/IosCash'
import Star from 'react-ionicons/lib/IosStar'
import Pin from 'react-ionicons/lib/IosPin'


let name;
let id;
var url
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
          if(name == undefined)
          url="http://10.10.200.10:9000/restaurants"
         else 
          url = "http://10.10.200.10:9000/restaurants/search?name="+name;
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
                <br></br>

                <div style={{marginTop:"30px"}}>
                <Row style={{width:'100%'}}>
                        <Col xs="auto">
                        <Filters/>
                        </Col >
                        <Col xs="auto" sm = "12" md={{ size:'9'}}>
 
                <CardColumns>
                <div>{this.state.data.map((RestaurantDetails,index) =>{
                    //let url="http://localhost:9000/images?id="+RestaurantDetails.urls[0];
                return(
                    
                    <Card style={{backgroundColor:"#f2f2f3"}}>   
                    <Row>
                       <Col>          
                            <CardImg  style={{width:"250px"}} src={RestaurantDetails.imageUrls[0]} alt="Card image cap" height="200px"/> 
  
                      </Col>
                      <Col>
                       <Row>
                        <Col>
                          <strong><CardTitle style={{fontSize:"20px"}}>{RestaurantDetails.name}</CardTitle></strong>
                        </Col>
                       <br></br>
                       <Col >
                       <div style={{float:"right"}}>
                       {RestaurantDetails.avgRating<3? 
                      <h4><Badge color="warning"> {RestaurantDetails.avgRating}</Badge></h4>:
                      <h4><Badge color="success">{RestaurantDetails.avgRating}</Badge></h4>
                    }
                    </div>
                       </Col>
                       </Row>
                       <CardText><Pin/>{RestaurantDetails.address}</CardText>      
                       </Col> 
                      
                       </Row>
                       <hr></hr>
                       <Row>
                       <CardBody>  
                           <Row><Col sm={1}><Call/></Col><Col>{RestaurantDetails.phno}</Col></Row>
                           <Row><Col sm={1}><Cash /></Col><Col>{RestaurantDetails.cost} (for two)</Col></Row>
                           <Row><Col sm={1}><Star beat="true"/></Col><Col>{RestaurantDetails.featured_in}</Col></Row>
                                  
                                   
                           <div style={{textAlign:"right"}}><Button onClick={this.onButtonChange}  value={RestaurantDetails.id}>Details</Button></div>
                                                       
                        </CardBody>
                      </Row>
                          
                    </Card>
                      
                    )
                })}
                </div>
                </CardColumns>
                </Col>
                </Row>
                </div>
                <br></br>
                </div>
                
            </div>
                
            
        );
    }
} 

export default SearchDetails;
