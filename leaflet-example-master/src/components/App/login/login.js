import React, { Component } from "react";
import { Form, Button, FormGroup, FormControl, FormLabel,Col,ButtonGroup, Modal } from "react-bootstrap";
import "./login.css";
import {Route,Router} from "react-router-dom";
import { withRouter } from 'react-router-dom';



const responseGoogle = (response) => {
  console.log(response);
}

var body;
let token="";
class Login extends Component {
  constructor(props) {
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.routeChange = this.routeChange.bind(this);
  }

  handleSubmit(event) {

    body = {
      username: this.state.email,
      password: this.state.password,
    }
    console.log(body)
    console.log(body.password)
    console.log(body.email)
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
                let path=`loggedin`
          this.props.history.push(path);
                            
      })
          .catch((err)=> console.log(alert(err)))
          

      }

  

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 5;
  }

  handlePasswordChange (event) {
    this.setState({
      
      password: event.target.value

    });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value})
  }
   
  render() {
    return (
      <Modal.Dialog>
      <Form  onSubmit={this.onSubmit}>
          <Modal.Header >Login Here!!</Modal.Header>
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
          <FormGroup>
            <ButtonGroup>
            <Col>
              <Button onClick={this.handleSubmit} type="submit">Sign in</Button>
            </Col>
            </ButtonGroup>
          </FormGroup>
          
        </Form>
        </Modal.Dialog>
                  
    );
  }
}

export default withRouter(Login);