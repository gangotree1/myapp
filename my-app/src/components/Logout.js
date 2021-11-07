import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Logout extends Component {
    render() {
        return (
            <div className="text-center">
                <h1 >You Have Been Logged Out!!!</h1>
                <Link to="/" className="btn btn-primary">Login Again</Link>
            </div>
        )
    }
}
