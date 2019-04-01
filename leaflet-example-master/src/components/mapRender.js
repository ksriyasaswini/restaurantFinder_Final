import React, { PureComponent } from 'react';
import './map/map.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'leaflet/dist/leaflet.css';

import LeafletMap from './map/index';
import Header from './header';

export default class MapRender extends React.Component {
state = {
    markers: [],
  };

  setMarker = ({latitude, longitude}) => {
    this.setState({
      markers: [...this.state.markers, {
        latitude,
        longitude 
      }]
    })
  }

  render() {
    console.log(this.state)
    return (
      <div  style={{textAlign: "left"}}>
      
        <LeafletMap markers={this.state.markers} setMarker={this.setMarker} />
      </div>
    );
  }
}