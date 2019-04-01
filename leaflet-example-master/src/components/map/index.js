import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import './map.css';
import {Form,Button,} from 'react-bootstrap';

import { FormControl} from 'react-bootstrap';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
const position = [17.440081, 78.348915];


class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLongChange = this.handleLongChange.bind(this);
    
  this.state = {
    lati:"",
    longi:"",
    latiVal:"",
    longiVal:"",
   
  };
};

  handleLatChange = event => {
    this.setState({
      latiVal: event.target.value
    });
  }
  handleLongChange = event => {
    this.setState({
      longiVal: event.target.value
    });
  }
   
  
  
  handleClick = (e) => {
    this.props.setMarker({
      latitude: e.latlng.lat,
      longitude: e.latlng.lng 
    });
    this.setState({
    
      lati:e.latlng.lat,
      longi:e.latlng.lng,
  
    });
    console.log("lattitude:"+ this.state.lati)
    console.log("longitude:"+ this.state.longi)
  };

  
  render() {
    return (
      <div >
         
        
        <Form className="form" >
          <div >
          <Form inline>
          <FormControl 
              readOnly
            type="text" 
            placeholder="Lattitude" 
            className="mr-sm-2"
            value={this.state.lati} 
            onChange={this.handleLatChange}
          />
          
          <FormControl 
          readOnly
            type="text" 
            placeholder="Longitude" 
            className="mr-sm-2"
            value={this.state.longi}  
            onChange={this.handleLongChange} 
          />
      <Map
        ref={this.mapRef}
        center={position} 
        zoom={13} 
        style={{ height: '500px', width: '100%' }}
        onClick={this.handleClick}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {
          this.props.markers.map((m) => (
            <Marker position={[parseFloat(m.latitude), parseFloat(m.longitude)]}>
              <Popup>latitude:{m.latitude}<br />longitude:{m.longitude}</Popup>
            </Marker>
          ))
        }
      </Map>
      </Form>        

      <Button type="submit" >Submit</Button>
      </div>
      </Form>


      </div>
    );
  }
}

export default LeafletMap;