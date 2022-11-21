import React from "react";

const GridImage = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-2 sm:h-min lg:h-full lg:mr-9">
      <div className="bg-primary box rounded-lg row-start-1 row-end-5 col-start-1 overflow-hidden ">
      <img
          className="object-cover h-full"
          src="https://images.unsplash.com/photo-1637249772031-df4717fc3f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
      </div>
      <div className="bg-primary box rounded-lg row-start-1 row-end-3 col-start-2 overflow-hidden">
      <img
          className="object-cover h-full"
          src="https://images.unsplash.com/photo-1514345840766-d839404a5d7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
        />
      </div>
      <div className="bg-primary box rounded-lg row-start-3 row-end-5 col-start-2 overflow-hidden">
      <img
          className="object-cover h-full"
          src="https://images.unsplash.com/photo-1486693128850-a77436e7ba3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </div>
      <div className="bg-primary box rounded-lg row-start-1 row-end-5 overflow-hidden">
      <img
          className="object-cover h-full"
          src="https://images.unsplash.com/photo-1602545165103-f1f9cb2b4c32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
      </div>
    </div>
  );
};

export default GridImage;
