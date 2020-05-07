import React from "react";

import { FaAngleDown } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

export default (props) => {
  return (
    <section className="arrows">
      <button
        onClick={() => props.moveSnake("UP")}
        style={{ marginBottom: "-10px" }}
      >
        <FaAngleUp className="up" />
      </button>
      <div>
        <button onClick={() => props.moveSnake("LEFT")}>
          <FaAngleLeft className="left" />
        </button>
        <button onClick={() => props.moveSnake("RIGHT")}>
          <FaAngleRight className="right" />
        </button>
      </div>
      <button
        onClick={() => props.moveSnake("DOWN")}
        style={{ marginTop: "-15px" }}
      >
        <FaAngleDown className="down" />
      </button>
    </section>
  );
};
