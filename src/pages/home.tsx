import logo from "../content/logo.png";
import back from "../content/newbackblue.png";
import Button from "../component/Button/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToSignup = () => {
    navigate("/signup");
  };

  const { t } = useTranslation();
  return (
    <section
      style={{ backgroundImage: `url(${back})` }}
      className="h-screen bg-whitish dark:bg-dark dark:text-whitish lg:bg-right bg-right-bottom max-w-full flex justify-center items-center flex-col bg-cover bg-no-repeat"
    >
      <div className="text-center">
        <img src={logo} alt="Logo" className="h-48 mx-auto dark:invert" />
        <h1 className="text-black text-xl font-title mt-6 mb-8 dark:text-whitish">
          {t("slogan.label")}
        </h1>

        <div className="flex flex-col md:flex-row justify-center mt-6">
          <div className="mx-6 my-3">
            <Button
              clickHandler={navigateToSignup}
              name={t("signUp.label")}
              color="teal"
            />
          </div>
          <div className="mx-6 my-3">
            <Button
              clickHandler={navigateToLogin}
              name={t("login.label")}
              color="black"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
