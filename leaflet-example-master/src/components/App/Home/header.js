import React from "react"

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
import ModalLogin from "../ModalLogin";
import ModalRegister from "../ModalRegister";

class Header extends React.Component{

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        
        return(
            
            <div style={{backgroundColor:'#353535'}}>
        <Navbar color="#353535'" light expand="md" style={{background:'transparent'}}>
          <NavbarBrand href="/home" style={{color: '#fffa8b'}}>WebApp</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <ModalLogin/>
                {/* <NavLink href={'/login'} style={{color: '#fffa8b'}}>login</NavLink> */}
              </NavItem> 
              <NavItem>
                <ModalRegister/>
                {/* <NavLink href={'/Register'} style={{color: '#fffa8b',borderStyle:'groove'}}>Create an Account</NavLink> */}
              </NavItem>              
            </Nav>
          </Collapse>
        </Navbar>
      </div>                          
           
        );
    }

}

export default Header;