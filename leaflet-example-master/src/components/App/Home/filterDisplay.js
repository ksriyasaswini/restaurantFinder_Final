import React from "react"
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardColumns,Row,Col, Badge } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import Header from "./../Home/header"
import Header1 from "./../loggedUser/header"
import Search from "./../Home/search"
import Filters from "./../Home/filter"
import Call from 'react-ionicons/lib/IosCall'
import Cash from 'react-ionicons/lib/IosCash'
import Star from 'react-ionicons/lib/IosStar'
import Pin from 'react-ionicons/lib/IosPin'
class FilterDisplay extends React.Component {
      
        constructor(props){
          super(props);
          this.onButtonChange =this.onButtonChange.bind(this);
          this.state = {
            data : [],
         
            id:""
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
            const url = "http://10.10.200.10:9000/restaurants/filters "; 
            console.log(url)
              let headers = new Headers();
    
              headers.append('Content-Type', 'application/json');
              headers.append('Accept', 'application/json');
    
              headers.append('Access-Control-Allow-Origin', url);
              headers.append('Access-Control-Allow-Credentials', 'true');
    
              headers.append('PUT', 'POST');
    
              fetch(url, {
                  headers: headers,
                  method: 'PUT',
                  body:JSON.stringify(this.props.location.state.body)
              })
              .then(response => response.json())
              .then(contents => {console.log("in fetch: "+ contents);
                                  this.setState ({
                                  data : contents}
                                  )
                                  
                  }
                  )
                 
              .catch(() => console.log("Can’t access " + url + " response. "))    
    
            console.log(this.state.data)
          
        }

    render() {
        return(
            
                <div>
                {
                        
                    ((localStorage.getItem("AccessToken") == null )?(<Header/>):(<Header1/>))
                }
                 <br></br>
                 <div style={{position:'relative'}}>
                        
                <Search /> 
                <br></br>
                
                <div style={{marginTop:"30px"}}>
                <Row style={{width:'100%'}}>
                        <Col xs="auto">
                        <Filters />
                        </Col >
                        <Col xs="auto" sm = "12" md={{ size:'9'}}>
 
                            <CardColumns>
                                    <>{this.state.data.map((RestaurantDetails,index)=>{
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
                                    }
                                        )
                                    } 
                                    
                                
                                    </>
                            </CardColumns>

                        </Col>
                    </Row>
                    </div>
                            </div>
                            </div>                  
      
        )

    }
}

export default withRouter(FilterDisplay);
