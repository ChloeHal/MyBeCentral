import React, { ChangeEvent, useState } from "react";
import Button from "../component/Button/Button";
import Input from "../component/Input/Input";
import { useNavigate } from "react-router-dom";
import Notification from "../component/Notification/Notification";
import { useTranslation } from "react-i18next";
import logo from "../content/logo.png";
import bg from "../content/newbackblue.png";
import companies from "../assets/backend/companies";
import Cookies from "js-cookie";

function SignUp() {
  const navigateFeed = () => {
    navigate("/feed");
  };
  const navigateLogin = () => {
    navigate("/login");
  };
  console.log(Cookies);
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

  const { t } = useTranslation();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setLoginFormData((prevData) => ({ ...prevData, company: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginFormData.password != loginFormData.repeatPassword) {
      setErrorMessage(t("passworderror.label") as string);
      setIsNotificationVisible(true);
    } else if (
      loginFormData.company === "" ||
      loginFormData.email === "" ||
      loginFormData.firstName === "" ||
      loginFormData.lastName === "" ||
      loginFormData.password === "" ||
      loginFormData.repeatPassword === "" ||
      loginFormData.privacy === false
    ) {
      setErrorMessage(t("uncomplete.label") as string);
      setIsNotificationVisible(true);
    } else {
      fetch("http://localhost:8081/api/v1/user/save", {
        method: "POST",
        body: JSON.stringify(loginFormData),

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then(function (response) {
          console.log(response);
          navigateFeed();
        })
        .catch((error) => {
          console.error("Error:", error);
          setErrorMessage(t("servererror.label") as string);
          setIsNotificationVisible(true);
        });
    }
  };

  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="h-screen bg-whitish dark:bg-dark dark:text-whitish lg:bg-right bg-right-bottom max-w-full flex justify-center items-center flex-col bg-cover bg-no-repeat"
    >
      {isNotificationVisible ? (
        <>
          <img src={logo} alt="logo" className="w-28 dark:invert" />
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
            <label htmlFor="underline_select" className="sr-only">
              Underline select
            </label>
            <select
              value={loginFormData.company}
              onChange={handleSelectChange}
              id="underline_select"
              className={`mb-4 block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b border-black appearance-none dark:text-whitish dark:border-whitish focus:outline-none focus:ring-0 scrollbar-thin scrollbar-track-white  scrollbar-thumb-black`}
            >
              <option value="">{t("companychoice.label")}</option>
              {Object.values(companies).map((company, key) => (
                <option key={key} value={company.name}>
                  {company.name}
                </option>
              ))}
            </select>
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
              <div className="bg-transparent border rounded-md border-black dark:border-whitish w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-teal dark:focus-within:border-teal">
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
                type="submit"
                clickHandler={() => {
                  console.log(loginFormData);
                  handleSubmit;
                }}
              />
              <Button
                color="black"
                name={t("login.label")}
                type="button"
                clickHandler={navigateLogin}
              />
            </div>
          </form>
          <Notification
            title={t("error.label")}
            text={errorMessage}
            open={isNotificationVisible}
            clickHandler={() =>
              setIsNotificationVisible(!isNotificationVisible)
            }
          />
        </>
      ) : (
        <>
          <img src={logo} alt="logo" className="w-28 dark:invert" />
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
            <label htmlFor="underline_select" className="sr-only">
              Underline select
            </label>
            <select
              value={loginFormData.company}
              onChange={handleSelectChange}
              id="underline_select"
              className={`mb-4 block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b border-black appearance-none dark:text-whitish dark:border-whitish focus:outline-none focus:ring-0 scrollbar-thin scrollbar-track-white  scrollbar-thumb-black`}
            >
              <option value="">{t("companychoice.label")}</option>
              {Object.values(companies).map((company, key) => (
                <option key={key} value={company.name}>
                  {company.name}
                </option>
              ))}
            </select>
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
              <div className="bg-transparent border rounded-md border-black dark:border-whitish w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-teal dark:focus-within:border-teal">
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
                type="submit"
                clickHandler={() => {
                  console.log(loginFormData);
                  handleSubmit;
                }}
              />
              <Button
                color="black"
                name={t("login.label")}
                type="button"
                clickHandler={navigateLogin}
              />
            </div>
          </form>
        </>
      )}
    </section>
  );
}
export default SignUp;
