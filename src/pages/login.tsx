import React, { ChangeEvent, useState } from "react";
import Button from "../component/Button/Button";
import Input from "../component/Input/Input";
import { useNavigate } from "react-router-dom";
import Notification from "../component/Notification/Notification"; // import the Notification component

function Login() {
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

  return (
    <section className="p-4">
      <div className="bg-[#F4E3D7] rounded-xl w-full p-4 flex flex-col justify-center">
        <form onSubmit={handleSubmit}>
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
            label={"Password"}
            value={loginFormData.password}
            onChange={handleInputChange}
          />
          <div className="flex justify-center">
            <Button
              color="black"
              name="Login"
              type="submit"
              clickHandler={() => console.log(loginFormData)}
            />
          </div>
        </form>
      </div>

      <Notification
        title="Error"
        isOpen={false}
        toggleNotification={toggleNotification}
      >
        {errorMessage}
      </Notification>
    </section>
  );
}

export default Login;
