import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default class Admin extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center text-success">Login Successful</h1>
              <div className="text-center">
                <Link to="/Logout"className="btn btn-danger">Logout</Link>
                </div>
            </div>
        )
    }
}
