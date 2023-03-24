import React from "react";
import logo from "../content/logo.png";
import back from "../content/backblue.png";
import Button from "../component/Button/Button";
import { Routes, Route, useNavigate } from "react-router-dom";

function Login() {
  return <h2>Login</h2>;
}

function SignUp() {
  return <h2>sign up</h2>;
}

export default function App() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToSignup = () => {
    navigate("/signup");
  };

  return (
    <div
      style={{ backgroundImage: `url(${back})` }}
      className="bg-amber-50 flex items-center justify-center h-screen"
    >
      <div className="text-center">
        <img src={logo} alt="Logo" className="h-48 mx-auto" />
        <h1 className="text-black text-xl font-title mt-6 mb-8">
          Connect and collaborate right next to your office
        </h1>

        <div className="flex flex-col md:flex-row justify-center mt-6">
          <div className="mx-6 my-3">
            <Button
              clickHandler={navigateToSignup}
              name="S'inscrire"
              color="teal"
            />
          </div>
          <div className="mx-6 my-3">
            <Button
              clickHandler={navigateToLogin}
              name="Se connecter"
              color="black"
            />
          </div>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}
