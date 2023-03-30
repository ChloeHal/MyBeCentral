type User = {
  id: number;
  firstname: string;
  lastname: string;
  picture: string;
  poste: string;
  company: string;
  description: string;
};

const Users: Record<number, User> = {
  1: {
    id: 1,
    firstname: "Jane",
    lastname: "Doe",
    name: "JaneDoe",
    picture: "/src/content/profile1.png",
    poste: "Etudiante",
    company: "BeCode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followers: 250,
    following: ["Marc Doe", "BeCode"],
  },
  2: {
    id: 2,
    firstname: "Marc",
    lastname: "Doe",
    name: "MarcDoe",
    picture: "/src/content/profile12.png",
    poste: "Etudiante",
    company: "19",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followers: 25,
    following: ["Jane Doe", "BeCode"],
  },
  3: {
    id: 3,
    firstname: "Sophie",
    lastname: "Doe",
    name: "SophieDoe",
    picture: "/src/content/profile6.png",
    poste: "Etudiante",
    company: "BeCode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followers: 257,
    following: ["Marc Doe", "Jane Doe", "BeCode"],
  },
  4: {
    id: 4,
    firstname: "John",
    lastname: "Doe",
    name: "JohnDoe",
    picture: "/src/content/profile3.png",
    poste: "Etudiante",
    company: "BeCode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followers: 270,
    following: ["Marc Doe", "Jane Doe", "BeCode", "Sophie Doe"],
  },
  5: {
    id: 4,
    firstname: "John",
    lastname: "Doe",
    picture: "src/content/profile3.png",
    poste: "Etudiante",
    company: "BeCode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};
export default Users;
