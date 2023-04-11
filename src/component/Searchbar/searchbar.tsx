import React, { useState } from "react";
import { Dialog, Transition, Tab } from "@headlessui/react";
import Search from "../../content/search.svg";
import users from "../../assets/backend/users";
import companies from "../../assets/backend/companies";
interface User {
  id: number;
  firstname: string;
  lastname: string;
  picture: string;
  poste: string;
  company: string;
  description: string;
}
interface Company {
  id: number;
  name: string;
  picture: string;
  logo: string;
  description: string;
}
const userArray = Object.values(users) as User[];
const companyArray = Object.values(companies) as Company[];
const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<{
    users: Array<User>;
    companies: Array<Company>;
  }>({ users: [], companies: [] });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const userResults = userArray.filter(
        (user: User) =>
          user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.poste.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const companyResults = companyArray.filter((company: Company) =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults({ users: userResults, companies: companyResults });
      setIsModalOpen(true);
    }
  };
  return (
    <>
      <form className="flex items-center justify-end flex-1 cursor-text">
        <div className="relative flex items-center w-11/12 sm:w-40 md:w-48 lg:w-96 xl:w-96 2xl:w-100">
          <input
            className="bg-transparent border border-whitish rounded-full text-whitish h-6 w-full pr-10 py-1 pl-3 sm:pr-2 sm:py-2 sm:pl-4 lg:pr-3 lg:py-3 lg:pl-3 xl:pr-4 xl:py-4 xl:pl-4"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            onKeyPress={handleKeyPress}
          />
          <img
            className="relative h-4 w-4 right-7 sm:right-8"
            src={Search}
            alt="Search icon"
          />
        </div>
      </form>
      <Transition show={isModalOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black dark:bg-whitish opacity-30" />
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              ​
            </span>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 scroll-y-auto overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-dark  shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 dark:text-whitish pb-4"
                >
                  Résultats de la recherche
                </Dialog.Title>
                <Tab.Group>
                  <Tab.List>
                    <Tab>Utilisateurs</Tab>
                    <Tab>Compagnies</Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      {searchResults.users.length === 0 ? (
                        <p className="text-sm text-dark dark:text-whitish">
                          Aucun utilisateur trouvé.
                        </p>
                      ) : (
                        <ul className="space-y-8 scroll-y-auto">
                          {searchResults.users.map((result) => (
                            <li
                              key={result.id}
                              className="text-sm text-gray-700 dark:text-whitish"
                            >
                              <a
                                href={`profile/${result.firstname}${result.lastname}`}
                                className="dark:bg-darkless rounded-md pl-2 pr-4 py-3"
                              >
                                <img
                                  src={result.picture}
                                  className="inline-block w-8 h-8 rounded-full mr-2 object-cover"
                                  alt="Photo de profil miniature"
                                />
                                {result.firstname} {result.lastname} -{" "}
                                {result.poste} chez {result.company}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Tab.Panel>
                    <Tab.Panel>
                      {/* Afficher les résultats de recherche pour les entreprises */}
                      {searchResults.companies.length === 0 ? (
                        <p className="text-sm text-dark dark:text-whitish">
                          Aucune compagnie trouvée.
                        </p>
                      ) : (
                        <ul className="space-y-8 scroll-y-auto">
                          {searchResults.companies.map((result) => (
                            <li
                              key={result.id}
                              className="text-sm text-gray-700 dark:text-whitish"
                            >
                              <a
                                href={`company/${result.name}`}
                                className="dark:bg-darkless rounded-md pl-2 pr-4 py-3"
                              >
                                <img
                                  src={result.logo}
                                  className="inline-block w-8 h-8 rounded-full mr-2 object-cover"
                                  alt="Logo de l'entreprise"
                                />
                                {result.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 mt-4 text-sm font-medium text-black dark:bg-whitish bg-blue-600 border border-transparent rounded-md hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default SearchBar;

