import React from "react";
import Navbar from "../components/common/navbar";
import HeroText from "../components/contact/heroText";
import Infiniteanimation from "../components/contact/infiniteanimation";
import Sociallinks from "../components/contact/sociallinks";
const contact = () => {
  window.scrollTo(0, 0);
  return (
    <div className="h-full w-full">
      <div className="h-[90vh] w-full bg-black">
        <Navbar />
        <HeroText
          first="TO TALK"
          second="ABOUT"
          third="YOUR"
          fourth="PROJECT"
        />
      </div>
      <Infiniteanimation />
      <Sociallinks />
      <HeroText first="TO TALK" second="ABOUT" third="YOUR" fourth="BRAND" />

      <Infiniteanimation />
      <Sociallinks />
    </div>
  );
};

export default contact;
