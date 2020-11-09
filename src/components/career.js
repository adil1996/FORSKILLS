import React, { Component } from "react";
import BackgroungImgae from "../image/ed.jpg";

export default class HomePage extends Component {
    render() {
        return (
            <img src={BackgroungImgae} alt="Test" style={{marginTop: "8%"}}/>
        );
    }
}
