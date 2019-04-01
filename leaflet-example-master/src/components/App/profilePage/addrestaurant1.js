import React from 'react';
// import { createBrowserHistory as createHistory } from "history";
import {withRouter} from 'react-router-dom';

import MapRender from './../../mapRender';
var body;
class addRestaurant1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
          name:'',
          city:'',
          phoneNumber: '',
          address:'',
          imageUrls:[],
          menuUrls:[]
      },
      fields:{},
      errors: {},
      file: '',
      imagePreviewUrl: '',
      menuPreviewUrl: '',
      result:'',
      img:[],
      img1:[]
    };
      this.handleChange = this.handleChange.bind(this);
      this.submitSellForm = this.submitSellForm.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
      //this.handleSubmit = this.handleSubmit.bind(this);
      this._handleImageChange = this._handleImageChange.bind(this);
      this._handleMenuImageChange = this._handleMenuImageChange.bind(this);
      this._handleMenuSubmit = this._handleMenuSubmit.bind(this);
    }

    _handleSubmit(e) {
     // e.preventDefault();
     console.log('.......'+this.state.form.imageUrls)
     body = {
      imageUrls:this.state.form.imageUrls,
     }
     console.log(body);
      console.log('handle uploading-', this.state.file);
      const url = "http://10.10.200.10:9000/images"; 
      const formdata=new FormData()
        formdata.append("file",this.state.file);
        
      let headers = new Headers();
  
          formdata.append("file",this.state.file);
  
          headers.append('Content-Type', 'multipart/form-data');
          headers.append('Accept', 'application/json');
      
          headers.append('Access-Control-Allow-Origin', url);
          headers.append('Access-Control-Allow-Credentials', 'true');
      
          headers.append('GET', 'POST');
          
          e.preventDefault();
          
          fetch(url, {
            headers: headers,
            method: 'POST',
            withCredentials:true,
            credentials:'include',
            headers:{
              'Access-Control-Allow-Origin': url
            },
            body: formdata
          })               
          .then(r=> {r.json()
            .then(response=>{console.log(response)
               this.setState ({
                 result: JSON.stringify(response.image_url)
               })
               console.log("result image:"+this.state.result.replace('\"','',))
               this.setState ({
                 result: this.state.result.replace('\"','',)
               })
               console.log("result image:"+this.state.result.replace('\"','',))
               this.setState ({
                 result: this.state.result.replace('\"','',)
               })
               if(r.status==200){
                 console.log("success")
                 this.setState(
                   {
                     img:this.state.img.concat(this.state.result)
                   })
                   console.log("img in state appending "+this.state.img)
               }
              
            })
           })
         .catch(() => console.log("Can’t access " + url + " response. "))
        
     }




     _handleMenuSubmit(e) {
      // e.preventDefault();
      console.log('.......'+this.state.form.menuUrls)
      body = {
       menuUrls:this.state.form.menuUrls,
      }
      console.log(body);
       console.log('handle uploading-', this.state.file);
       const url = "http://10.10.200.10:9000/images"; 
       const formdata=new FormData()
         formdata.append("file",this.state.file);
         
       let headers = new Headers();
   
           formdata.append("file",this.state.file);
   
           headers.append('Content-Type', 'multipart/form-data');
           headers.append('Accept', 'application/json');
       
           headers.append('Access-Control-Allow-Origin', url);
           headers.append('Access-Control-Allow-Credentials', 'true');
       
           headers.append('GET', 'POST');
           
           e.preventDefault();
           
           fetch(url, {
             headers: headers,
             method: 'POST',
             withCredentials:true,
             credentials:'include',
             headers:{
               'Access-Control-Allow-Origin': url
             },
             body: formdata
           })               
           .then(r=> {r.json()
             .then(response=>{console.log(response)
                this.setState ({
                  result: JSON.stringify(response.image_url)
                })
                console.log("result image:"+this.state.result.replace('\"','',))
                this.setState ({
                  result: this.state.result.replace('\"','',)
                })
                console.log("result image:"+this.state.result.replace('\"','',))
                this.setState ({
                  result: this.state.result.replace('\"','',)
                })
                if(r.status==200){
                  console.log("success")
                  this.setState(
                    {
                      img1:this.state.img1.concat(this.state.result)
                    })
                    console.log("img1 in state appending "+this.state.img1)
                }
               
             })
            })
          .catch(() => console.log("Can’t access " + url + " response. "))
         
      }




    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }

    _handleMenuImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          menuPreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }


  submitSellForm(e) {
    console.log("imags",this.state.img)
    console.log("imags",this.state.img1)
    let res;
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["name"] = "";
      fields["city"] = "";
      fields["address"] = ""; 
      fields["phoneNumber"] = ""; 
      fields["imageUrls"]=[];
      fields["menuUrls"]=[]
      this.setState({fields:fields});
      let store = this.state;
      store.form.name = this.state.fields["name"];
      store.form.location = this.state.fields["city"];
      store.form.address = this.state.fields["address"];
      store.form.phoneNumber = this.state.fields["phoneNumber"];
     console.log('img........'+this.state.img);
      store.form.imageUrls=this.state.img;
      store.form.menuUrls=this.state.img1;
     
     // console.log(imageUrls);
      this.setState(store);
      console.log("Form name"+this.state.form.name);
      console.log("Form location"+this.state.form.city);
      console.log("Form address"+this.state.form.address);
      console.log("Form ranking"+this.state.form.phoneNumber);
      console.log("Form imgurl"+this.state.form.menuUrls);
      console.log("Form imgurl"+this.state.form.imageUrls);
    }
    let token = localStorage.getItem("AccessToken");
    const url = "http://10.10.200.10:9000/restaurants";
    console.log('token '+token);
    const AuthStr = 'Bearer '.concat(token);
    let headers = new Headers();
  
    //console.log(body);
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', AuthStr);
    console.log(AuthStr);
    headers.append('Access-Control-Allow-Origin', url);
    headers.append('Access-Control-Allow-Credentials', 'true');
  
    headers.append( 'GET','POST');
    console.log(url);
    body = {
      name: this.state.fields.name,
      workinghrs : this.state.fields.city,
      address:this.state.fields.address,
      phno:this.state.fields.phoneNumber,
      imageUrls:this.state.form.imageUrls,
      menuUrls:this.state.form.menuUrls
    }
   
    console.log(body);
    console.log(token);
    e.preventDefault();
    fetch(url, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify(body),
        withCredentials:true,
                credentials:'include',
                headers:{
                    'Authorization': 'Bearer ' + token,
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': url
                },
       
    })
    
  //.then(console.log(this.state.fields))
 .catch(() => console.log("Can’t access " + url + " response. "))

          alert("Form submitted");
      }
      validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        if (!fields["name"]) {
          formIsValid = false;
          errors["name"] = "*Please enter your Restaurant Name.";
        }
        if (!fields["city"]) {
          formIsValid = false;
          errors["city"] = "*Please enter the working hrs.";
        }
        if (!fields["address"]) {
          formIsValid = false;
          errors["address"] = "*Please enter the address.";
        }
        if (!fields["phoneNumber"]) {
          formIsValid = false;
          errors["phoneNumber"] = "*Please enter the phoneNumber.";
        }
        this.setState({
          errors: errors
        });
        return formIsValid;
      }
  

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img style={{width:"20%",height:"20%"}} src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
const { form} = this.state;
    return (
      <div>
      
      <div class ="container">
      <div class="card">
        <div class="card-body px-lg-6 pt-0" >
        <h3 className="my-3"> Add Restaurant </h3>
        <form method="post"  name="sellForm"  onSubmit= {this.submitSellForm} >
   <div class="md-form">
   <label for="inputIconEx1">Restaurant Name</label>
   <input type="text" id="inputIconEx1" class="form-control" name="name" placeholder="Enter Restaurant Name "  value={this.state.fields.name} onChange={this.handleChange} />
   <div className="errorMsg">{this.state.errors.name}</div>
  </div>
   <div class="md-form">
   <label for="inputIconEx2">working hrs</label>
   <input type="text" id="inputIconEx2" class="form-control" name="city" placeholder="Enter working hrs"  value={this.state.fields.city} onChange={this.handleChange} />
   <div className="errorMsg">{this.state.errors.city}</div>
  </div>
   <div class="md-form">
   <label for="inputIconEx3">address</label>
   <input type="text" id="inputIconEx1" class="form-control" name="address" placeholder="Enter address of the restaurant"  value={this.state.fields.address} onChange={this.handleChange} />
   <div className="errorMsg">{this.state.errors.address}</div>
   </div>
   <div className="md-form">
   <MapRender/>
   </div>
   <div class="md-form">
   <label for="inputIconEx4">phoneNumber</label>
   <input type="text" id="inputIconEx4" class="form-control" name="phoneNumber" placeholder="Enter phone number"  value={this.state.fields.phoneNumber} onChange={this.handleChange} />
   <div className="errorMsg">{this.state.errors.phoneNumber}</div>
   </div><br/><br/>
   <div class="md-form">
   <label for="inputIconEx5">Upload image</label>
   <input className="fileInput" type="file" name="imageUrls" onChange={(e)=>this._handleImageChange(e)} /><br></br>
                <div className="imgPreview" ><br></br>
                  {$imagePreview  }
                </div><br></br>
               <button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button><br></br>
</div>
<br></br>
<div class="md-form">
   <label for="inputIconEx5">Upload Menu</label>
   <input className="fileInput" type="file" name="menuUrls" onChange={(e)=>this._handleMenuImageChange(e)} /><br></br>
                <div className="imgPreview" ><br></br>
                  {$imagePreview  }
                </div><br></br>
               <button className="submitButton" type="submit" onClick={(e)=>this._handleMenuSubmit(e)}>Upload Menu</button><br></br>
</div>
   
   <button class="btn btn-info btn-block my-4"  type="submit">Submit</button>   
   </form>
   </div>
   </div>
   </div>
  
      </div>
      );
    }
  }
  export default withRouter(addRestaurant1);