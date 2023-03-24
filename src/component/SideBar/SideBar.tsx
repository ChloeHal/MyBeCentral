import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import RoundButton from "../Button/RoundButton";
import arrow from "../../content/arrow.svg";
import Checkbox from "../Checkbox/Checkbox";
const Companies = [
  "19",
  "Alter Educs",
  "Be education",
  "BeCode",
  "Bibliothèque sans frontières",
  "Bruxelles formation",
  "Cosearching Brussels",
  "CodeNplay",
  "Cool@School",
  "CWF",
  "eqla",
  "EducIT",
  "Google digitaal atelier",
  "Hack your future",
  "Khan Academy",
];
function SideBar() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState([]);
  const [hideButton, setHideButton] = useState(false);
  const [hideSideBar, setHideSideBar] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setHideButton(false);
    } else if (window.innerWidth > 1024) {
      setHideButton(true);
      setHideSideBar(false);
    }
  }, []);

  return (
    <>
      <Button
        name={t("filter.label")}
        color="black"
        clickHandler={() => {
          setHideSideBar(!hideSideBar);
          setHideButton(!hideButton);
        }}
        hide={hideButton}
      />
      <form
        className={
          hideSideBar
            ? "hidden"
            : "h-[calc(100vh-48px)] bg-black text-white lg:flex lg:flex-col lg:px-20 lg:py-10 p-4 lg:fixed"
        }
      >
        <RoundButton
          color="black"
          svg={<img src={arrow} alt="go back" className="w-1/2" />}
          clickHandler={() => {
            setHideButton(false);
            setHideSideBar(!hideSideBar);
          }}
          classname="lg:hidden"
        />
        <div className="flex justify-center h-3/4 lg:h-full lg:flex-col mb-5 overflow-y-scroll lg:scrollbar-thin lg:scrollbar-track-black lg:scrollbar-thumb-grey">
          <section>
            <h3 className="font-title text-lg py-3">Companies</h3>
            {Companies.map((company, key) => (
              <Checkbox key={key} checkboxValue={company} />
            ))}
          </section>
          <section>
            <h3 className="font-title text-lg py-3">Subjects</h3>
            <Checkbox checkboxValue={t("hiring.label")} />
            <Checkbox checkboxValue={t("internship.label")} />
            <Checkbox checkboxValue={t("event.label")} />
          </section>
        </div>
        <Button
          name={t("validate.label")}
          color="teal"
          clickHandler={() => console.log("click")}
          class="flex justify-center items-center m-auto"
        />
      </form>
    </>
  );
}
export default SideBar;
