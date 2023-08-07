import React from 'react';
import TopPost from './TopPost';
import Techno from './Techno';
import Header from "../../Component/Header";
import BigTopPost from './BigTopPost';

function Techology() {
  return (
    <div>
      <Header/>
      <div className="bollywoodContainer">
        <div className="bollywooditem1">
          <h2>Techology</h2>
          <Techno/>
          <div className="arrow">
            <span id="right-arrow">&darr;</span>
            <p>Load More </p>
          </div>
        </div>
        <div className="bollywooditem2">
          <h2>Top Posts</h2>
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

export default Techology;
