function EmailInput() {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
  
      // Regular expression to check if the input is a valid email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (emailRegex.test(inputValue)) {
        setIsValidEmail(true);
      } else {
        setIsValidEmail(false);
      }
    };

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
      class={
        isValidEmail === true
          ? "border-teal-500"
          : isValidEmail === false
          ? "border-pink-500"
          : ""
      }
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
