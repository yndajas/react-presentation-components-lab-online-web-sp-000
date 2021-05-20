// Code SimpleComponent Here
import React, { Component } from "react";

class SimpleComponent extends Component {
    constructor() {
        super();
        this.moods = {
            happy: "sad",
            sad: "happy"          
        }
        this.state = {
            mood: "happy"
        };
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        );
    }

    handleClick = () => {
        this.setState({mood: this.moods[this.state.mood]})
    }
}

export default SimpleComponent;