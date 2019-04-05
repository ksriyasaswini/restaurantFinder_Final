import React from "react";

import Cards from "./../Home/cards"
import Header from "./../Home/header"
import LoggedHeader from "./../loggedUser/header"

import { Col, Row, Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Badge } from 'reactstrap';
import { CardColumns } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {withRouter} from 'react-router-dom';

import Call from 'react-ionicons/lib/IosCall'
import Cash from 'react-ionicons/lib/IosCash'
import Star from 'react-ionicons/lib/IosStar'
import Pin from 'react-ionicons/lib/IosPin'
 
var user={}
var favorites=[]
class Profile extends React.Component {

    constructor(props){
        super(props);
        this.addRestaurant =this.addRestaurant.bind(this);
        this.onButtonChange =this.onButtonChange.bind(this)
          
        this.state = {
            data : [],
            id:"",
            favorites:[],
            users:[]
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
        const url = "http://10.10.200.10:9000/profile?Token="+localStorage.getItem("AccessToken"); 
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
                            data : contents}
                            )
                            
            })
           
        .catch(() => console.log("Can’t access " + url + " response. "))

      }

      addRestaurant() {
          
          let path=`addRestaurant1`
          this.props.history.push(path)
      } 
    
    render() {
        
        return (
            <div>
            {
              ((localStorage.getItem("AccessToken") == null )?(<Header/>):(<LoggedHeader/>))
            }
            {console.log(this.state.data)}
             <div style={{position:'relative'}}>
             <Breadcrumb>
                <BreadcrumbItem><a href="/home" style={{color: '#6c757d'}}>Home</a></BreadcrumbItem>
                <BreadcrumbItem active style={{color: '#6c757d'}}>Profile</BreadcrumbItem>
                </Breadcrumb>
             </div>

            <Form>{this.state.data.map((ProfileDetails, index)=> {
            //   this.setState({favorites:ProfileDetails.favorites})
            // this.setState({users:ProfileDetails.user})
            //favorites=ProfileDetails.favorites[0]
            console.log(ProfileDetails.favorites)
            if(ProfileDetails.favorites != undefined ) {
                for(let i=0;i<ProfileDetails.favorites.length;i++){
                favorites[i]=ProfileDetails.favorites[i]
                console.log(favorites[i].name)}
            }
            user=ProfileDetails.user
           
            
            })}
                    {console.log(user)}
  
                <FormGroup row>
                    <Col sm={{offset:10}}>
                    <Button onClick={this.addRestaurant}>Add Restaurant</Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={1}>Name</Label>
                    <Col sm={8}>
                        <Input type="text" name="Name" id="Name" placeholder="Name" value={user.username} />      
                    </Col>
                </FormGroup>

                
            </Form>
            <br/>
            <Card>
                <CardTitle>Favourites:</CardTitle>
                <br/>
                <CardColumns>
                <div> {favorites.map((RestaurantDetails,index)=>{
                        return(

                            <Card style={{backgroundColor:"#f2f2f3", boxShadow: "5px 5px #f2f2f3"}}>   
                            <Row>
                               <Col>          
                                    <CardImg  style={{width:"400px"}} src={RestaurantDetails.imageUrls[0]} alt="Card image cap" height="200px"/> 
          
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
                    }
                    )}

                </div>

                </CardColumns>
            </Card> 
            <br />
            {/* <Card>
                <CardTitle>Restaurants added:</CardTitle>
                <br/>
                <CardColumns>

                </CardColumns>
            </Card>             */}

             </div>
            
        );
    }
} 

export default withRouter(Profile);
