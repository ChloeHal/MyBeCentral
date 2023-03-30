import RoundButton from "../component/Button/RoundButton";
import heart from "../content/heartfull.svg";
import arrow from "../content/arrow.svg";
import logo from "../content/becode.png";
import back from "../content/newbackblue.png";
import { useNavigate, useParams } from "react-router-dom";
import users from "../assets/backend/users";
import { useState, useEffect } from "react";
interface User {
  id: number;
  firstname: string;
  lastname: string;
  name: string;
  picture: string;
  company: string;
  description: string;
  followers: number;
  following: string[];
  poste: string;
}
function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const matchingUser = Object.values(users).find((u) => u.name === username);
    if (matchingUser) {
      setUser(matchingUser);
    }
  }, [username]);

  const navigateFeed = () => {
    navigate("/feed");
  };

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return user ? (
    <div className="h-screen flex items-center justify-center relative bg-whitish dark:bg-dark dark:text-whitish">
      <RoundButton
        clickHandler={handleButtonClick}
        classname="absolute z-50 w-16 h-16 bg-pink md:w-20 md:h-20 shadow-xl"
        color=""
        svg={<img src={heart} className="w-1/2 dark:invert" />}
      />
      <RoundButton
        clickHandler={navigateFeed}
        classname="absolute z-50 w-12 h-12 bg-black/50 md:w-12 md:h-12 top-0 left-0 mt-4 ml-4"
        color=""
        svg={<img src={arrow} className="h-1/2 " />}
      />

      <div className="flex flex-col h-screen lg:flex-row">
        <div className="h-1/2 relative lg:h-full lg:w-1/2 shadow-2xl ">
          <img src={user.picture} className="w-full h-full object-cover" />
        </div>

        <div
          style={{ backgroundImage: `url(${back})` }}
          className="h-1/2 flex flex-col bg-center bg-cover justify-center items-center relative lg:w-1/2 lg:h-full"
        >
          <div className="flex flex-row my-4">
            <p className="text-center px-4 md:text-2xl">
              {user.followers} followers
            </p>
            <p className="text-center px-4 md:text-2xl">
              {user.following.length} follows
            </p>
          </div>
          <div className="flex flex-row my-4 mx-6 w-2/3">
            <div className="flex py-auto w-1/3 px-4">
              <img src={logo} className="object-cover" />
            </div>
            <div className="flex flex-col w-2/3 px-4 justify-center h-full md:text-xl">
              <h1>
                {user.firstname} {user.lastname}
              </h1>
              <p>{user.company}</p>
            </div>
          </div>
          <div className="my-4 overflow-y-auto mx-6 md:w-2/3 md:text-l">
            <p>{user.description}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>User not found</div>
  );
}

export default Profile;
