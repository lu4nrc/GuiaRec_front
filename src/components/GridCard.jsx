import React from "react";
import arrowRight from "../assets/arrowRight.svg";
import Button from "./Button";

const GridCard = (props) => {
  return (
    <div className="w-full bg-slate-200 rounded-3xl rotate-2 h-full p-2 shadow-md">
      <div className="flex flex-col items-center bg-white rounded-2xl -rotate-2  h-full px-5 py-5">
        {/* <div className="w-16 h-16 bg-primary rounded-full mb-5"></div> */}
        <h2 className="font-black text-4xl pb-4">{props.title}</h2>
        <p className="mb-5 font-medium text-slate-900">{props.sub}</p>
        <div className="absolute bottom-2 right-2">
          <Button type="none" icon="arrowRight" />
        </div>
      </div>
    </div>
  );
};

export default GridCard;
