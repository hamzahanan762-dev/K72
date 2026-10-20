import Video from "../../../public/bg-video.mp4";
const video = () => {
  return (
    <div className="">
      <video
        autoPlay
        loop
        muted
        className="lg:h-full lg:w-full h-full w-full md-h-full md-w-full bg-cover "
        src={Video}
      ></video>
    </div>
  );
};

export default video;
