import RoundButton from "../component/Button/RoundButton";
import heart from "../content/heartfull.svg";
import arrow from "../content/arrow.svg";
import logo from "../content/becode.png";
import back from "../content/newbackblue.png";
import { useNavigate, useParams } from "react-router-dom";
import users from "../assets/backend/users";
import { useState, useEffect } from "react";
import companies from "../assets/backend/companies";
import { Translation, useTranslation } from "react-i18next";
import Button from "../component/Button/Button";
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
  const { t } = useTranslation();
  const { username } = useParams();
  const [user, setUser] = useState<User | null>(null);

  const [color, setColor] = useState("");

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
    setColor("pink");
    setTimeout(() => setColor(""), 300);
    if (user) {
      //quand on auras le back il faut faire en sorte de checker si le user logged in a deja liker le profile pour qu'on puisse liker une seule fois
      user.followers++;
    }
    console.log(user);
  };
  let company = Object.values(companies)
    .map((company) => {
      if (user?.company.match(company.name)) {
        return company;
      }
    })
    .filter((company) => company);

  return user ? (
    <div className="h-screen flex items-center justify-center relative bg-whitish dark:bg-dark dark:text-whitish">
      <RoundButton
        clickHandler={handleButtonClick}
        classname="absolute z-50 w-16 h-16 bg-pink lg:w-20 lg:h-20 shadow-xl"
        color=""
        svg={
          <img src={heart} className={color ? "hidden" : "w-1/2 dark:invert"} />
        }
      />
      <RoundButton
        clickHandler={navigateFeed}
        classname="absolute z-50 w-12 h-12 bg-black/50 md:w-12 md:h-12 top-0 left-0 mt-4 ml-4"
        color=""
        svg={<img src={arrow} className="h-1/2 -translate-x-[2px]" />}
      />

      <div className="flex flex-col h-screen lg:flex-row w-full">
        <div className="h-1/2 relative lg:h-full lg:w-1/2 shadow-2xl ">
          <img src={user.picture} className="w-full h-full object-cover" />
        </div>

        <div
          style={{ backgroundImage: `url(${back})` }}
          className="h-1/2 flex flex-col bg-center bg-cover justify-center items-center relative lg:w-1/2 lg:h-full"
        >
          <div className="flex flex-row w-full justify-between md:justify-around">
            <p className="text-center px-6 md:text-xl">
              {user.followers} followers
            </p>
            <p className="text-center px-6 md:text-xl">
              {user.following.length} follows
            </p>
          </div>
          <div className="flex  justify-center items-center my-4 mx-6 w-2/3">
            <img
              src={company[0]?.logo}
              className="object-cover w-1/3 sm:w-1/4"
            />

            <div className="flex flex-col px-4 justify-center h-full md:text-xl">
              <h1>
                {user.firstname} {user.lastname}
              </h1>
              <p>{user.company}</p>
            </div>
          </div>
          <div className="my-4 overflow-y-auto mx-6 md:w-2/3 md:text-lg scrollbar-thin scrollbar-track-transparent px-4 scrollbar-thumb-black">
            <p className="text-center">{user.description}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      style={{ backgroundImage: `url(${back})` }}
      className="h-screen bg-whitish dark:bg-dark dark:text-whitish lg:bg-right bg-right-bottom max-w-full flex justify-center items-center flex-col bg-cover bg-no-repeat"
    >
      <main className="text-center">
        <h1 className="text-[60px]">404</h1>
        <p className="leading-6">{t("404.label")}</p>
        <p>{t("404p.label")}</p>
      </main>
      <Button
        name={t("goback.label")}
        color="teal"
        class="m-8"
        clickHandler={navigateFeed}
      />
    </div>
  );
}

export default Profile;
