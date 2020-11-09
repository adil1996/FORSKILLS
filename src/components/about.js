import React, { Component } from "react";
import BackgroungImgae from "../image/crea.jpg";

export default class HomePage extends Component {
    render() {
        return (
            <div id='aboutus'>
               <div id='whyus' style={{marginTop: "8%",marginLeft: '50%', position: "absolute"}}>
               <h1 style={{color:"#F26D0F", fontSize:"50px"}}>WHO WE ARE</h1>
               <hr style={{width:"50%", color:"#F26D0F", border:"2px solid"}}/>
               <p style={{fontSize:"25px"}}> <b>A</b> bunch of young talents, well trained, currently at top notches from various disciplines, thriving to fetch larger population who are curious to upgrade themselves for sustaining a much more global tomorrow.</p>
               </div>
               <img src={BackgroungImgae} alt="Test" style={{marginTop: "5%", display: "flex", justifyContent:"right"}}/>
            </div>
        );
    }
}
