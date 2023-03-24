import React from "react";
import RoundButton from "../component/Button/RoundButton";
import arrow from "../content/arrow.svg";
import profile from "../content/backbecode.png";
import logo from "../content/becode.png";
import back from "../content/newbackblue.png";

const handleButtonClick = () => {
  console.log("Button clicked!");
};
const Profile: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center relative bg-whitish">
      <div className="absolute z-50 w-20 h-20 md:w-24 md:h-24">
        <img src={logo} className="object-cover" />
      </div>
      <RoundButton
        clickHandler={handleButtonClick}
        classname="absolute z-50 w-12 h-12 bg-black/50 md:w-12 md:h-12 top-0 left-0 mt-4 ml-4"
        color=""
        svg={<img src={arrow} className="h-1/2 " />}
      />
      <div className="flex flex-col h-screen lg:flex-row">
        <div className="h-1/2 relative lg:h-full lg:w-1/2 shadow-2xl ">
          <img src={profile} className="w-full h-full object-cover" />
        </div>

        <div
          style={{ backgroundImage: `url(${back})` }}
          className="h-1/2 flex flex-col justify-center bg-center bg-cover items-center relative lg:w-1/2 lg:h-full"
        >
          <div className="flex flex-row my-4 mx-6 w-2/3">
            <div className="flex flex-col text-3xl w-2/3 px-4 justify-center h-full md:text-3xl">
              <h1>BeCode</h1>
            </div>
          </div>
          <div className=" overflow-y-scroll mx-6 md:w-2/3 md:text-l">
            <p>
              Lorem ipsum dolor sit amet. Hic ipsam fugit et sunt ullam aut enim
              quis non voluptas asperiores et accusantium sint. Id accusantium
              internos quo ducimus omnis hic voluptates nemo ut unde obcaecati
              sit accusantium quaerat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
