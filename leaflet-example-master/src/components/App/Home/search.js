import React from "react"
import logo from "./../image/search.jpg"
import { Container, Row, Col } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import SearchImage from "./searchImage";
import SearchDetails from "../searchDetails";

class Search extends React.Component{

    constructor(props){
        super(props);
        this.onButtonClick =this.onButtonClick.bind(this)
        this.handleChange =this.handleChange.bind(this)
        this.state = {
          data : [{ }]
        }
      }
      onButtonClick() {     
          let name=this.state.search
          console.log(name);
          console.log(this.props.location.pathname)
          if(this.props.location.pathname == "/Search")
             window.location.reload()
         let path=`Search`;
         this.props.history.push({
            pathname: path,
            state: {
             name:name
            }
           });
             
      }

      handleChange(e) {
        this.setState({search: e.target.value});
     }

      
    render() {
                   
        return(
            <div> 
                    <Row >
                    <div class="col-md-3" style={{textAlign:'center'}}>
                        <select name="Places" style={{position: 'relative',width:'50%'}}>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Pune">Pune</option>
                            <option value="Mumbai">Mumbai</option>
                        </select>
                        </div>
                        <div class="col-md-6">
                        <input type="text"  name="search" placeholder="Search for restaurant and cuisine .." style={{width:'100%'}} onChange={this.handleChange}/> 
                        </div>
                        <div class="col-md-3" style={{textAlign:'center'}}>
                        <button type="submit" style={{position: 'relative',width : '50%'}} onClick={this.onButtonClick}>Submit</button>
                        </div>
                    </Row>
                    
            </div>
           
        )
    }

}

export default withRouter(Search);