import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import Header from "./../Home/header";
import LoggedHeader from "./../loggedUser/header"
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

var body;
export default class addRestaurants extends React.Component {

    constructor(props) {
        super(props);
        this.setState ={
        form: {
            name:'',
            city:'',
            phoneNumber: '',
            address:'',
            cost:0,
            cuisines: {},
            featured: [],
            type: '',
            imageUrls:[],
            menuUrls:[],
        }
    }
        this.ImageChange = this.ImageChange.bind(this);
      }
      
    
    //   toggle() {
    //     this.setState(prevState => ({
    //       modal: !prevState.modal
    //     }));
    //   }

    

    ImageChange(e) {
        // e.preventDefault();
        console.log('.......'+this.state.form.imageUrls)
        body = {
         imageUrls:this.state.form.imageUrls,
        }
        console.log(body);
         console.log('handle uploading-', this.state.file);
         const url = "http://10.10.200.10:9000/images"; 
         const formdata=new FormData()
           formdata.append("file",this.state.file);
           
         let headers = new Headers();
     
             formdata.append("file",this.state.file);
     
             headers.append('Content-Type', 'multipart/form-data');
             headers.append('Accept', 'application/json');
         
             headers.append('Access-Control-Allow-Origin', url);
             headers.append('Access-Control-Allow-Credentials', 'true');
         
             headers.append('GET', 'POST');
             
             e.preventDefault();
             
             fetch(url, {
               headers: headers,
               method: 'POST',
               withCredentials:true,
               credentials:'include',
               headers:{
                 'Access-Control-Allow-Origin': url
               },
               body: formdata
             })               
             .then(r=> {r.json()
               .then(response=>{console.log(response)
                  this.setState ({
                    result: JSON.stringify(response.image_url)
                  })
                  console.log("result image:"+this.state.result.replace('\"','',))
                  this.setState ({
                    result: this.state.result.replace('\"','',)
                  })
                  console.log("result image:"+this.state.result.replace('\"','',))
                  this.setState ({
                    result: this.state.result.replace('\"','',)
                  })
                  if(r.status==200){
                    console.log("success")
                    this.setState(
                      {
                        img:this.state.img.concat(this.state.result)
                      })
                      console.log("img in state appending "+this.state.img)
                  }
                 
               })
              })
            .catch(() => console.log("Can’t access " + url + " response. "))
           
        }
      
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
                <Button onClick={this.ImageChange}>Upload</Button>
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
