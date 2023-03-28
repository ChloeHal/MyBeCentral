import React, { ChangeEvent, useState } from "react";
import Button from "../component/Button/Button";
import Input from "../component/Input/Input";
import { useNavigate } from "react-router-dom";
import Notification from "../component/Notification/Notification"; // import the Notification component
import { useTranslation } from "react-i18next";
import logo from "../content/logo.png";
import bg from "../content/newbackblue.png";

function SignUp() {
  const navigateFeed = () => {
    // 👇️ navigate to /
    navigate("/feed");
  };
  const navigateLogin = () => {
    // 👇️ navigate to /
    navigate("/login");
  };
  const { t } = useTranslation();
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginFormData, setLoginFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    password: "",
    repeatPassword: "",
    privacy: false,
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

  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="h-screen bg-whitish lg:bg-right bg-right-bottom max-w-full flex justify-center items-center flex-col bg-cover bg-no-repeat"
    >
      <img src={logo} alt="logo" className="w-28" />
      <form onSubmit={handleSubmit} className="p-4">
        <Input
          type="text"
          name="firstName"
          label={t("name.label")}
          value={loginFormData.firstName}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="lastName"
          label={t("lastname.label")}
          value={loginFormData.lastName}
          onChange={handleInputChange}
        />
        <Input
          type="email"
          name="email"
          label={"Email"}
          value={loginFormData.email}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="company"
          label={t("company.label")}
          value={loginFormData.company}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          label={t("password.label")}
          value={loginFormData.password}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="repeatPassword"
          label={t("repeatPassword.label")}
          value={loginFormData.repeatPassword}
          onChange={handleInputChange}
        />
        <div className="flex items-center mr-4 mb-2">
          <input
            id="privacy"
            type="checkbox"
            className="opacity-0 absolute h-8 w-8"
            value={loginFormData.privacy.toString()}
            onChange={(e) => {
              setLoginFormData({
                ...loginFormData,
                privacy: e.target.checked,
              });
            }}
          />
          <div className="bg-transparent border rounded-md border-black w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="fill-current hidden w-5 h-5 text-blue-600 pointer-events-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <label className="select-none text-sm" htmlFor="privacy">
            {t("privacy.label")}
          </label>
        </div>
        <div className="flex justify-around mt-10">
          <Button
            color="teal"
            name={t("signUp.label")}
            type="button"
            clickHandler={() => {
              console.log(loginFormData);
              navigateLogin();
            }}
          />
          <Button
            color="black"
            name={t("login.label")}
            type="submit"
            clickHandler={navigateFeed}
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

export default SignUp;
