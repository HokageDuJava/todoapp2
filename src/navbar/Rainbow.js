import React from "react";

const Rainbow = (WrappedComponent) => {
  const colors = [
    "red",
    "yellow",
    "blue",
    "green",
    "brown",
    "black",
    "purple",
    "pink",
  ];
  const randomColor = colors[Math.floor(Math.random() * 8)];
  const colorClass = randomColor + "-text";

  return (props) => {
    return (
      <div className={colorClass}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
