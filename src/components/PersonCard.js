import React, { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ageNow: this.props.age
        };
    }
    render() {
        return(
        <div>
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <p>Age: {this.state.ageNow}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            <button onClick={() => this.setState({ageNow: this.state.ageNow + 1})}>{this.props.firstName}'s Birthday!</button>
        </div>
        )
    }
}

export default PersonCard;