import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Search from "../../content/search.svg";
import users from "../../assets/backend/users";

interface User {
  id: number;
  firstname: string;
  lastname: string;
  picture: string;
  poste: string;
  company: string;
  description: string;
}
const userArray = Object.values(users) as User[];

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // Effectuez la recherche ici et mettez à jour searchResults
      const results = userArray.filter(
        (user: User) =>
          user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.poste.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.company.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(results);
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
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Résultats de la recherche
                </Dialog.Title>
                <div className="mt-2">
                  {searchResults.length === 0 ? (
                    <p className="text-sm text-gray-500">
                      Aucun résultat trouvé.
                    </p>
                  ) : (
                    <ul className="space-y-4">
                      {searchResults.map((result) => (
                        <li key={result.id} className="text-sm text-gray-700">
                          <a
                            href={`profile/${result.firstname}${result.lastname}`}
                          >
                            {result.firstname} {result.lastname} -{" "}
                            {result.poste} chez {result.company}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-blue-600 border border-transparent rounded-md hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
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
