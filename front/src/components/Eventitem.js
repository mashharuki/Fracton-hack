import React from 'react';
import Timeicon from './Timeicon.png'
import Participantsicon from './Participantsicon.png'

const Eventitem = (props) =>{
    return (
        <div>
            <p>{props.title}</p>
            <img src={props.img}/>  
            <p>{props.organaizer}</p>
            <p>募 : {props.requirements}</p>
            <img src={Timeicon}></img>
            <p>{props.starttime}~</p>
            <p>{props.finishtime}</p>
            <img src={Participantsicon}></img>
            <p>{props.participants}人</p>
            <p>{props.about}</p>
            <p>詳細</p>
            <p>{props.joinorreserve}</p>
        </div>
    )
}

export default Eventitem;

