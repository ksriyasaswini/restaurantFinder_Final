import React from 'react';
import {Card,Button,Badge,CardBody,CardText, Col,Row} from 'reactstrap'
import AvgRating from './avgRating';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
const position = [17.440081, 78.348915];



class ODetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          data : [],
          id:""
        }
        this.direction = this.direction.bind(this);
       
      }

    direction() {

        console.log("in direction")
        let url="https://www.google.co.in/maps/dir//"+localStorage.getItem("Rlatitude")+","+localStorage.getItem("Rlongitude");
        console.log(url);        
        window.open(url);
    }

    setMarker = ({ latitude, longitude }) => {
        this.setState({
            markers: [...this.state.markers, {
                latitude,
                longitude
            }]
        })
    }
      componentDidMount() {
        //const url = "http://10.10.200.12:9000/foods"; 
        const url = "http://10.10.200.10:9000/restaurants/id?id="+this.props.id; 
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
                            data : contents,
                            // latitude: contents.latitude,
                            // longitude: contents.longitude
                             }
                            )
                            
            })
           
        .catch(() => console.log("Can’t access " + url + " response. "))

      }
      
    render() {
        
  return (

      <div>{this.state.data.map((RestaurantDetails,index) =>{
        {
            localStorage.setItem("Rlatitude",RestaurantDetails.latitude)
            localStorage.setItem("Rlongitude",RestaurantDetails.longitude)
    }

        return(
                       
        <Card>
            <CardBody>
                <Row>
                    <Col>
                      <h4><Badge color="light" >Address:&nbsp;</Badge></h4>{RestaurantDetails.address}
                    </Col>
              
                    <Col>
                        <AvgRating id={this.props.id} />
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
                    
                    
                </Row><br/>

                <Row>
               
                    <Col><h4><Badge color="light">Map:&nbsp;</Badge></h4>
                     <Button onClick={this.direction}>Get Directions</Button> </Col>
                </Row>
                
                <Row>
                    <Col>
                <Map
                                                ref={this.mapRef}
                                                center={position}
                                                zoom={10}
                                                style={{ height: '350px', width: '100%' }}
                                            >

                                                <TileLayer
                                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                                                />



                                                <Marker position={[RestaurantDetails.latitude, RestaurantDetails.longitude]}>
                                                <Popup minWidth={"200"} closeButton={true} minHeight={10}>
                                 
                                                    <div>
                                                    <b>{this.state.name}</b><br></br>
                                                
                                                    {this.state.location}
                                                    
                                                    </div>
                                                </Popup>
                                                </Marker>
                                            </Map>
                                            </Col>
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