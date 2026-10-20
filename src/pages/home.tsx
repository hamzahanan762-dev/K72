import Video from "../components/home/video";
import HeroTopText from "../components/home/heroTopText";
import Otherpages from "../components/home/otherpages";
import About from "../components/home/about";
import Navbar from "../components/common/navbar";
const home = () => {
  window.scrollTo(0, 0);
  return (
    <div className=" bg-black ">
      <Navbar logoColor="white" />
      <div className="fixed z-10 h-screen w-screen">
        <Video />
      </div>
      <div className="lg:h-[130vh] w-full z-50 relative">
        <About />
        <HeroTopText />
        <Otherpages />
      </div>
    </div>
  );
};

export default home;
