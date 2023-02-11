import React from 'react';
const Hackathon = (props) =>{
    return (
        <div>
            <img src={props.img}/>  
            <p>{props.name}</p>
            <p>{props.date}</p>
            <p>{props.about}</p>
            <p>{props.islive}</p>
        </div>
    )
}

export default Hackathon;