import React from "react"
import image1 from "../image/image1.jpeg"
import image2 from "../image/image2.jpeg"
import {Image} from "react-bootstrap"



class Review extends React.Component {
       render() {
        return(

            <div style={{marginTop:'100px',marginLeft:'0px'}}>
            <textarea rows="4" cols="50" placeholder="please enter your review" >
          
            </textarea>
            
            </div>
            )
    }
}

export default Review;