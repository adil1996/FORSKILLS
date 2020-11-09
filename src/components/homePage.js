import React, { Component } from "react";
import BackgroungImgae from "../image/ed.jpg";

export default class HomePage extends Component {
    render() {
        return (

            <div id = "Parent">
                <div id = "Home">
                    <img src={BackgroungImgae} alt="Test" style={{marginTop: "8%", marginBottom: "4%"}}/>
                </div>
            
            <p style={{width: "100%"}}> _______________________________________________________________________________________________________________________________________________________________________________</p>
            <div id = "Contact">
            <form className="auth-inner">
                <h3>Contact US</h3>

                <div className="form-group">
                    <label>First name:</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name:</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address:</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="text" className="form-control" placeholder="Enter mobile number" />
                </div>

                <div className="form-group">
                    <label>Comment:</label>
                    <textarea className="form-control" placeholder="Type Your Message Here ....." />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                
            </form>
            </div>
            </div>

            
        );
    }
}
