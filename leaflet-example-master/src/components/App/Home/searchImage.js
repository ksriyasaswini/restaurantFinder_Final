import React from "react"
import image1 from "../image/bg.jpg"
import {Image} from "react-bootstrap"


class SearchImage extends React.Component {
       render() {
        return(
            
            
            <Image   src={image1} style={{width:'100%',height:'300px'}}fluid/>
                
            
            
            )
    }
}

export default SearchImage;