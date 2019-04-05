 import React from "react"
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardColumns,Row,Col,Spinner,Badge,  CardDeck} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import AvgRating from "./../restoDetails/avgRating";
import Call from 'react-ionicons/lib/IosCall'
import Cash from 'react-ionicons/lib/IosCash'
import Star from 'react-ionicons/lib/IosStar'
import Pin from 'react-ionicons/lib/IosPin'



let api = "http://10.10.200.10:9000/searchL?";

class Cards extends React.Component {
      
        constructor(props){
          super(props);
          this.onButtonChange =this.onButtonChange.bind(this);
          this.fetchWeather = this.fetchWeather.bind(this);
          this.state = {
            data : [],
            isLoaded: false,
            items: [],
            id:"",
       
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

        fetchWeather(apiStr) {
          console.log(apiStr)
         
          fetch(apiStr)
           .then(res => res.json())
           .then(
     
               (result) => {
     
                   console.log(result)
                   this.setState({
                       isLoaded: true,
                       items: result,
                 
                   });
                   console.log(this.state);
               },
               // Note: it's important to handle errors here
               // instead of a catch() block so that we don't swallow
               // exceptions from actual bugs in components.
               (error) => {
                   this.setState({
                       isLoaded: true,
                       error
                   });
               }
           )
     
      
     
     }
        componentDidMount() {
          // //const url = "http://10.10.200.12:9000/foods"; 
          // const url = "http://localhost:9000/restaurants"; 
          // let headers = new Headers();

          // headers.append('Content-Type', 'application/json');
          // headers.append('Accept', 'application/json');

          // headers.append('Access-Control-Allow-Origin', url);
          // headers.append('Access-Control-Allow-Credentials', 'true');

          // headers.append('GET', 'POST');

          // fetch(url, {
          //     headers: headers,
          //     method: 'GET'
          // })
          // .then(response => response.json())
          // .then(contents => {console.log("in fetch: "+ contents);
          //                     this.setState ({
          //                     data : contents}
          //                     )
                              
          //     })
             
          // .catch(() => console.log("Can’t access " + url + " response. "))
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                api += `latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`;    
                console.log(api)
                this.fetchWeather(api); 
            });
            
            
        }
        else {
          api="http://10.10.200.10:9000/restaurants"
          this.fetchWeather(api); 
        }

        }

       
       render() {


  if(this.state.isLoaded) {
    return (
    //   <h1>done</h1>
    <CardColumns>
      {this.state.items.map((RestaurantDetails,index) =>{
        return(
         
                 <Card style={{backgroundColor:"#f2f2f3", boxShadow: "5px 5px #f2f2f3"}}>   
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
       
       </CardColumns>
    )
        }
        else{
            return(<div><center>Loading food<Spinner style={{ width: '3rem', height: '3rem' }} type="grow" /></center></div>)
        }

        
    }
}

export default withRouter(Cards);
