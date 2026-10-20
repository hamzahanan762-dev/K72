import React from "react";
import Navbar from "../components/common/navbar";
import Photos from "../components/projects/photos";
const projects = () => {
  return (
    <div className="h-full w-full text-black">
      <Navbar logoColor="black" />
      <div className="absolute top-[40vh] flex">
        <h1 className=" text-[13vw] font-semibold">PROJECTS</h1>
        <span className="text-[3vw] relative top-15 font-semibold">17</span>
      </div>
      <Photos />
    </div>
  );
};

export default projects;