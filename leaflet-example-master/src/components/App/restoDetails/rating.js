import React from "react"

import styles from './rating.css'
import { Button, Card, CardText, CardBody } from "react-bootstrap";

var body;
export default class rating extends React.Component {

    constructor(props){
        super(props);
        this.handleRatings =this.handleRatings.bind(this)
        this.handleChanges = this.handleChanges.bind(this)
        this.handleReviews = this.handleReviews.bind(this)
        this.state = {
          data : [],
          id:"",
        }
      }

      componentDidMount() {
        //const url = "http://10.10.200.12:9000/foods"; 
        const url = "http://10.10.200.10:9000/review/rating?rid="+this.props.id; 
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
       
    handleRatings(e) {
        this.setState({ratings: e.target.value});
        console.log(e.target.value)
     }

     handleReviews(e) {
         this.setState({reviews: e.target.value});
     }

     handleChanges() {
         let ratings = this.state.ratings
         let reviews = this.state.reviews
         if(localStorage.getItem("AccessToken")== null)
            alert("Please Login to Review")
            else {
         body = {
             restaurant_Id : this.props.id,
             user_id : localStorage.getItem("AccessToken"),
             review : reviews,
             rating : ratings
         }
        }
         console.log(ratings)
         console.log(reviews)
         console.log(body)

         const url = "http://localhost:9000/review/create";
      
      console.log(url)
  
      let headers = new Headers();
   
      headers.append('Content-Type','application/json');
      headers.append('Accept','application/json');
   
      headers.append('Access-Control-Allow-origin',url);
     
      headers.append('Access-Control-Allow-Credentials','true');
   
      headers.append('PUT','POST');
      console.log(body)
      fetch(url, {
              headers:headers,
              method: 'POST',
              body: JSON.stringify(body)
            })
            .then(response => response.json())
            .then(contents => {console.log(contents);
                              
        })
            .catch((err)=> console.log(err))

     }

       render() {
        return(
                <Card>
            <div>
        
        <fieldset class="rating" onChange={this.handleRatings}>
       
                <legend>Please rate:</legend>
                <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label>
                <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label>
                <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label>
                <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label>
                <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time">1 star</label>
               
        </fieldset>
        <br/>
        <div style={{marginTop:'100px',marginLeft:'0px'}}>

        <textarea rows="4" cols="50" placeholder="please enter your review" onChange= {this.handleReviews} >

        </textarea>
        <br/>
        <Button onClick={this.handleChanges}> Submit</Button>
        </div>
        <label>Reviews</label>
       <> {this.state.data.map((ReviewsDetails,index) =>{
               console.log(ReviewsDetails)
               return(
                       <Card>
                            
                                   <>{ReviewsDetails.review}</>
  
                        </Card>
               )
       })}

       </>
        </div>
        </Card>

        );
    }
}
