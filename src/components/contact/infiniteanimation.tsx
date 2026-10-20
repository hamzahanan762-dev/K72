import React, { useEffect, useRef, useState } from "react";
import { RiPokerHeartsFill } from "@remixicon/react";

const infiniteanimation = () => {
  const [wanim, setWanim] = useState(false);
  const scroll = useRef(0);
  const [rotate, setrotate] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      let current = window.scrollY;
      if (current > scroll.current) {
        setrotate(true);
      } else {
        setrotate(false);
      }
      scroll.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="h-[80vh] w-full bg-black py-40 overflow-hidden">
      <div
        onMouseEnter={() => {
          setWanim(true);
        }}
        onMouseLeave={() => {
          setWanim(false);
        }}
        className={` relative w-full cursor-pointer ${rotate ? "rotate-355" : "rotate-5"} `}
      >
        <div
          onMouseEnter={() => {
            setWanim(true);
          }}
          onMouseLeave={() => {
            setWanim(false);
          }}
          className=" h-[25vh] w-full relative bg-yellow-300 text-black flex items-center gap-5 overflow-hidden"
        >
          <div className="flex items-center relative z-300">
            <div className="flex infianim items-center">
              <h1 className="text-[23vh] font-semibold">HELLO@K72.CA</h1>
              <div>
                <RiPokerHeartsFill size={120} />
              </div>
            </div>
            <div className=" flex infianim items-center">
              <h1 className="text-[23vh] font-semibold">HELLO@K72.CA</h1>
              <div>
                <RiPokerHeartsFill size={120} />
              </div>
            </div>
            <div className="flex infianim items-center">
              <h1 className="text-[23vh] font-semibold">HELLO@K72.CA</h1>
              <div>
                <RiPokerHeartsFill size={120} />
              </div>
            </div>
            <div className=" flex infianim items-center">
              <h1 className="text-[23vh] font-semibold">HELLO@K72.CA</h1>
              <div>
                <RiPokerHeartsFill size={120} />
              </div>
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setWanim(true);
          }}
          onMouseLeave={() => {
            setWanim(false);
          }}
          className={` origin-bottom h-[25vh] scale-y-0 w-full absolute top-0 bg-white text-black flex items-center gap-5 overflow-hidden ${wanim ? "scale-y-100" : "scale-y-0"} transition-all ease-in-out duration-200`}
        ></div>
      </div>
    </div>
  );
};

export default infiniteanimation;
