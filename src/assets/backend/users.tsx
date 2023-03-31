type User = {
  id: number;
  firstname: string;
  lastname: string;
  name: string;
  picture: string;
  poste: string;
  company: string;
  description: string;
  followers: number;
  following: string[];
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
    company: "Be education",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followers: 257,
    following: ["Marc Doe", "Jane Doe", "BeCode"],
  },
  4: {
    id: 4,
    firstname: "John",
    lastname: "Doe",
    name: "JohnDoe",
    picture: "/src/content/profile14.png",
    poste: "Etudiante",
    company: "BeCode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followers: 270,
    following: ["Marc Doe", "Jane Doe", "BeCode", "Sophie Doe"],
  },
  5: {
    id: 5,
    firstname: "James",
    lastname: "Doe",
    name: "JamesDoe",
    picture: "src/content/profile3.png",
    poste: "Etudiante",
    company: "BeCode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followers: 270,
    following: ["Marc Doe", "Jane Doe", "BeCode", "Sophie Doe"],
  },
  6: {
    id: 6,
    firstname: "John",
    lastname: "Smith",
    name: "JohnSmith",
    picture: "/src/content/profile2.png",
    poste: "Développeur web",
    company: "Bibliothèque sans frontières",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followers: 1000,
    following: ["Jane Doe", "Bibliothèque sans frontières"],
  },

  7: {
    id: 7,
    firstname: "Emily",
    lastname: "Wilson",
    name: "EmilyWilson",
    picture: "/src/content/profile3.png",
    poste: "Designer graphique",
    company: "CodeNplay",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followers: 500,
    following: ["John Smith", "CodeNplay"],
  },

  8: {
    id: 8,
    firstname: "Adam",
    lastname: "Jones",
    name: "AdamJones",
    picture: "/src/content/profile4.png",
    poste: "Ingénieur logiciel",
    company: "CWF",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followers: 750,
    following: ["Emily Wilson", "CWF"],
  },

  9: {
    id: 9,
    firstname: "Sara",
    lastname: "Lee",
    name: "SaraLee",
    picture: "/src/content/profile5.png",
    poste: "Chef pâtissière",
    company: "eqla",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followers: 1200,
    following: ["Adam Jones", "eqla"],
  },

  10: {
    id: 10,
    firstname: "Mike",
    lastname: "Miller",
    name: "MikeMiller",
    picture: "/src/content/profile6.png",
    poste: "Analyste financier",
    company: "EducIT",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followers: 900,
    following: ["Sara Lee", "EducIT"],
  },

  11: {
    id: 11,
    firstname: "Anna",
    lastname: "Garcia",
    name: "AnnaGarcia",
    picture: "/src/content/profile7.png",
    poste: "Marketing Manager",
    company: "Google digitaal atelier",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followers: 800,
    following: ["Mike Miller", "Google digitaal atelier"],
  },

  12: {
    id: 12,
    firstname: "Jack",
    lastname: "Harrison",
    name: "JackHarrison",
    picture: "/src/content/profile8.png",
    poste: "Chef de projet",
    company: "Google digitaal atelier",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followers: 600,
    following: ["Anna Garcia", "Google digitaal atelier"],
  },

  13: {
    id: 13,
    firstname: "Lucas",
    lastname: "Gonzalez",
    name: "LucasGonzalez",
    picture: "/src/content/profile9.png",
    poste: "Développeur logiciel",
    company: "Solvay",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followers: 1100,
    following: ["Jack Harrison", "Solvay"],
  },
};
export default Users;
