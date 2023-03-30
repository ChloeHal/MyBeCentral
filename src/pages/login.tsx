import React, { ChangeEvent, useState } from "react";
import Button from "../component/Button/Button";
import Input from "../component/Input/Input";
import { useNavigate } from "react-router-dom";
import Notification from "../component/Notification/Notification"; // import the Notification component
import { useTranslation } from "react-i18next";
import logo from "../content/logo.png";
import bg from "../content/newbackblue.png";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    console.log(loginFormData);
    // fetch("http://localhost:3000/signin", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify({
    //     email: loginFormData.email,
    //     password: loginFormData.password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data, "user");
    //     if (!data.error) {
    //       setIsLoggedIn(true);
    //       localStorage.setItem("user", JSON.stringify(data));
    //       navigate("/");
    //     } else {
    //       setIsNotificationVisible(true);
    //       setErrorMessage(data.error);
    //     }
    //   });
  };

  const EmailInput: React.FC = () => {
    const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
  
      // Regular expression to check if the input is a valid email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (emailRegex.test(inputValue)) {
        setIsValidEmail(true);
      } else {
        setIsValidEmail(false);
      }

  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="h-screen bg-whitish dark:bg-dark dark:text-whitish lg:bg-right bg-right-bottom max-w-full flex justify-center items-center flex-col bg-cover bg-no-repeat"
    >
      {/* <img
        src={bg}
        alt="soft blue green background"
        className="absolute bottom-[0] left-10 z-[-1]"
      /> */}
      <img src={logo} alt="logo" className="w-44 mb-10 dark:invert" />
      <form onSubmit={handleSubmit} className="p-4">
        <Input
          type="text"
          name="email"
          label={"Email"}
          value={loginFormData.email}
          onChange={handleInputChange}
          class={isValidEmail === true ? "teal-border" : isValidEmail === false ? "pink-border" : ""}
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
            clickHandler={navigateFeed}
          />
          <Button
            color="teal"
            name={t("signUp.label")}
            type="button"
            clickHandler={() => {
              console.log(loginFormData);
              navigateSignUp();
            }}
          />
        </div>
      </form>

      {isNotificationVisible ? (
        <Notification title="Error" text={errorMessage} />
      ) : (
        <></>
      )}
    </section>
  );
}

export default Login;