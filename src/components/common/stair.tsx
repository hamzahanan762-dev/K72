import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

const stair = (props) => {
  const app = useRef(null);
  const stairref = useRef(null);
  let currentPath = useLocation().pathname;
  useGSAP(
    function () {
      let t1 = gsap.timeline();
      t1.to(stairref.current, {
        display: "block",
      });
      t1.from(
        ".stair",
        {
          height: 0,
          stagger: {
            amount: 0.3,
            from: "end",
          },
        },
        "-=0.55",
      ).to(".stair", {
        yPercent: 150,
        stagger: {
          amount: 0.6,
        },
      });
      t1.to(stairref.current, {
        display: "none",
      });
      t1.to(".stair", {
        yPercent: 0,
      });
      gsap.from(app.current, {
        delay: 1.2,
        opacity: 0,
        ease: "power3.out",
        duration: 1,
      });
    },
    [currentPath],
  );
  console.log(props.children);
  return (
    <div>
      <div ref={stairref} className="h-full w-full fixed top-0 z-30  ">
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/7 bg-black"></div>
          <div className="stair h-full w-1/7 bg-black"></div>
          <div className="stair h-full w-1/7 bg-black"></div>
          <div className="stair h-full w-1/7 bg-black"></div>
          <div className="stair h-full w-1/7 bg-black"></div>
          <div className="stair h-full w-1/7 bg-black"></div>
          <div className="stair h-full w-1/7 bg-black"></div>
        </div>
      </div>
      <div className="h-full w-full " ref={app}>
        {props.children}
      </div>
    </div>
  );
};

export default stair;
