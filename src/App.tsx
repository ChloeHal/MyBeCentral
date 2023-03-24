import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Feed from "./pages/feed";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import User from "./pages/user";
import Compagny from "./pages/compagny";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/user" element={<User />} />
      <Route path="/compagny" element={<Compagny />} />

      <Route path="/feed" element={<Feed />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;