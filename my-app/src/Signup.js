import { React } from "react";
// import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

const Signup = () => {
    return(
        <div>

  <div className="login container mt-5">
    <div className="login-header">
      <h1 className="fw-bold">Login</h1>
    </div>
    <div className="login-form">
      <h3>Username:</h3>
      <input type="text" placeholder="Username"/>
      <h3>Password:</h3>
      <input type="password" placeholder="Password"/>

    
      <input type="button"  value="Login" className="btn btn-danger"/>
      <div class="d-grid gap-1 col-6 mx-auto mt-2">
    <button class="btn btn-success btn-round" type="button">Login</button>
  </div>
      
    </div>
    </div>
    </div>
    )
}
export default Signup