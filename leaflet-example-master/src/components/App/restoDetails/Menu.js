import React from "react"
import image1 from "../image/image1.jpeg"
import image2 from "../image/image2.jpeg"
import {Image, Card} from "react-bootstrap"
import index from "./index"
import menu1 from "../image/menu1.jpg"
import {Carousel} from "react-bootstrap"

var menuUrls=[];
class Menu extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data :[],
            show : false
        }
    }
   
    componentDidMount() {
        //const url = "http://10.10.200.12:9000/foods"; 
        const url = "http://10.10.200.10:9000/restaurants/id?id="+this.props.id;
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
        console.log(this.state.data)  
      }
    
       render() {
        console.log(this.props.id)
        return(
            <Card >
            <label>Menu</label>
            <center>
            <div> {this.state.data.map((RestaurantDetails,index) =>{
                
                return(
                    menuUrls=RestaurantDetails.menuUrls,
                    <div> <Carousel style = {{width:'30%'}} interval = '100000'>
                    {menuUrls.map((images,index)=>
               
                       
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={images}
                                alt="First slide"
                                />
                                
                            </Carousel.Item>)}
                        </Carousel>
                        </div>
                         
            )
            })}
                </div>
               
                
            </center>
            <br></br>
            </Card>
            )
    }
}

export default Menu;