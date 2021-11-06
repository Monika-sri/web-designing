import React from 'react'

export default function Andhrabank(props) {
    return (
        <div>
            <h1>Andhra Bank is located at {props.location} with Account Name of {props.data.name} and age {props.data.age} </h1>
        </div>
    )
}
