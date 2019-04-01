import React, {Component} from 'react';
import {Navbar, Form, InputGroup, FormControl, Button} from 'react-bootstrap';

export default class Header extends Component {
  state = {
    latitude: '',
    longitude: '',
  }
  handleClick = (e) => {
    e.preventDefault();
    this.props.setMarker({
      latitude: this.state.latitude,
      longitude: this.state.longitude,
    });
  }
  render() {
    return (
      <Navbar className="bg-light justify-content-between">
        <Form inline>
          <FormControl 
            type="text" 
            placeholder="Lattitude" 
            className="mr-sm-2"
            value={this.state.latitude} 
            onChange={e => this.setState({latitude: e.target.value})} 
          />
          <FormControl 
            type="text" 
            placeholder="Lattitude" 
            className="mr-sm-2"
            value={this.state.longitude}  
            onChange={e => this.setState({longitude: e.target.value})} 
          />
          <Button type="submit" onClick={this.handleClick}>Submit</Button>
        </Form>
      </Navbar>
    );
  }
}