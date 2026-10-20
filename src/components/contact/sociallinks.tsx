import React from "react";

const sociallinks = () => {
  return (
    <div className="h-[50vh] -mt-10 bg-black flex flex-col gap-6 items-center">
      <h1 className="text-[1.5vw] font-semibold">FOLLOW US</h1>
      <div className="flex">
        {["fb", "ig", "in", "be"].map((val, idx) => {
          return (
            <div
              key={idx}
              className="h-15 w-30 border-white border-2 rounded-full flex justify-center items-center text-[5vw] font-semibold uppercase"
            >
              {val}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default sociallinks;
