import React from "react"
import image1 from "../image/image1.jpeg"
import image2 from "../image/image2.jpeg"
import {Image, Card} from "react-bootstrap"
import {Modal, Button,FormGroup, Col, FormLabel, FormControl, ModalBody} from "react-bootstrap"

class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            data :[],
            show : false
        }
    }

    handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
          console.log("show")
        this.setState({ show: true });
      }
    
    componentDidMount() {
       
        const url = "http://10.10.200.10:9000/restaurants/id?id="+this.props.id;
        console.log(url) 
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
                            data : contents})
            })
        .catch(() => console.log("Can’t access " + url + " response. ")) 
    }


    render() {
        return(
            <>
            {console.log("1")}
            {console.log(this.state.data)}
            <Card>
                <br></br>
            <label>Photos</label>
            <div> {this.state.data.map((RestaurantDetails,index) =>{
                return(
                    <div>
                         
                            <Image src={RestaurantDetails.imageUrls[0]} style={{height:'200px',marginLeft: '80px',marginTop:'30px',width:'300px'}}  onClick={this.handleShow} responsive/>
                         
            </div>
            )})}
                </div>
            <br></br>
            </Card>
            </>
            )
    }
}

export default Photo;