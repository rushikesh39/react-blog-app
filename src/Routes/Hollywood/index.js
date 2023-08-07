import React from 'react';
import Films from './Films';
import TopPost from './TopPost';
import Header from "../../Component/Header";
import BigTopPost from './BigTopPost';

function Hollywood() {
  return (
    <div>
      <Header/>
      <div className="bollywoodContainer">
        <div className="bollywooditem1">
          <h2>Hollywood</h2>
          <Films/>
          <div className="arrow">
            <span id="right-arrow">&darr;</span>
            <p>Load More </p>
          </div>
        </div>
        <div className="bollywooditem2">
        <h2>TopPost</h2>
          <BigTopPost/>
          <div className="bollyitem">
            <TopPost />
          </div>
          <div className="Advertistement">
            <h3>Advertistement</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hollywood
