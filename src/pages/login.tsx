import React, { ChangeEvent, useState } from "react";
import Button from "../component/Button/Button";
import Input from "../component/Input/Input";
import { useNavigate } from "react-router-dom";
import Notification from "../component/Notification/Notification"; // import the Notification component
import { useTranslation } from "react-i18next";
import logo from "../content/logo.png";
import bg from "../content/newbackblue.png";
import Cookies from "js-cookie";

function Login() {
  const navigateFeed = () => {
    navigate("/feed");
  };
  const navigateSignUp = () => {
    navigate("/signup");
  };
  const { t } = useTranslation();
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const toggleNotification = () => {
    setIsNotificationVisible(
      (prevIsNotificationVisible) => !prevIsNotificationVisible
    );
  };
  const [errorMessage, setErrorMessage] = useState("");
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("http://localhost:8081/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(loginFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          const sessionId = data.details[2];
          Cookies.set("sessionId", sessionId);
          navigate("/feed");
        } else {
          setErrorMessage(data.message);
          setIsNotificationVisible(true);
        }
      });
  };

  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="h-screen bg-whitish dark:bg-dark dark:text-whitish lg:bg-right bg-right-bottom max-w-full flex justify-center items-center flex-col bg-cover bg-no-repeat"
    >
      <img src={logo} alt="logo" className="w-44 mb-10 dark:invert" />
      <form onSubmit={handleSubmit} className="p-4">
        <Input
          type="text"
          name="email"
          label={"Email"}
          value={loginFormData.email}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          label={t("password.label")}
          value={loginFormData.password}
          onChange={handleInputChange}
        />
        <div className="flex justify-around mt-10">
          <Button
            color="black"
            name={t("login.label")}
            type="submit"
            clickHandler={() => handleSubmit}
          />
          <Button
            color="teal"
            name={t("signUp.label")}
            type="button"
            clickHandler={() => {
              navigateSignUp();
            }}
          />
        </div>
      </form>

      {isNotificationVisible ? (
        <Notification
          title={t("error.label")}
          text={errorMessage}
          open={isNotificationVisible}
          clickHandler={() => setIsNotificationVisible(!isNotificationVisible)}
        />
      ) : (
        <></>
      )}
    </section>
  );
}

export default Login;
