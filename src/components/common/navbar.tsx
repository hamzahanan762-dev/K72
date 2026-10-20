import { useRef, useState } from "react";
import image1 from "../../../public/menubg1.png";
import image2 from "../../../public/menubg2.jpg";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const navbar = (props) => {
  let color = props.logoColor ?? "white";
  const [menuHover, setMenuHover] = useState(false);
  const [first, setfirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [Fourth, setFourth] = useState(false);
  const [menu, setMenu] = useState(false);
  const [crosshover, setcrosshover] = useState(false);
  const t1 = useRef(null);
  const t2 = useRef(null);
  const shutterdiv = useRef(null);
  const svg = useRef(null);
  const menuop = useRef(null);
  useGSAP(function () {
    gsap.set(shutterdiv.current, { display: "none" });
    gsap.set(".shutter", { yPercent: -100 });

    t1.current = gsap
      .timeline({ paused: true })
      .set(shutterdiv.current, { display: "flex" })
      .to(".shutter", {
        yPercent: 0,
        stagger: 0.05,
        ease: "power3.out",
      })
      .to(
        menuop.current,
        {
          height: "100vh",
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.5",
      )
      .to(
        ".options",
        {
          translateY: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.9",
      );

    t2.current = gsap
      .timeline({ paused: true })
      .set(".shutter", {
        yPercent: 0,
      })
      .to(".shutter", {
        yPercent: 100,
        stagger: 0.05,
        ease: "power2.out",
      });
  });
  return (
    <div className="fixed top-0 z-200 flex justify-between w-[98.8vw]">
      <div className="p-3 z-100">
        <Link
          onClick={() => {
            setMenu(false);
            gsap.set(shutterdiv.current, {
              display: "none",
            });
          }}
          className="z-100"
          to="/"
        >
          <div className="lg:w-25 md:w-17 w-12">
            {" "}
            <svg
              fill={color}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
            >
              <path
                fill-rule="evenodd"
                d="M45.144105,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
        </Link>
      </div>
      <div
        onMouseEnter={() => {
          setMenuHover(true);
        }}
        onMouseLeave={() => {
          setMenuHover(false);
        }}
        className="h-[10vh] w-[16vw] absolute top-0 right-0 cursor-pointer"
      >
        <div className="relative top-0 bg-black lg:h-full lg:w-full h-10 w-30 md:h-15 md:w-full overflow-hidden">
          <div
            className={`flex flex-col gap-1 h-fit w-fit relative z-60 top-[50%] left-[20%] lg:top-[50%] lg:left-[50%]`}
          >
            <div
              className={`h-px lg:w-[5vw] w-8 ${menuHover ? "bg-black" : "bg-white"}`}
            ></div>
            <div
              className={`h-px lg:w-[2.5vw] w-4 self-end ${menuHover ? "bg-black" : "bg-white"}`}
            ></div>
          </div>
        </div>
        <div
          onClick={() => {
            setMenu(true);
            t1.current.restart();
          }}
          className={`absolute top-0 bg-yellow-300 z-20 lg:w-full w-30 md:h-15 overflow-hidden ${menuHover ? "lg:h-full h-10" : "lg:h-0 h-0"} transition-all duration-50 ease-in `}
        >
          <div className="flex flex-col gap-1 h-fit w-fit relative top-[50%] left-[50%]"></div>
        </div>
      </div>
      <div
        ref={shutterdiv}
        style={{ display: "none" }}
        className="h-screen w-screen absolute top-0 z-300 pointer-events-none"
      >
        <div className="shutter h-full w-1/6 bg-black"></div>
        <div className="shutter h-full w-1/6 bg-black"></div>
        <div className="shutter h-full w-1/6 bg-black"></div>
        <div className="shutter h-full w-1/6 bg-black"></div>
        <div className="shutter h-full w-1/6 bg-black"></div>
        <div className="shutter h-full w-1/6 bg-black"></div>
      </div>
      <div
        ref={menuop}
        className={`absolute top-0 h-0 overflow-hidden w-screen bg-black text-white z-400 ${menu ? "initial" : "hidden"}`}
      >
        <Link to="/">
          <div className="p-4 lg:w-45 w-28">
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
            >
              <path
                fill-rule="evenodd"
                d="M45.144105,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
        </Link>
        <div
          onClick={() => {
            setMenu(false);
            t2.current.restart();
          }}
          onMouseEnter={() => {
            setcrosshover(true);
          }}
          onMouseLeave={() => {
            setcrosshover(false);
          }}
          className="absolute right-0 top-0 h-[23vh] z-200 w-[12vw] cursor-pointer"
        >
          <div
            className={`lg:w-full h-0.75 md:top-[4.5vh] w-18  absolute top-[10vh] right-[3vw]  lg:top-[12vh]  lg:right-0 rotate-45 ${crosshover ? "bg-yellow-300" : "bg-white"}`}
          ></div>
          <div
            className={`lg:w-0.75 lg:h-35 h-20 w-0.75 md:top-[1vh] md:right-[8vw] top-[2vh] right-[11vw]  rotate-45 absolute lg:top-[-1vh] lg:right-[6vw] ${crosshover ? "bg-yellow-300" : "bg-white"}`}
          ></div>
        </div>
        {/* first menu option */}
        <div
          onMouseEnter={() => {
            setfirst(true);
          }}
          onMouseLeave={() => {
            setfirst(false);
          }}
          className="cursor-pointer overflow-hidden"
        >
          <div
            className={`bg-black absolute top-22.5 h-24 w-full overflow-hidden flex justify-center border-t border-b border-[#808080] items-center ${first ? "opacity-0" : "opacity-100"}`}
          >
            <h1 className=" uppercase options text-[8vw] inline-block font-semibold -translate-y-26">
              projects
            </h1>
          </div>
          <Link
            onClick={() => {
              setMenu(false);
              t2.current.restart();
            }}
            to="/projects"
          >
            <div
              className={` h-23.5 w-full whitespace-nowrap gap-7 flex items-center bg-yellow-300 text-black absolute top-22.5 overflow-hidden z-100 ${first ? "opacity-100" : "opacity-0 "} transition-all duration-150 ease-in`}
            >
              <div className="menuanim shrink-0 flex items-center">
                <div className=" shrink-0 flex items-center">
                  <h1 className="text-[8vw] font-semibold mb-2">
                    SEE EVERYTHING
                  </h1>
                  <img
                    className="w-50 bg-cover bg-center h-20 rounded-full"
                    src={image1}
                  />
                </div>
                <div className=" shrink-0 flex items-center">
                  <h1 className="text-[8vw] font-semibold mb-2">
                    SEE EVERYTHING
                  </h1>
                  <img
                    className="w-50 bg-cover bg-center h-20 rounded-full"
                    src={image2}
                  />
                </div>
              </div>
              <div className="menuanim shrink-0 flex items-center">
                <div className=" shrink-0 flex items-center">
                  <h1 className="text-[8vw] font-semibold mb-2">
                    SEE EVERYTHING
                  </h1>
                  <img
                    className="w-50 bg-cover bg-center h-20 rounded-full"
                    src={image1}
                  />
                </div>
                <div className=" shrink-0 flex items-center">
                  <h1 className="text-[8vw] font-semibold mb-2">
                    SEE EVERYTHING
                  </h1>
                  <img
                    className="w-50 bg-cover bg-center h-20 rounded-full"
                    src={image2}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* second menu option */}
        <div
          onMouseEnter={() => {
            setSecond(true);
          }}
          onMouseLeave={() => {
            setSecond(false);
          }}
          className="cursor-pointer overflow-hidden"
        >
          <div
            className={` absolute top-46 bg-black overflow-hidden h-24 w-full flex justify-center border-t border-b border-[#808080] items-center ${second ? "opacity-0" : "opacity-100"}`}
          >
            <h1 className="uppercase options text-[8vw] font-semibold -translate-y-26">
              agency
            </h1>
          </div>
          <Link
            onClick={() => {
              setMenu(false);
              t2.current.restart();
            }}
            to="/agencies"
          >
            <div
              className={`absolute top-46  h-23.5 w-full whitespace-nowrap gap-7 flex items-center bg-yellow-300 text-black  overflow-hidden z-100 ${second ? "opacity-100" : "opacity-0 "} transition-all duration-150 ease-in`}
            >
              <div className="menuanim shrink-0 flex items-center">
                <div className=" shrink-0 flex items-center">
                  <h1 className="options uppercase text-[8vw] font-semibold mb-2">
                    know us
                  </h1>
                  <img
                    className="w-50 bg-cover bg-center h-20 rounded-full"
                    src={image1}
                  />
                </div>
                <div className=" shrink-0 flex items-center">
                  <h1 className="uppercase text-[8vw] font-semibold mb-2">
                    know us
                  </h1>
                  <img
                    className="w-50 bg-cover bg-center h-20 rounded-full"
                    src={image2}
                  />
                </div>
              </div>
              <div className="menuanim shrink-0 flex items-center">
                <div className=" shrink-0 flex items-center">
                  <h1 className="text-[8vw] font-semibold mb-2">KNOW US</h1>
                  <img
                    className="w-50 bg-cover bg-center h-20 rounded-full"
                    src={image1}
                  />
                </div>
                <div className=" shrink-0 flex items-center">
                  <h1 className="text-[8vw] font-semibold mb-2">KNOW US</h1>
                  <img
                    className="w-50 bg-cover bg-center h-20 rounded-full"
                    src={image2}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* third menu option */}
        <div
          onMouseEnter={() => {
            setThird(true);
          }}
          onMouseLeave={() => {
            setThird(false);
          }}
          className="cursor-pointer overflow-hidden"
        >
          <div
            className={` absolute top-69 bg-black h-24 overflow-hidden w-full flex justify-center border-t border-b border-[#808080] items-center ${third ? "opacity-0" : "opacity-100"}`}
          >
            <h1 className=" uppercase options text-[8vw] font-semibold -translate-y-26">
              contact
            </h1>
          </div>
          <Link
            onClick={() => {
              setMenu(false);
              t2.current.restart();
            }}
            to="/contact"
          >
            <div
              className={`absolute top-69  h-23.5 w-full whitespace-nowrap gap-7 flex items-center bg-yellow-300 text-black  overflow-hidden z-100 ${third ? "opacity-100" : "opacity-0 "} transition-all duration-150 ease-in`}
            >
              <div className="menuanim shrink-0 flex items-center">
                <div className=" shrink-0 flex items-center">
                  <h1 className="text-[8vw] font-semibold mb-2">
                    SEE EVERYTHING
                  </h1>
                  <img
                    className="w-50 bg-cover bg-center h-20 rounded-full"
                    src={image1}
                  />
                </div>
                <div className=" shrink-0 flex items-center">
                  <h1 className="text-[8vw] font-semibold mb-2">
                    SEND US A FAX
                  </h1>
                  <img
                    className="w-50 bg-cover bg-center h-20 rounded-full"
                    src={image2}
                  />
                </div>
              </div>
              <div className="menuanim shrink-0 flex items-center">
                <div className=" shrink-0 flex items-center">
                  <h1 className="text-[8vw] font-semibold mb-2">
                    SEND US A FAX
                  </h1>
                  <img
                    className="w-50 bg-cover bg-center h-20 rounded-full"
                    src={image1}
                  />
                </div>
                <div className=" shrink-0 flex items-center">
                  <h1 className="text-[8vw] font-semibold mb-2">
                    SEND US A FAX
                  </h1>
                  <img
                    className="w-50 bg-cover bg-center h-20 rounded-full"
                    src={image2}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* fourth menu option */}
        <div
          onMouseEnter={() => {
            setFourth(true);
          }}
          onMouseLeave={() => {
            setFourth(false);
          }}
          className="cursor-pointer overflow-hidden"
        >
          <div
            className={` absolute top-91 bg-black h-24 w-full overflow-hidden flex justify-center border-t border-b border-[#808080] items-center ${Fourth ? "opacity-0" : "opacity-100"}`}
          >
            <h1 className="uppercase options text-[8vw] font-semibold -translate-y-26 ">
              blog
            </h1>
          </div>
          <Link
            onClick={() => {
              setMenu(false);
              t2.current.restart();
            }}
            to="/blogs"
          >
            <div
              className={`absolute top-91  h-23.5 w-full whitespace-nowrap gap-7 flex items-center bg-yellow-300 text-black  overflow-hidden z-100 ${Fourth ? "opacity-100" : "opacity-0 "} transition-all duration-150 ease-in`}
            >
              <div className="menuanim shrink-0 flex items-center">
                <div className=" shrink-0 flex items-center">
                  <h1 className="text-[8vw] font-semibold mb-2">
                    READ ARTICLES
                  </h1>
                  <img
                    className="w-50 bg-cover bg-center h-20 rounded-full"
                    src={image1}
                  />
                </div>
                <div className=" shrink-0 flex items-center">
                  <h1 className="text-[8vw] font-semibold mb-2">
                    READ ARTCILES
                  </h1>
                  <img
                    className="w-50 bg-cover bg-center h-20 rounded-full"
                    src={image2}
                  />
                </div>
              </div>
              <div className="menuanim shrink-0 flex items-center">
                <div className=" shrink-0 flex items-center">
                  <h1 className="text-[8vw] font-semibold mb-2">
                    READ ARTICLES
                  </h1>
                  <img
                    className="w-50 bg-cover bg-center h-20 rounded-full"
                    src={image1}
                  />
                </div>
                <div className=" shrink-0 flex items-center">
                  <h1 className="text-[8vw] font-semibold mb-2">
                    READ ARTICLES
                  </h1>
                  <img
                    className="w-50 bg-cover bg-center h-20 rounded-full"
                    src={image2}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* footer of menu */}
        <div className="bg-black absolute top-116 w-full h-1/6 flex justify-between items-end p-4">
          <div>
            <h1 className="text-lg font-semibold">MONTREAL</h1>
          </div>
          <div className="uppercase text-[0.7rem] font-bold flex gap-2 ml-40">
            <span>privacy policy</span>
            <span>privacy notice</span>
            <span>ethics report</span>
            <span>consent choices</span>
          </div>
          <div className="flex -mb-3">
            {["fb", "ig", "in", "be"].map((val, idx) => {
              return (
                <div
                  className="h-[7vh] w-[5.5vw] border-2 flex justify-center items-center uppercase text-[3vw] font-semibold border-white rounded-full"
                  key={idx}
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
