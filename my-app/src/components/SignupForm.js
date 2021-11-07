import React, { Component, useHistory, useState, seterrors, validation, errors, Redirect, handleFormSubmit } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../style.css"
// import { Redirect } from 'react-router-dom';
import "./Error";
import "./SignupForm";

export default class SignupForm extends Component {
  constructor(props){
      super(props)
      let signUp =falsen
      this.state={
          fullname:'',
          email:'',
          password:'',
          signUp
      }
      
      this.onChange=this.onChange.bind(this)
      this.submitForm=this.submitForm.bind(this)
  }
  
  onChange(e){
      this.setState({
          [e.target.name]:e.target.value
      })
  }

  submitForm(e){
      e.preventDefault()
      const{fullname, email, password}=this.state
      if (fullname==="myname" && email==="myname@gmail.com" && password==="pass") {
          this.setState({
              signUp:true
          })
      }else{
          this.setState({
              signUp:false,
              message: "Wrong Email & Password!!!"
          })
            
      }
  }
  
  render() {
      if (this.state.signUp) {
          return <Redirect to="/Admin"/>
      }

      let error='';
      if (this.state.message) {
          error=(
              <div className="alert alert-danger" role="alert">{this.state.message}</div>
          )
          
      }

  return(
    <div className="login container mt-5">
      <div className="login-header">
        <div>
            <h2 className="fw-bold">Create Account</h2>
        </div>
        <form>
            <h3>Full Name:</h3>
            <input type="text" 
           placeholder="Your Full Name" 
            name="fullname" 
            value={this.state.fullname} 
            onChange={this.onChange}/>

            {errors.fullname && <p className="error">{errors.fullname}</p>}   

            <h3>Email:</h3>
            <input type="email" 
             placeholder="Email" 
             name="email" 
             value={this.state.email} 
             onChange={this.onChange}/>

            {errors.email && <p className="error">{errors.email}</p>}  

            <h3>Password:</h3>
            <input type="password" 
             placeholder="Password" 
            name="password" 
            value={this.state.password} 
            onChange={this.onChange}/>
              
            {errors.password && <p className="error">{errors.password}</p>}   

            <input type="submit"/> 

        </form>
      </div>
    </div>
    ); 
  };

};