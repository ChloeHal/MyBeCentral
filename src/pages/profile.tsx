import React from "react";
import RoundButton from "../component/Button/RoundButton";
import EditIcon from "../content/heartfull.svg";
import logo from "../content/profile.jpg";

const handleButtonClick = () => {
  console.log("Button clicked!");
};
const Profile: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-1/2 bg-gray-300 relative">
        <img src={logo} className="w-full h-full object-cover" />
      </div>
      <div className="h-1/2 flex flex-col justify-center items-center relative">
        <div className="flex flex-row">
          <p className="text-center px-4">34 followers</p>
          <p className="text-center px-4">36 follows</p>
        </div>
        <RoundButton
          clickHandler={handleButtonClick}
          color="teal"
          svg={<img src={EditIcon} className="w-1/2" />}
        />
      </div>
    </div>
  );
};

export default Profile;
