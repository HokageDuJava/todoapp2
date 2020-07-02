import React from "react";
import Rainbow from "./Rainbow";

const Contact = (props) => {
  setTimeout(() => {
    props.history.push("/");
  }, 8000);
  return (
    <div className="">
      <h1>Contact</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ipsum
        maiores quis vel modi, veritatis velit reiciendis obcaecati pariatur
        delectus beatae quo odio ea facere, eum adipisci rem excepturi natus.
      </p>
    </div>
  );
};

export default Rainbow(Contact);
