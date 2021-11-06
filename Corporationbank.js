import React, { Component } from 'react'

export default class Corporationbank extends Component {
    render() {
        return (
            <div>
                <h1>Corporation Bank is located at {this.props.location} with name of {this.props.data.name1}</h1>
            </div>
        )
    }
}
