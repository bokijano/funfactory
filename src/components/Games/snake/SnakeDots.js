import React from "react";

export default (props) => {
  return (
    <div>
      {props.dots.map((dot, i) => {
        const style = {
          left: `${dot[0]}px`,
          top: `${dot[1]}px`,
        };
        return <div className="snake" key={i} style={style}></div>;
      })}
    </div>
  );
};
