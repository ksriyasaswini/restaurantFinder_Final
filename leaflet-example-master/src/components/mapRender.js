import React, { PureComponent } from 'react';
import './map/map.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'leaflet/dist/leaflet.css';

import LeafletMap from './map/index';
import Header from './header';

export default class MapRender extends React.Component {
state = {
    marker: {
      latitude:0,
      longitude:0
    },
  };

  setMarker = ({latitude, longitude}) => {
    this.setState({
      marker: {
        latitude,
        longitude 
      },
    })
  }

  render() {
    console.log(this.state)
    return (
      <div  style={{textAlign: "left"}}>
      
        <LeafletMap marker={this.state.marker} setMarker={this.setMarker} />
      </div>
    );
  }
}