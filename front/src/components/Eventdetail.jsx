import React from 'react';
import Timeicon from './Timeicon.png'
import Participantsicon from './Participantsicon.png'

const Eventdetail = (props) =>{
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.requirements}</p>
            <img src={Timeicon}></img>
            <img src={Participantsicon}></img>
            <p>{props.date}</p>
            <p>{props.participants}人</p>
            <p>{props.joinorreserve}</p>
            <p>{props.detail}</p>
        </div>
    )
}

export default Eventdetail;