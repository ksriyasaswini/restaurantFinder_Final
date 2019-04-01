import React, { Component } from "react";
import { Form, Button, FormGroup, FormControl, FormLabel,Col,PageHeader, Modal } from "react-bootstrap";
import "./login.css";
import login from "./login";
import {Route,Router} from "react-router-dom";

var body;


 class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);

    //
    
    this.state = {
      username: "",
      password: "",
      confirmPassword: ""
      
    };

  }


  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 5 && this.state.password == this.state.confirmPassword;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }



  handleSubmit(event) {
    event.preventDefault();
    body = {
      username: this.state.username,
      password: this.state.password,

     //confirmPassword: this.state.confirmPassword,
    }
 
    const url = "http://10.10.200.10:9000/register";
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
                      
 })
 .catch(()=> console.log("can't access" + url + "response. "))
 return (
  <Router>
 <Route  exact path='/login' component={login}/>
 </Router>
 )
  }

  render() {
    return (
          <Modal.Dialog>  
            <Form onSubmit={this.handleSubmit } horizontal>
            <Modal.Header >Register Here!!</Modal.Header>            
                <FormGroup controlId="username">
                    <Col componentClass={FormLabel} sm={2}> Email </Col>
                    <Col sm={10}>
                        <FormControl type="username" placeholder="username" 
                                    value = {this.state.email} 
                                    onChange = {this.handleChange}
                        />
                    </Col>
                </FormGroup>
                
                <FormGroup controlId="password">
                    <Col componentClass={FormLabel} sm={2}>Password</Col>
                    <Col sm={10}>
                    <FormControl type="password" placeholder="Password" 
                                    value={this.state.password}
                                    onChange={this.handleChange}
                    />
                    </Col>
                </FormGroup>

                <FormGroup controlId="confirmPassword">
                    <Col componentClass={FormLabel} sm={2}>Password</Col>
                    <Col sm={10}>
                    <FormControl type="password" placeholder=" Confirm Password" 
                                    value={this.state.confirmPassword}
                                    onChange={this.handleChange}
                    />
                    </Col>
                </FormGroup>  
            
                <FormGroup>
                    
                    <Col smOffset={2} sm={10}>
                    <Button onClick = {this.handleSubmit} type="submit" disabled={!this.validateForm()} >Register</Button>
                    </Col>
                                
                </FormGroup>
            </Form>
            </Modal.Dialog>
         
    );
  }
}

export default Signup;