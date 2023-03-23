import React from "react";
import logo from "../content/logo.png";
import back from "../content/backblue.png";
import Button from "../component/Button/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
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
    <div
      style={{ backgroundImage: `url(${back})` }}
      className="bg-amber-50 flex items-center justify-center h-screen"
    >
      <div className="text-center">
        <img src={logo} alt="Logo" className="h-48 mx-auto" />
        <h1 className="text-black text-xl font-title mt-6 mb-8">
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
    </div>
  );
}
