import React from 'react';
import { Link } from "react-router-dom";
import Date from './Date';
import Eventitem from './Eventitem';

import iharidiy from './iharidiy.png';
import zkyuki from './zkyuki.png';



const Event = () => {
  return (
    <>
      <Date
        date="2月10日（月）"
        />
      <Link to={'/event/zk'}>
        <Eventitem
        title="AA興味ある人!"
        img={iharidiy}
        organaize="iharidiy.eth"
        requirements="フロント　デザイナー"
        starttime="19:00"
        finishtime="20:00"
        participants="7"
        about="事前に分割したロールごとにtransfer可能な金額を分配できる、ERC4337に準拠したコントラクトウォレット。"
        joinorreserve="今すぐ参加"
        />
      </Link>
      <Link to={'/'}>
        <Eventitem
        title="zk使うDAOツール"
        img={zkyuki}
        organaize="zkyuki.eth"
        requirements="スマコン　セキュリティ"
        starttime="19:00"
        finishtime="20:00"
        participants="3"
        about="DAOの共同資産を安全に運用するためのマルチシグ。ゼロ知識証明で、資産を管理しているEOAアドレスを秘匿化"
        joinorreserve="今すぐ参加"
        />
      </Link>
      <Date
        date="2月11日（火）"
        />
      <Link to={'/'}>
        <Eventitem
        title="zk使うDAOツール"
        img={zkyuki}
        organaize="zkyuki.eth"
        requirements="スマコン・セキュリティ"
        time="19:00~20:00"
        participants="3人"
        about="DAOの共同資産を安全に運用するためのマルチシグ。ゼロ知識証明で、資産を管理しているEOAアドレスを秘匿化"
        detail="詳細"
        joinorreserve="今すぐ参加"
        ></Eventitem>
      </Link> 
    </>
  );
};

export default Event;