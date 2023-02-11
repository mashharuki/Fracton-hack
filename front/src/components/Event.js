import React from 'react';
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <>
      <h1>新規登録ページ</h1>
      <div>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default Event;