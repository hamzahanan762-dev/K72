import React from "react";

const about = () => {
  return (
    <div className="h-fit w-full  lg:mt-[30vh] md:[10vh]  py-[10vh]  px-[10vw] relative">
      <div className="lg:w-[30vw] w-[80vw] md:w-[60vw] h-fit  flex justify-between lg:text-xl text-2xl font-semibold">
        <h2>Expertise</h2>
        <h2 className="">
          Strategy
          <br />
          Advertising
          <br />
          Branding
          <br />
          Design
          <br />
          Content
        </h2>
      </div>
      <div className="h-fit w-full  lg:mt-[30vh] md:mt-6 mt-[15vh] ml-[5vw] flex justify-evenly gap-[3.5vw] text-[4vw] md:text-[2vw] lg:text-[1.5vw] font-semibold">
        <div>
          <h1>
            Our Work_ Born in curiosity, raised by dedication and fed with a
            steady diet of creativity.
          </h1>
        </div>
        <div>
          <h1>
            Our Creative_ Simmering in an environment where talent can come to a
            full boil. Encouraged to become the best versions of ourselves.
          </h1>
        </div>
        <div>
          <h1>
            Our Culture_ We're open to each other. Period. The team works
            together to create a space that makes us proud.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default about;
