import React from 'react';
import { Link } from "react-router-dom";
import Date from './Date';
import Eventdetail from './Eventdetail';
import Organaizer from './Organaizer';

const Zk = () => {
  return (
    <>
      <Date
        date="2月10日（月）"
        />
        <Eventdetail
        title="zk使うDAOツール"
        requirements="フロント　セキュリティ"
        date="2/10 (月)19:00~20:00"
        participants="7"
        joinorreserve="今すぐ参加"
        detail="DAOの共同資産を安全に運用するためのマルチシグ。ゼロ知識証明（plonky2）を使うことで、資産を管理しているEOAアドレスを秘匿化し、秘密鍵を奪う攻撃者から守る。マルチシグの管理画面のフロントをデザインから実装までやってくれる方を探してます！また、アクセス制御が徹底されたセキュアなデータベースを組める方とお話したいです。"
        />
      <Organaizer
        img=""
        name="zkyuki.eth"
        date="10日(月)19:00~20:00"
        selfintroduction="C++で組み込み系エンジニアを2年。Coolgirl NFTの開発を少し手伝っていました。今はゼロ知識証明を使ったアプリを作ってます。趣味はロードバイク。C++/Rust/solidity"
        pictures=""
      />
    </>
  );
};

export default Zk;