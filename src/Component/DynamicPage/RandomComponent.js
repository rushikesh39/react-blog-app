import React from "react";
import "./dynamic.style.css";
import person from "./person.png";
import { Link } from "react-router-dom";

function RandomComponent(props) {
  const arr = props.data;
  console.log(arr);

  const random = arr[Math.floor(Math.random() * arr.length)];
  console.log(random);
  return (
    <div className="random-component">
      <p>Related Reads</p>
      <Link to="/dynamic" state={{ data: random.id }}>
        <img src={random.img} alt="Refresh" className="img" />
      </Link>
      <h2>{random.title}</h2>
      <div className="person">
        <img src={person} alt="img not found" className="person-img" />
        <div>
          <p>Rushi Thange</p>
          <p>Aug 10. 4min read</p>
        </div>
      </div>
    </div>
  );
}

export default RandomComponent;
