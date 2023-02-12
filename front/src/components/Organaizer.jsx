import React from 'react';
import Githubicon from './Githubicon.png'
import Twittericon from './Twittericon.png'

const Organaizer = (props) =>{
    return (
        <div>
            <p>{props.img}</p>
            <p>{props.name}</p>
            <img src={Githubicon}></img>
            <img src={Twittericon}></img>
            <p>{props.date}</p>
            <p>{props.selfintroduction}</p>
            <p>{props.picture}</p>
        </div>
    )
}

export default Organaizer;