import React from "react";
import logo from "../content/logo.png";
import back from "../content/backblue.png";
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
        <h1 className="text-black text-2xl font-bold mt-6 mb-8">
          Connect and collaborate right next to your office
        </h1>

        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 text-white rounded py-2 px-4 mr-2"
            onClick={onLogin}
          >
            Se connecter
          </button>
          <button
            className="bg-gray-500 text-white rounded py-2 px-4"
            onClick={onSignup}
          >
            S'inscrire
          </button>
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
