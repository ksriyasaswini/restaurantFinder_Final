import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import {withRouter} from 'react-router-dom';

var body;
class LogHeader extends React.Component {
  constructor(props) {
    super(props);

    this.Logout = this.Logout.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
    this.handleResataurant = this.handleResataurant.bind(this);
    this.state = {
      isOpen: false,
      data: []
    };
  }

  handleProfile() {
   let path=`ProfilePage`
   this.props.history.push(path)
  }
  handleResataurant() {
    let path=`addRes`
   this.props.history.push(path)
  }

  Logout() {
    body = { token: localStorage.getItem("AccessToken") }
    console.log(localStorage.getItem("AccessToken"))
    const url = "http://10.10.200.10:9000/signOut?token="+localStorage.getItem("AccessToken"); 
    console.log(url)       
    let headers = new Headers();

          headers.append('Content-Type', 'application/json');
          headers.append('Accept', 'application/json');

          headers.append('Access-Control-Allow-Origin', url);
          headers.append('Access-Control-Allow-Credentials', 'true');

          headers.append('PUT', 'GET');
          console.log("1")  
          console.log(JSON.stringify(body))
          fetch(url, {
              headers: headers,
              method: 'PUT',
              body :JSON.stringify(body)
          })
         localStorage.removeItem("AccessToken")
        
          .then(response =>{ })
          .then(contents => {     })
           .catch(() => console.log("Can’t access " + url + " response. "))          
  }

  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div style={{backgroundColor:'#353535'}}>
        <Navbar color="#353535" light expand="md">
          <NavbarBrand href="/home" style={{color: '#fffa8b'}}>WEBAPP</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              
              <NavItem>
                <NavLink href="/home" style={{color: '#fffa8b',borderStyle:'groove'}} onClick={this.Logout}>Logout</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar >
                <DropdownToggle nav caret style={{color: '#fffa8b'}}>
                  Settings
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick = {this.handleProfile}>
                    View Profile
                  </DropdownItem>
                  <DropdownItem onClick = {this.handleResataurant}>
                    Add Restaurant
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href = "/home" style={{color: '#fffa8b',borderStyle:'groove'}} onClick={this.Logout}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(LogHeader);