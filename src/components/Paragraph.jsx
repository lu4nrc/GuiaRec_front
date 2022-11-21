import React from "react";

const Paragraph = (props) => {
  return (
    <p className={`${props.styles} text-slate-900 font-normal text-lg md:text-xl leading-7`}>
      {props.children}
    </p>
  );
};

export default Paragraph;
