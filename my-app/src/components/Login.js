import React, { Component, signUpForm, redirectToSignUpForm } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../style.css"
import { Redirect, useHistory, withRouter } from 'react-router-dom';
import "./Error";
import "./SignupForm";

export default class Login extends Component {
    

        redirectToSignUpForm = () => {
            const { history } = this.props;
            if(history) history.push('/signupform');
        }
         

    constructor(props){
        super(props)
        let loggedIn=false
        this.state={
            username:'',
            password:'',
            loggedIn
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
        const{username,password}=this.state
        if (username==="admin" && password==="pass") {
            this.setState({
                loggedIn:true
            })
        }else{
            this.setState({
                loggedIn: false,
                message: "Wrong Email & Password!!!"
            })
              
        }
    }
    
    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/Admin"/>
        }

        let error='';
        if (this.state.message) {
            error=(
                <div className="alert alert-danger" role="alert">{this.state.message}</div>
            )
            
        }
         
        // const Login = () => {
        //     let history = useHistory();
    
        // const SignupForm = () =>{
        //       history.push("/signupform");
        //     };
        // };

        return (
            
        <div className="login container mt-5">
            
        <div className="login-header">
            <h1 className="fw-bold">Login</h1>
        </div>
        
        <div className="login-form">
        {error}
            <form onSubmit={this.submitForm}>

                <h3>Username:</h3>
                <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.onChange}/>
                
                <h3>Password:</h3>

                <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                
                <input type="submit"/> 
                
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                <button type="primary" htmlType="signupform" onClick={this.redirectToSignUpForm}> Signup</button>
                 
            
            </form>
        </div>
    </div>
      );
    };
};
