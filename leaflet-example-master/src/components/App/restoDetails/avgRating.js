import React from "react"
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Badge} from 'reactstrap'

export default class AvgRating extends React.Component {

    constructor(props){
        super(props);
       
        this.state = {
            avg: "",
            id:"",
            color:""
      
        }
      }

      componentDidMount() {
          console.log("rating",this.props.id)
        const url = "http://10.10.200.10:9000/avg?rid="+this.props.id; 
    //   const url = "http://localhost:9000/avg?rid="+this.;
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
                            avg : contents}
                            )
            
            
            })

           
        .catch(() => console.log("Can’t access " + url + " response. "))
        console.log(this.state.avg)  
      }
    render(){
        return(
            <div style={{float:"right"}}>
               
                {this.state.avg<3? 
                    <h2><Badge color="warning"> {this.state.avg}/5</Badge></h2>:
                    <h2><Badge color="success">{this.state.avg}/5</Badge></h2>
                }
         
            </div>
             )

}


}
