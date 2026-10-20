import React from "react";

const heroText = (props) => {
  return (
    <div className="h-full w-full text-white">
      <div className="h-fit py-2 bg-black w-full flex flex-col gap-4 justify-center items-center text-[10.5vw] leading-[18vh]">
        <h1 className="text-center">{props.first}</h1>
        <h1>{props.second}</h1>
        <h1>{props.third}</h1>
      </div>
      <div className="bg-black h-fit  w-full flex justify-evenly items-end">
        <div className="font-semibold">
          <p className="text-center">
            Onscreen or in an office.
            <br />
            Here. There.
            <br />
            Anywhere.
          </p>
        </div>
        <div>
          <h1 className="text-[10.5vw] leading-[21vh]">{props.fourth}</h1>
        </div>
        <div>
          <p className="font-semibold text-center">
            525 Av. Viger O - Suite 400 <br /> Montréal, QC H2Z 1G6 →
          </p>
        </div>
      </div>
    </div>
  );
};

export default heroText;
