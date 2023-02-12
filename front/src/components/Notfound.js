import React from 'react';
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <h1>Notfound</h1>
      <div>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default Notfound;