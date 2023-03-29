import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import RoundButton from "../Button/RoundButton";
import arrow from "../../content/arrow.svg";
import Checkbox from "../Checkbox/Checkbox";
import { Filters } from "../../assets/interface/Filters";

type FilterValue = {
  [key: string]: boolean;
};
interface Props {
  onChange: (value: Filters) => void;
}

function SideBar(props: Props) {
  const { t } = useTranslation();
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
  const subjects = [t("hiring.label"), t("internship.label"), t("event.label")];
  const { onChange } = props;
  const [filter, setFilter] = useState<Filters>({});

  useEffect(() => {
    const initialFilters: Filters = {};
    Companies.forEach((company) => {
      initialFilters[company] = false;
    });
    subjects.forEach((subject) => {
      initialFilters[subject] = false;
    });
    setFilter(initialFilters);
  }, []);

  const handleCheckboxChange = (value: string) => {
    setFilter((prevFilter: Filters) => ({
      ...prevFilter,
      [value]: !prevFilter[value],
    }));
  };
  const handleCheckboxInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    handleCheckboxChange(value);
  };
  const handleFilterChange = () => {
    onChange(filter);
    console.log(filter);
  };
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
        class="m-4 mb-0"
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
        <div className="flex justify-center h-[90%] lg:h-full flex-col mb-5 ">
          <div className="overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-grey">
            <section className="lg:flex lg:flex-col">
              <h3 className="font-title text-lg py-3">Companies</h3>
              {Companies.map((company, key) => (
                <Checkbox
                  key={key}
                  checkboxValue={company}
                  checked={filter[company]}
                  onChange={handleCheckboxInputChange}
                />
              ))}
            </section>
            <section className="lg:flex lg:flex-col">
              <h3 className="font-title text-lg py-3">Subjects</h3>
              <Checkbox
                checkboxValue={t("hiring.label")}
                onChange={handleCheckboxInputChange}
                checked={filter[t("hiring.label")]}
              />
              <Checkbox
                checkboxValue={t("internship.label")}
                onChange={handleCheckboxInputChange}
                checked={filter[t("internship.label")]}
              />
              <Checkbox
                checkboxValue={t("event.label")}
                onChange={handleCheckboxInputChange}
                checked={filter[t("event.label")]}
              />
            </section>
          </div>
          <Button
            name={t("validate.label")}
            color="teal"
            clickHandler={() => {
              handleFilterChange();
              if (window.innerWidth < 1024) {
                setHideSideBar(!hideSideBar);
                setHideButton(!hideButton);
              }
            }}
            class="flex justify-center items-center m-auto my-5"
          />
        </div>
      </form>
    </>
  );
}
export default SideBar;
