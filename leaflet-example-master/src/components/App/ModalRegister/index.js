import React from "react"

import {Modal, Button,FormGroup, Col, FormLabel, FormControl, ModalBody} from "react-bootstrap"
// import { createBrowserHistory as createHistory } from "history";
// import { browserHistory } from 'history'
import {withRouter} from 'react-router-dom';
import ModalLogin from "../ModalLogin";

var body;
class ModalRegister extends React.Component {
    constructor(props, context) {
      super(props, context);
      
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind (this);
      this.signup = this.signup.bind(this);
  
      this.state = {
        show: false,
        username: "",
       password: "",
      confirmPassword: "",
     
      
      };
     
    }
    //history = createHistory(this.props);
    signup() {
      body = {
        username: this.state.email,
        password: this.state.password,
  
      }
      
      const url = "http://10.10.200.10:9000/register";
      console.log(body);
    let headers = new Headers();
 
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
 
    headers.append('Access-Control-Allow-origin',url);
    headers.append('Access-Control-Allow-Credentials','true');
 
    headers.append('GET','POST');
 
    fetch(url, {
       headers:headers,
       method: 'POST',
       body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(contents => {console.log(contents);
        //<ModalLogin/>
        // let path=`home`
        // this.props.history.push(path);
        this.setState({ show: false })
                      
 })
 .catch(()=> console.log("can't access" + url + "response. "))
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    handleConfirmPassword(event) {
        this.setState({ confirmPassword: event.target.value})
    }

    handleEmailChange(event) {
      this.setState({ email: event.target.value})
    }

    handlePasswordChange(event) {
      this.setState({
      
        password: event.target.value
  
      });
    }

    render() {
      return (
        <>
          <Button variant="outline-warning" onClick={this.handleShow} style={{color: '#fffa8b',borderStyle:'groove'}}>
            Create an Account
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Register Here!!</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <FormGroup >
            <Col componentClass={FormLabel} sm={2}>
              Email
            </Col>
            <Col>
              <FormControl type="email" placeholder="Email" onChange = {this.handleEmailChange}
              />
            </Col>
          </FormGroup>
                   
          <FormGroup >
            <Col componentClass={FormLabel} sm={2}>
              Password
            </Col>
            <Col >
              <FormControl type="password" placeholder="Password" onChange={this.handlePasswordChange}
              />
            </Col>
          </FormGroup>

          <FormGroup >
            <Col componentClass={FormLabel} sm={2}>
              Confirm Password
            </Col>
            <Col >
              <FormControl type="password" placeholder="ConfirmPassword" onChange={this.handleConfirmPassword}
              />
            </Col>
          </FormGroup>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.signup}>
                Register
              </Button>
              <Button variant="danger" onClick={this.handleClose}>
                Close
              </Button>
             
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  
export default withRouter(ModalRegister);