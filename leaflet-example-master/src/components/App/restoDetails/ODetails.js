import React from 'react';
import {Card,Button,Badge,CardBody,CardText, Col,Row} from 'reactstrap'
import AvgRating from './avgRating';


class ODetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          data : [],
          id:""
        }
       
      }
    

      componentDidMount() {
        //const url = "http://10.10.200.12:9000/foods"; 
        const url = "http://10.10.200.10:9000/restaurants"; 
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
      
    render() {
        
  return (

      <div>{this.state.data.map((RestaurantDetails,index) =>{
        {//localStorage.setItem("Rlatitude",RestaurantDetails.latitude)
        localStorage.removeItem("latitude")
    }

        return(
                       
        <Card>
            <CardBody>
                <Row>
                    <Col>
                      <h4><Badge color="light" >Address:&nbsp;</Badge></h4>{RestaurantDetails.address}
                    </Col>
              
                    <Col>
                        <AvgRating id={this.state.id} />
                    </Col>
                </Row><br/>
                
                <Row>
                    <Col><h4><Badge color="light">Cuisines:&nbsp;</Badge></h4>{RestaurantDetails.cuisines[0]}</Col>
                    <Col><h4><Badge color="light">Cost:&nbsp;</Badge></h4>{RestaurantDetails.cost}</Col>
                    
                </Row><br/>

                <Row>
                    <Col><h4><Badge color="light">Featured:&nbsp;</Badge></h4>{RestaurantDetails.featured_in}</Col>
                    <Col><h4><Badge color="light">Phone number:&nbsp;</Badge></h4>{RestaurantDetails.phno}</Col>
                    
                </Row><br/>

                <Row>
                    <Col><h4><Badge color="light">Working hours:&nbsp;</Badge></h4>{RestaurantDetails.workinghrs}</Col>
                    <Col><h4><Badge color="light">Map:&nbsp;</Badge></h4></Col>
                    
                </Row>

                <Row>
                    <Col></Col>
                    <Col><Button>Get directions</Button></Col>
                </Row>
            </CardBody>
        </Card>
        )}
      )}
    </div>
  )
};
}
export default ODetails;