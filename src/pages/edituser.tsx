import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Input from "../component/Input/Input";
import Button from "../component/Button/Button";
import bg from "../content/newbackblue.png";
import logo from "../content/logoblack.png";

type UserProfile = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  photo: string;
  description: string;
};

const UserProfileForm = () => {
  const { t } = useTranslation();
  const [userProfile, setUserProfile] = useState<UserProfile>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    photo: "",
    description: "",
  });
  const [photoName, setPhotoName] = useState("");

  useEffect(() => {
    // simulate loading user profile data from API
    const mockUserProfile: UserProfile = {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      company: "Acme Inc.",
      photo: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    };
    setUserProfile(mockUserProfile);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserProfile((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // simulate uploading photo to API
      const url = URL.createObjectURL(file);
      setUserProfile((prevState) => ({ ...prevState, photo: url }));
      setPhotoName(file.name);
    }
  };

  const handleSaveChanges = () => {
    // simulate sending updated user profile data to API
    console.log("Updated user profile:", userProfile);
  };
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="h-screen bg-whitish dark:bg-dark dark:text-whitish lg:bg-right bg-right-bottom max-w-full flex justify-center items-center flex-col bg-cover bg-no-repeat"
    >
      {userProfile.photo ? (
        <img
          src={userProfile.photo}
          alt="profile"
          className="w-24 h-24 rounded-full m-4 object-cover"
        />
      ) : (
        <img
          src={logo}
          alt="logo"
          className="w-24 h-24 rounded-full m-4 object-cover"
        />
      )}
      <div className="flex flex-col items-center space-y-4 mx-6">
        <div className="">
          <Input
            type="text"
            name="firstName"
            label={t("FirstName")}
            value={userProfile.firstName}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="lastName"
            label={t("LastName")}
            value={userProfile.lastName}
            onChange={handleInputChange}
          />
          <Input
            type="email"
            name="email"
            label={t("Email")}
            value={userProfile.email}
            onChange={handleInputChange}
          />
          <select
            name="company"
            value={userProfile.company}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleInputChange(e)
            }
            className="block w-full px-3 py-2 text-sm text-black bg-transparent border border-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:border-whitish dark:text-whitish"
          >
            <option value="">Sélectionnez une entreprise</option>
            <option value="entreprise1">Entreprise 1</option>
            <option value="entreprise2">Entreprise 2</option>
            <option value="entreprise3">Entreprise 3</option>
            <option value="entreprise4">Entreprise 4</option>
          </select>

          <input
            id="photo"
            type="file"
            accept="image/*"
            className="block py-2 px-0 mb-6 w-full text-sm text-black bg-transparent border-0 border-b border-black appearance-none dark:text-whitish dark:border-whitish"
            onChange={handlePhotoChange}
          />

          <Input
            type="textarea"
            name="description"
            label={t("Description")}
            value={userProfile.description}
            onChange={handleInputChange}
          />
        </div>
        <Button
          color="black"
          name={t("Save changes")}
          type="submit"
          clickHandler={handleSaveChanges}
        />
      </div>
    </section>
  );
};
export default UserProfileForm;
