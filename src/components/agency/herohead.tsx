import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import Image1 from "../../../public/image1.png";
import Image2 from "../../../public/image2.png";
import Image3 from "../../../public/image3.png";
import Image4 from "../../../public/image4.png";
import Image5 from "../../../public/image5.png";
import Image6 from "../../../public/image6.png";
import Image7 from "../../../public/image7.png";
import Image8 from "../../../public/image8.png";
import HeroBottomText from "./heroBottomText";
import About from "./about";
const images = [
  `${Image1}`,
  `${Image2}`,
  `${Image3}`,
  `${Image4}`,
  `${Image5}`,
  `${Image6}`,
  `${Image7}`,
  `${Image8}`,
];
gsap.registerPlugin(ScrollTrigger);

const herohead = () => {
  const imageref = useRef(null);
  const currimg = useRef(null);
  const parent = useRef(null);
  useGSAP(function () {
    gsap.to(parent.current, {
      scrollTrigger: {
        trigger: imageref.current,
        start: "top 20%",
        end: "top -200%",
        pin: true,
        pinType: "transform",
        pinSpacing: true,
        pinReparent: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        scrub: 1,
        onUpdate: (elem) => {
          let currentimage;
          if (elem.progress < 1) {
            currentimage = Math.floor(elem.progress * images.length);
            currimg.current.src = images[currentimage];
          } else {
            ((currentimage = images.length - 1),
              (currimg.current.src = images[currentimage]));
          }
        },
      },
    });
  }, []);
  return (
    <div ref={parent} className="min-h-screen absolute top-0 w-full ">
      <div
        ref={imageref}
        className="lg:h-[45vh] lg:w-[35vh] md:h-[30vh] md:w-[20vh] h-[30vh] w-[20vh]  absolute lg:top-10 md:top-10 top-60  object-cover rounded-3xl left-[30vw] overflow-hidden"
      >
        <img
          ref={currimg}
          className="h-full w-full"
          src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
          alt=""
        />
      </div>
      <div className="h-screen w-full relative lg:top-[40vh] top-[10vh] z-60">
        <div className="h-full w-full text-[20vw] text-black flex justify-center items-center text-center font-semibold md:leading-[20vh] leading-[15vh] lg:leading-[40vh]">
          SEVEN7Y
          <br /> TWO
        </div>
      </div>
      <HeroBottomText />
      <About />
    </div>
  );
};

export default herohead;
