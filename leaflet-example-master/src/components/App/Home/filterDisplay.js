import React from "react"
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardColumns,Row,Col  } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import Header from "./../Home/header"
import Header1 from "./../loggedUser/header"
import Search from "./../Home/search"
import Filters from "./../Home/filter"

class FilterDisplay extends React.Component {
      
        constructor(props){
          super(props);
          this.state = {
            data : [],
         
            id:""
          }
          
        }
        componentDidMount() {
            const url = "http://10.10.200.10:9000/restaurants/filters "; 
            console.log(url)
              let headers = new Headers();
    
              headers.append('Content-Type', 'application/json');
              headers.append('Accept', 'application/json');
    
              headers.append('Access-Control-Allow-Origin', url);
              headers.append('Access-Control-Allow-Credentials', 'true');
    
              headers.append('PUT', 'POST');
    
              fetch(url, {
                  headers: headers,
                  method: 'PUT',
                  body:JSON.stringify(this.props.location.state.body)
              })
              .then(response => response.json())
              .then(contents => {console.log("in fetch: "+ contents);
                                  this.setState ({
                                  data : contents}
                                  )
                                  
                  }
                  )
                 
              .catch(() => console.log("Can’t access " + url + " response. "))    
    
            console.log(this.state.data)
          
        }

    render() {
        return(
            
                <div>
                {
                        
                    ((localStorage.getItem("AccessToken") == null )?(<Header/>):(<Header1/>))
                }
                 <br></br>
                 <div style={{position:'relative'}}>
                        
                <Search /> 
                <br></br>
                
                <div style={{marginTop:"30px"}}>
                <Row style={{width:'100%'}}>
                        <Col xs="auto">
                        <Filters/>
                        </Col >
                        <Col xs="auto" sm = "12" md={{ size:'9'}}>
 
                            <CardColumns>
                                    <>{this.state.data.map((filters,index)=>{
                                    return(

                                        <Card style={{width:"70%"}}>              
                                                <CardImg   src={filters.imageUrls[0]} alt="Card image cap" height="200px" /> 
                                                <CardBody>  
                                                        
                                                        <CardTitle>{filters.name}</CardTitle>
                                                        <CardSubtitle>{filters.phNo}</CardSubtitle>
                                                        <CardText>{filters.address}</CardText>
                                
                                                        <Button onClick={this.onButtonChange} value={filters.id}>Details</Button> 
                                                    
                                                    
                                                </CardBody>
                                            </Card>
                                    )
                                    }
                                        )
                                    } 
                                    
                                
                                    </>
                            </CardColumns>

                        </Col>
                    </Row>
                    </div>
                            </div>
                            </div>                  
      
        )

    }
}

export default withRouter(FilterDisplay);
