import Video from "./video";
const heroTopText = () => {
  return (
    <div className="relative -top-13 left-[13vw] h-fit w-fit text-white  flex flex-col text-[10.5vw] lg:leading-[20vh] items-center">
      <h1 className="">THE SPARK FOR</h1>
      <h1 className="flex items-center gap-[1vw] ">
        ALL
        <div className="lg:h-[16vh] w-[16vw] lg:mt-3  lg:rounded-full rounded-3xl overflow-hidden">
          <Video />
        </div>
        THINGS
      </h1>
      <h1>CREATIVE</h1>
    </div>
  );
};

export default heroTopText;
