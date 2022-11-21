import React from "react";

const Section = (props) => {
  return (
    <div className={`${props.bg} w-full`}>
      <div
        className={`${props.styles} container max-w-screen-xl px-5 mx-auto flex flex-wrap`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Section;
