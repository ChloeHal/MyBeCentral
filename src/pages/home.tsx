import React from "react";
import logo from "../content/logo.png";
import back from "../content/backblue.png";
import Button from "../component/Button/Button";

interface BannerProps {
  onLogin: () => void;
  onSignup: () => void;
}

const Banner: React.FC<BannerProps> = ({ onLogin, onSignup }) => {
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

        <div className="flex justify-center mt-6">
          <div className="mx-6">
            <Button clickHandler={onSignup} name="S'inscrire" color="teal" />
          </div>
          <div className="mx-6">
            <Button clickHandler={onLogin} name="Se connecter" color="black" />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

const LandingPage: React.FC = () => {
  const handleLogin = () => {
    // Logique de connexion
  };

  const handleSignup = () => {
    // Logique d'inscription
  };

  return (
    <div>
      <Banner onLogin={handleLogin} onSignup={handleSignup} />
    </div>
  );
};

export default LandingPage;
