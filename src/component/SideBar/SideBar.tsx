import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import RoundButton from "../Button/RoundButton";
import arrow from "../../content/arrow.svg";
import Checkbox from "../Checkbox/Checkbox";
import { Filters } from "../../assets/interface/Filters";
import Toggle from "../../component/Dark/Dark";
type FilterValue = {
  [key: string]: boolean;
};
interface Props {
  onChange: (value: Filters) => void;
  isOpen: boolean;
  toggleSideBar: () => void;
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
    "Le wagon",
    "mediawijs",
    "Orange Digital Center",
    "skills factory",
    "Solvay",
    "Switchfully",
    "Teach for belgium",
    "Techies lab",
    "Agence Digitale Solidaire",
    "alan",
    "AR#S",
    "beAngels",
    "bundl",
    "campfire",
    "clyde.and.bonnie",
    "Curewiki",
    "d-teach",
    "D4D HUB",
    "DataPrep",
    "FARI",
    "flowchase",
    "Free Ukraine",
    "hub brussels",
    "inflights",
    "M44",
    "Mojo",
    "moon9",
    "nextmo-ov",
    "nextORIGIN",
    "NOSKUA",
    "Outsight Studio",
    "redpencil.io",
    "RingTwice",
    "Rosa",
    "SCALEFUND",
    "Simple Backups",
    "skipr",
    "SocialCom",
    "sortlist",
    "startup factory",
    "Stooml-nk.",
    "sustAIn.brussels",
    "tech eu",
    "TYREL",
    "UNBLND",
    "Valkuren",
    "zerocopy",
    "ALLIED FOR STARTUPS",
    "The Democratic Society",
    "Ecas",
    "ESN",
    "King Baudouin Foundation",
    "open knowledge belgium",
    "We tech care",
  ];
  const subjects = [t("hiring.label"), t("internship.label"), t("event.label")];
  const { onChange, toggleSideBar, isOpen } = props;
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
  };
  const [hideButton, setHideButton] = useState(false);

  return (
    <>
      <Button
        name={t("filter.label")}
        color="black"
        clickHandler={() => {
          toggleSideBar();
          setHideButton(!hideButton);
        }}
        hide={hideButton}
        class="m-4 mb-0 lg:fixed"
      />
      <form
        className={
          !isOpen
            ? "hidden"
            : "h-[calc(100vh-48px)] bg-black shadow-xl shadow-whitish text-white lg:flex lg:flex-col lg:px-20 lg:pb-20 p-4 lg:fixed"
        }
      >
        <div className="flex justify-between items-center">
          <RoundButton
            color="black"
            svg={<img src={arrow} alt="go back" className="w-1/2" />}
            clickHandler={() => {
              setHideButton(false);
              toggleSideBar();
            }}
            classname=""
          />
          <Toggle />
        </div>
        <div className="flex justify-center h-[90%] lg:h-full flex-col mb-5 ">
          <div className="overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-grey flex lg:block">
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
              toggleSideBar();
              setHideButton(!hideButton);
            }}
            class="flex justify-center items-center m-auto my-5"
          />
        </div>
      </form>
    </>
  );
}
export default SideBar;
