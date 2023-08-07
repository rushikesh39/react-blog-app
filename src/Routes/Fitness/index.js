import React from 'react'
import Fit from './Fit';
import TopPost from './TopPost';
import Header from "../../Component/Header";
import BigTopPost from './BigTopPost';

function Fitness() {
  return (
    <>
    <Header/>
      <div className="bollywoodContainer">
        <div className="bollywooditem1">
          <h2>Fitness</h2>
          <Fit/>
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
    </>
  )
}

export default Fitness
