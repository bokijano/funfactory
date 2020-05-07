import React from "react";

export default (props) => {
  const style = {
    left: `${props.dot[0]}px`,
    top: `${props.dot[1]}px`,
  };

  return <div className="food" style={style}></div>;
};
