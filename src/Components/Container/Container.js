import React, { Component } from "react";
import Image from "../Image/Image"
import "./style.css";



function Container(props) {
  return (
    <div className="position">
      {props.children}
    </div>
  );
}

export default Container;