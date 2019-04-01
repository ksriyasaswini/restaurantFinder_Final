import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import Header from "./../Home/header";
import LoggedHeader from "./../loggedUser/header"
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class addRestaurants extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //   modal: false
        // };
    
        // this.toggle = this.toggle.bind(this);
      }
    
    //   toggle() {
    //     this.setState(prevState => ({
    //       modal: !prevState.modal
    //     }));
    //   }

      
  render() {
    return (
        <>
        <div>
            {
              ((localStorage.getItem("AccessToken") == null )?(<Header/>):(<LoggedHeader/>))
            }
             <div style={{position:'relative'}}>
             {console.log(this.props.location)}
             <Breadcrumb>
                <BreadcrumbItem><a href="/home" style={{color: '#6c757d'}}>Home</a></BreadcrumbItem>
                <BreadcrumbItem ><a href="/ProfilePage" style={{color: '#6c757d'}}>Profile</a></BreadcrumbItem>
                <BreadcrumbItem active style={{color: '#6c757d'}}>addRestaurant</BreadcrumbItem>
                </Breadcrumb>
             </div>
            </div>
      
      <Form>
        {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.addRestaurants  }></Modal>  
        <ModalHeader toggle={this.toggle}>Add Restaurants</ModalHeader>
        <ModalBody> */}
            <FormGroup row>
                <Label for="exampleEmail" sm={2}>Restaurant name</Label>
                <Col sm={10}>
                    <Input type="text" name="name" id="restaurantName"  />
                </Col>
            </FormGroup>
                
            <FormGroup row>
                <Label for="cityname" sm={2}>City</Label>
                <Col sm={10}>
                    <Input type="select" name="select" id="cityname">
                        <option>Hyderabad</option>
                        <option>Chennai</option>
                        <option>Kolkata</option>
                        <option>Delhi</option>
                        <option>Bangalore</option>
                    </Input> 
                </Col>
            </FormGroup>
                
             <FormGroup row>
                <Label for="phoneNumber" sm={2}>Phone Number</Label>
                <Col sm={10}>
                    <Input type="text" name="name" id="phoneNumber"  />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="restaurantAddress" sm={2}>Address</Label>
                <Col sm={10}>
                    <Input type="textarea" name="text" id="restaurantAddress" />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="imageUpload" sm={2}>Upload Image</Label>
                <Col sm={10}>
                    <Input type="file" name="file" id="imageUpload" />
                    <FormText color="muted">
                    Upload images of the restaurant 
                    </FormText>
                </Col>
                <Button>Upload</Button>
            </FormGroup>           
            
        {/* </ModalBody>
        <ModalFooter> */}
            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        {/* </ModalFooter> */}
      </Form>
      </>
    );
  }
}
