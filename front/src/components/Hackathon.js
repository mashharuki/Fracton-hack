import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import Currentcontent from './Currentcontent';
import Hackathonitem from './Hackathonitem';
import Fractonicon from './Fractonicon.png';

const Hackthon = () => {
  return (
    <>
        <body className="Body">
            <div className='Second-line'>
                <Currentcontent
                content={"ハッカソン一覧"}
                />
            </div>
            <Link to='/event'>
            <Hackathonitem
            img={Fractonicon}
            name="Fracton Hackathon"
            date="1/29~2/14"
            about="The Graphやarweaveなどの分散型インフラの利用にフォーカスすることにより、dapps開発のエンジニアのオンボーディングを加速させます"
            islive="LIVE NOW"
            />
            </Link>
            <Link to='/event'>
            <Hackathonitem
            name="ETH Osaka"
            date="2/11~2/13"
            about="Ethereum エコシステムのトップマインドが大阪に集結。メンター、スポンサーの豊富なリソースで、素晴らしいものを作ることを可能にします"
            islive="LIVE NOW"
            />
            </Link>
        </body>
    </>
  );
};

export default Hackthon;