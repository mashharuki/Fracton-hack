import { Link } from "react-router-dom";
import React from 'react';
import logo from '../HackStormlogo.png';
// import connectwalletbutton from './ConnectWalletButton.png';
import '../App.css';
import Applogo from './Applogo';
import Connectwalletbutton from './Connectwalletbutton';
import Currentcontent from './Currentcontent';
import Hackathonitem from './Hackathonitem';

const Hackthon = () => {
  return (
    <>
        {/* <Applogo 
          img={logo}
        /> */}
        <Connectwalletbutton
          // img={connectwalletbutton}
        />

        <body className="Body">
            <div className='Second-line'>
                <Currentcontent
                content={"ハッカソン一覧"}
                />
            </div>
            <Hackathonitem
            name="Fracton"
            date="1/29~2/14"
            about="The Graphやarweaveなどの分散型インフラの利用にフォーカスすることにより、dapps開発のエンジニアのオンボーディングを加速させます"
            islive="LIVE NOW"
            />
            <Hackathonitem
            name="ETH Osaka"
            date="2/11~2/13"
            about="Ethereum エコシステムのトップマインドが大阪に集結。メンター、スポンサーの豊富なリソースで、素晴らしいものを作ることを可能にします"
            islive="LIVE NOW"
            />
            <div>
              とぶ<Link to={'/event/'}>こちら</Link>
            </div>
        </body>
    </>
  );
};

export default Hackthon;