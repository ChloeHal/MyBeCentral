import RoundButton from "../component/Button/RoundButton";
import arrow from "../content/arrow.svg";
import back from "../content/newbackblue.png";
import { useNavigate, useParams } from "react-router-dom";
import companies from "../assets/backend/companies";
import { useState, useEffect } from "react";
import Button from "../component/Button/Button";
import { Translation, useTranslation } from "react-i18next";
interface Company {
  id: number;
  name: string;
  picture: string;
  logo: string;
  description: string;
}
function Company() {
  const { t } = useTranslation();
  const { companyname } = useParams();
  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    const matchingCompany = Object.values(companies).find(
      (u) => u.name === companyname
    );
    if (matchingCompany) {
      setCompany(matchingCompany);
    }
  }, [companyname]);

  const navigate = useNavigate();
  const navigateFeed = () => {
    navigate("/feed");
  };

  return company ? (
    <div className="h-screen flex items-center justify-center relative bg-whitish dark:bg-black dark:text-whitish">
      <div className="absolute z-50 w-20 h-20 md:w-24 md:h-24">
        <img src={company.logo} className="object-cover bg-grey" />
      </div>
      <RoundButton
        clickHandler={navigateFeed}
        classname="absolute z-50 w-12 h-12 bg-black/50 md:w-12 md:h-12 top-0 left-0 mt-4 ml-4"
        color=""
        svg={<img src={arrow} className="h-1/2 -translate-x-[2px]" />}
      />
      <div className="flex flex-col h-screen lg:flex-row w-full">
        <div className="h-1/2 relative lg:h-full lg:w-1/2 shadow-2xl ">
          <img src={company.picture} className="w-full h-full object-cover" />
        </div>
        <div
          style={{ backgroundImage: `url(${back})` }}
          className="h-1/2 flex flex-col justify-center bg-center bg-cover items-center relative lg:w-1/2 lg:h-full"
        >
          <div className="flex flex-row my-4 mx-6 w-2/3 justify-center">
            <div className="flex flex-col text-3xl w-2/3 px-4 justify-center items-center h-full md:text-3xl">
              <h1 className="text-center">{company.name}</h1>
            </div>
          </div>
          <div className="overflow-y-auto mx-6 md:w-2/3 md:text-l">
            <p className="text-center">{company.description}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      style={{ backgroundImage: `url(${back})` }}
      className="h-screen bg-whitish dark:bg-dark dark:text-whitish lg:bg-right bg-right-bottom max-w-full flex justify-center items-center flex-col bg-cover bg-no-repeat"
    >
      <main className="text-center">
        <h1 className="text-[60px]">404</h1>
        <p className="leading-6">{t("404.label")}</p>
        <p>{t("404p.label")}</p>
      </main>
      <Button
        name={t("goback.label")}
        color="teal"
        class="m-8"
        clickHandler={navigateFeed}
      />
    </div>
  );
}

export default Company;
