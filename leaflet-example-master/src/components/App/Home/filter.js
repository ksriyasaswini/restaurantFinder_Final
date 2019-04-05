import React from 'react';
import {Form, FormGroup, Label, Input,Button} from 'reactstrap'
import Range from './Range';
import {withRouter} from 'react-router-dom';
import {Card} from 'reactstrap';

let i=0;
var body;
var cus=[];
 class filters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
           type: "",
           rangeVal:0,
           Cuisines:[],
           sort:"",
           open:""

        }
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handlecuisineChange = this.handlecuisineChange.bind(this);
        this.handlesortChange = this.handlesortChange.bind(this);
        this.filter = this.filter.bind(this);
        this.unCheckIt = this.unCheckIt.bind(this);
      
        this.updateRange = this.updateRange.bind(this);
    }

    handlesortChange(e) {
        if(this.state.checked !== e.target.checked) {
        let sort=e.target.value
        this.setState({
        checked:e.target.checked,
        sort: sort,
        });
        }
        
        }

unCheckIt(e) {
    e.preventDefault();
    this.setState({
    checked:false
    });
    }


      filter(e) {
    body={
        type: this.state.type,
        cost:this.state.rangeVal,
        cuisines:cus,
        sort:this.state.sort,
        open:this.state.open
        }
        console.log(body)
        if(this.props.location.pathname == "/Filters")
        window.location.reload()
        let path=`Filters`;
         this.props.history.push({
            pathname: path,
            state: {
             body:body
            }
           });
      }
      updateRange(val) {
        this.setState({
          rangeVal: val
        })
      } 
     handleTypeChange(e) {
         let type=e.target.value
         this.setState({type:type})
     }
     
     
     handleTimeChange(e) {
        let open=e.target.value
         this.setState({open :open})
     }

     handlecuisineChange(e) {
        console.log("change")
  
        cus[i++]=(e.target.value)
        console.log(cus)
        // this.state.Cuisines[e.target.value]= !this.state.Cuisines[e.target.value];
        // console.log("cuisines:"+e.target.value+"="+this.state.Cuisines[e.target.value])
     }

     
    render () {
        const { rangeVal } = this.state;
        console.log(this.state.type);
        console.log(this.state.cost);
        console.log(this.state.open);
        console.log(this.state.Cuisines);
        console.log(this.state.sort);
        console.log(this.state.rangeVal);
        return (
            <Card style={{backgroundColor:"#f2f2f3", padding:"20px"}}>
                   
              <Form style={{width:"100%"}}>
                <legend>Cuisines </legend>
                <FormGroup onChange = {this.handlecuisineChange} check>
                    <Label check>
                        <Input type = "checkbox" name="cuisines" value="Italian" /> Italian 
                    </Label>
                <br></br>
                    <Label check>
                        <Input type = "checkbox" name="cuisines" value="Thai" /> Thai
                    </Label>
                    <br></br>
                    <Label check>
                        <Input type = "checkbox" name="cuisines" value="SouthIndian" /> SouthIndian
                    </Label>
                    <br></br>
                    <Label check>
                        <Input type = "checkbox" name="cuisines" value="NorthIndian" /> NorthIndian
                    </Label>
                    <br></br>
                    <Label check>
                        <Input type = "checkbox" name="cuisines" value="Chinese" /> Chinese
                    </Label>
                </FormGroup>
                <legend>Cost </legend>
                                       
                    <Range range={rangeVal} updateRange={this.updateRange}/>
                   
                   
                {/* <FormGroup onChange = {this.handleCostChange}check>
                    <Label check>
                        <Input type = "checkbox"  name="cost" value="500-1000"/> 500-1000
                    </Label>
               <br></br>
                    <Label check>
                        <Input type = "checkbox" name="cost" value="300-500"/> 350-500
                    </Label>
                    <br></br>
                    <Label check>
                        <Input type = "checkbox" name="cost" value="250-350"/> 250-350
                    </Label>
                    <br></br>
                    <Label check>
                        <Input type = "checkbox" name="cost" value="<250"/> less than 250
                    </Label>
                </FormGroup> */}
                                 
                <legend>More Filters</legend>
                <FormGroup onChange = {this.handleTypeChange} check>
                    <Label check>
                    <Input type="radio" name="type" value="Veg Only" />{' '}
                    Veg Only
                    </Label>
                    <br></br>
                    <Label check>
                    <Input type="radio" name="type" value=" Veg/Non-Veg" />{' '}
                    Veg / Non-Veg
                    </Label>
                </FormGroup>
                    
                
                <legend>Open/close</legend>
        
                <FormGroup onChange = {this.handleTimeChange} check> 
                    <Label check>
                    <Input type="radio" name="time" value ="Open only" />{' '}
                    Open only
                    </Label>
                    <br></br>
                    <Label check>
                    <Input type="radio" name="time" value= "Open or close" />{' '}
                    Open or close
                    </Label>
                </FormGroup>                
                <legend>Sort  </legend> 

                <FormGroup onChange = {this.handlesortChange} check>
                    <Label check>
                    <Input type="radio" name="sort" value="1" />{' '}
                    By Ratings-high to low
                    </Label>
                
              <br></br>
                    <Label check>
                    <Input type="radio" name="sort" value="2" />{' '}
                    By cost- high to low 
                    </Label>
               <br></br>
                    <Label check>
                    <Input type="radio" name="sort" value="3" />{' '}
                    By cost- low to high 
                    </Label>
                </FormGroup>  
                <br></br>
               
               <Button onClick={this.filter}>Filter</Button>
                                         
             </Form>
             </Card>
        );
    }
}

export default withRouter(filters);