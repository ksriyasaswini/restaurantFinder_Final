import React from "react";

import Cards from "./../Home/cards"
import Header from "./../Home/header"
import LoggedHeader from "./../loggedUser/header"
import { Card,CardBody,CardTitle,CardText } from 'reactstrap';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { CardColumns } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {withRouter} from 'react-router-dom';
 

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.addRestaurant =this.addRestaurant.bind(this);
        this.state = {
            data : [],
            id:""
          }
      }
      componentDidMount() {
        const url = "http://10.10.200.10:9000/profile?Token="+localStorage.getItem("AccessToken"); 
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', url);
        headers.append('Access-Control-Allow-Credentials', 'true');

        headers.append('GET', 'POST');

        fetch(url, {
            headers: headers,
            method: 'GET'
        })
        .then(response => response.json())
        .then(contents => {console.log("in fetch: "+ contents);
                            this.setState ({
                            data : contents}
                            )
                            
            })
           
        .catch(() => console.log("Can’t access " + url + " response. "))

      }

      addRestaurant() {
          
          let path=`addRestaurant1`
          this.props.history.push(path)
      } 
    
    render() {
        
        return (
            <div>
            {
              ((localStorage.getItem("AccessToken") == null )?(<Header/>):(<LoggedHeader/>))
            }
            {console.log(this.state.data)}
             <div style={{position:'relative'}}>
             <Breadcrumb>
                <BreadcrumbItem><a href="/home" style={{color: '#6c757d'}}>Home</a></BreadcrumbItem>
                <BreadcrumbItem active style={{color: '#6c757d'}}>Profile</BreadcrumbItem>
                </Breadcrumb>
             </div>

            <Form>{this.state.data.map((ProfileDetails, index)=> {
                console.log(ProfileDetails.favorites)
            })}
                <FormGroup row>
                    <Col sm={{offset:11}}>
                    <Button onClick={this.addRestaurant}>Add Restaurant</Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={1}>Name</Label>
                    <Col sm={8}>
                        <Input type="text" name="Name" id="Name" placeholder="Name" />      
                    </Col>
                    <Button>Edit</Button>
                </FormGroup>
            </Form>
            <br/>
            <Card>
                <CardTitle>Favourites:</CardTitle>
                <br/>
                <CardColumns>

                </CardColumns>
            </Card> 
            <br />
            <Card>
                <CardTitle>Restaurants added:</CardTitle>
                <br/>
                <CardColumns>

                </CardColumns>
            </Card>            

             </div>
            
        );
    }
} 

export default withRouter(Profile);
