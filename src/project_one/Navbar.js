import React from "react";
import "./main.css";

function Navbar() {
  const listItem = ["Home", "About", "Contact Us"];
  return (
    <div className="nav">
      <div className="content">
        <h3>React Meals</h3>
        <ul>
          {listItem.map((item, i) => (
            <li key={i}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
