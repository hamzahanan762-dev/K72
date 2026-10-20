import { Link } from "react-router-dom";
import Stair from "../common/stair";
const otherpages = () => {
  return (
    <div className=" absolute lg:bottom-1 bottom-0 right:0  flex gap-3 lg:leading-22 lg:right-[15vw] text-white text-[7vw]">
      <div className="border-white page border-2 hover:border-yellow-300 hover:text-yellow-300 group rounded-full flex justify-center items-center px-6">
        <Link onClick={() => <Stair />} className="" to={"/projects"}>
          PROJECTS
        </Link>
      </div>
      <div className="border-white page border-2 hover:border-yellow-300 hover:text-yellow-300 rounded-full flex justify-center items-center px-6">
        <Link to={"/agencies"}>AGENCY</Link>
      </div>
    </div>
  );
};

export default otherpages;
