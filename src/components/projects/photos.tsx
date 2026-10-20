import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);
const photos = () => {
  const [pictures, setpictures] = useState([]);
  const parent = useRef(null);
  useGSAP(
    function () {
      gsap.from(".pictures", {
        height: 0,
        scrollTrigger: {
          trigger: parent.current,
          scrub: true,
          start: "top 100%",
          end: "top -200%",
        },
      });
    },
    { scope: parent, dependencies: [pictures] },
  );
  useEffect(() => {
    async function getImages() {
      const url = "https://picsum.photos/v2/list?page=10&limit=30";
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      setpictures(data);
    }
    getImages();
  }, []);
  return (
    <div
      ref={parent}
      className="h-full w-full flex flex-wrap absolute top-[77vh] gap-8 md:gap-15 lg:gap-3 p-3"
    >
      {pictures.map((val, idx) => {
        return (
          <div
            style={{ backgroundImage: `url(${val.download_url})` }}
            key={idx}
            className="pictures lg:h-[70vh] md:[60vh] lg:w-[49.5%] md:[49.5%]  w-[45%] h-[50vh] bg-black hover:rounded-4xl overflow-hidden transition-all ease-in duration-200 object-cover bg-cover group"
          >
            <div className="h-full w-full flex justify-center items-center opacity-0 relative z-100 group-hover:opacity-100 transition-all ease-in duration-100">
              <div className=" w-fit border-2 border-white text-white leading-15 px-3 rounded-full font-semibold">
                <h1 className="text-[5vw]">VIEW PROJECT</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default photos;
