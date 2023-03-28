import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import RoundButton from "../Button/RoundButton";
import arrow from "../../content/arrow.svg";
import Checkbox from "../Checkbox/Checkbox";
import { Filters } from "../../assets/interface/Filters";
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

type FilterValue = {
  [key: string]: boolean;
  hiring: boolean;
  internship: boolean;
  event: boolean;
};
interface Props {
  onChange: (value: Filters) => void;
}

function SideBar(props: Props) {
  const { t } = useTranslation();
  const { onChange } = props;
  const [filter, setFilter] = useState<Filters>({});

  useEffect(() => {
    const initialFilters: Filters = {};
    Companies.forEach((company) => {
      initialFilters[company] = false;
    });
    initialFilters.hiring = false;
    initialFilters.internship = false;
    initialFilters.event = false;
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
        <div className="flex justify-center h-3/4 lg:h-full lg:flex-col mb-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-grey">
          <section>
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
          <section>
            <h3 className="font-title text-lg py-3">Subjects</h3>
            <Checkbox
              checkboxValue={t("hiring.label")}
              onChange={handleCheckboxInputChange}
              checked={filter.hiring}
            />
            <Checkbox
              checkboxValue={t("internship.label")}
              onChange={handleCheckboxInputChange}
              checked={filter.internship}
            />
            <Checkbox
              checkboxValue="Event"
              onChange={handleCheckboxInputChange}
              checked={filter.event}
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
          class="flex justify-center items-center m-auto"
        />
      </form>
    </>
  );
}
export default SideBar;
