import React from "react"

import {Modal, Button,FormGroup, Col, FormLabel, FormControl, ModalBody} from "react-bootstrap"
// import { createBrowserHistory as createHistory } from "history";
// import { browserHistory } from 'history'
import {withRouter} from 'react-router-dom';
import ModalRegister from "../ModalRegister";

var body;
class ModalLogin extends React.Component {
    constructor(props, context) {
      super(props, context);
      
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind (this);
      this.login = this.login.bind(this);
  
      this.state = {
        show: false,
        email: "",
        password: "",
      };
     
    }
    //history = createHistory(this.props);
    login() {
      body = {
        username: this.state.email,
        password: this.state.password,
      }
      
      console.log(body)
      console.log(body.password)
      console.log(body.useremail)
      const url = "http://10.10.200.10:9000/signIn";
      
      console.log(url)
  
      let headers = new Headers();
   
      headers.append('Content-Type','application/json');
      headers.append('Accept','application/json');
   
      headers.append('Access-Control-Allow-origin',url);
     
      headers.append('Access-Control-Allow-Credentials','true');
   
      headers.append('PUT','GET');
      console.log(body)
      fetch(url, {
              headers:headers,
              method: 'PUT',
              body: JSON.stringify(body)
            })
            .then(response => response.json())
            .then(contents => {console.log(contents);
            
                  localStorage.setItem("AccessToken",contents.accessToken);
                  let path=this.props.location.pathname
                  this.props.history.push(path);
                              
        })
            .catch((err)=> console.log(alert(err)))
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
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
          <Button variant="link" onClick={this.handleShow} style={{color: '#fffa8b'}}>
            Login
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Login!!</Modal.Title>
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

            </Modal.Body>
            <Modal.Footer>
            <label>Not Yet Registered?</label>
            <ModalRegister/>
            <br></br>
              <Button variant="primary" onClick={this.login}>
                Login
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
  
export default withRouter(ModalLogin);