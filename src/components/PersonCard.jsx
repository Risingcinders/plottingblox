import React, { Component } from 'react'
import './styles.modules.css';


const PersonCard = props => {
    const {age, hairColor} = props;
    return(
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            {/* <button onClick= { () => this.setState( {age : (this.state.age+1)}) }>Add one to age!</button> */}
        </div>
    )
}



export default PersonCard