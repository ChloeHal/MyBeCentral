const posts = {
  1: {
    id: 1,
    name: "Jane Doe",
    picture: "src/content/profile1.png",
    poste: "Etudiante chez BeCode",
    company: "BeCode",
    texte:
      "Je suis ravie d'annoncer que j'ai commencé un nouveau chapitre passionnant dans ma carrière en tant qu'étudiante chez BeCode! J'apprends de nouvelles compétences et je suis impatiente de voir où cela me mènera. #study #skribble",
    ashtag: ["#study", "#skribble"],
    subject: "Embauche",
    comments: [
      {
        commentName: "John Doe",
        commentPicture: "src/content/profile2.png",
        commentText: "Félicitations Jane!",
        commentID: 1,
      },
      {
        commentName: "Jane Doe",
        commentPicture: "src/content/profile3.png",
        commentText: "Bonne chance pour cette nouvelle aventure!",
        commentID: 2,
      },
    ],
  },
  2: {
    id: 2,
    name: "Mc John Doe",
    picture: "src/content/profile4.png",
    poste: "Touriste chez Bruxelles formation",
    company: "Bruxelles formation",
    texte:
      "Je suis en train de visiter Bruxelles et j'ai découvert un endroit incroyable près de la gare. Je recommande vivement le Starbucks local! #station #starbucks",
    ashtag: ["#station", "#starbucks"],
    subject: "Evenement",
    comments: [
      {
        commentName: "John Doe",
        commentPicture: "src/content/profile5.png",
        commentText: "Merci pour la recommandation Mc John!",
        commentID: 1,
      },
      {
        commentName: "Jane Doe",
        commentPicture: "src/content/profile6.png",
        commentText: "J'adore cet endroit aussi!",
        commentID: 2,
      },
    ],
  },
  3: {
    id: 3,
    name: "Jack Doe",
    picture: "src/content/profile7.png",
    poste: "Stagiaire chez 19",
    company: "19",
    texte:
      "Je suis ravi d'avoir décroché un stage chez 19! Je suis impatient d'apprendre de nouvelles choses et de travailler avec une équipe talentueuse. #stage",
    ashtag: ["#stage"],
    subject: "Stage",
    comments: [
      {
        commentName: "John Doe",
        commentPicture: "src/content/profile8.png",
        commentText: "Félicitations Jack, bonne chance pour ton stage!",
        commentID: 1,
      },
      {
        commentName: "Jane Doe",
        commentPicture: "src/content/profile9.png",
        commentText: "Je suis sûr que tu vas réussir!",
        commentID: 2,
      },
    ],
  },
  4: {
    id: 4,
    name: "Sophie Smith",
    picture: "src/content/profile10.png",
    poste: "Designer Graphique",
    company: "Creative Co.",
    texte:
      "Je suis heureuse de partager avec vous mon dernier projet de design graphique pour notre client ABC. C'était un travail passionnant qui m'a permis d'explorer de nouvelles idées et de pousser mes limites créatives. J'adorerais avoir votre avis sur le projet !",
    ashtag: ["#design", "#creativity"],
    subject: "Projet",
    comments: [
      {
        commentName: "John Doe",
        commentPicture: "src/content/profile11.png",
        commentText: "Wow, c'est incroyable !",
        commentID: 1,
      },
      {
        commentName: "Jane Doe",
        commentPicture: "src/content/profile12.png",
        commentText: "Je suis impressionnée par votre travail, Sophie !",
        commentID: 2,
      },
    ],
  },

  5: {
    id: 5,
    name: "Mark Johnson",
    picture: "src/content/profile13.png",
    poste: "Développeur Web",
    company: "Tech Co.",
    texte:
      "Je suis heureux de vous présenter notre dernier projet de développement web, qui a récemment été lancé. Nous avons travaillé dur pour créer une expérience utilisateur de qualité supérieure pour nos clients, et j'aimerais savoir ce que vous en pensez !",
    ashtag: ["#webdev", "#userexperience"],
    subject: "Projet",
    comments: [
      {
        commentName: "John Doe",
        commentPicture: "src/content/profile14.png",
        commentText: "C'est génial, Mark !",
        commentID: 1,
      },
      {
        commentName: "Jane Doe",
        commentPicture: "src/content/profile15.png",
        commentText:
          "J'adore l'interface utilisateur, c'est vraiment convivial !",
        commentID: 2,
      },
    ],
  },
  6: {
    id: 6,
    name: "Sarah Smith",
    picture: "src/content/profile16.png",
    poste: "Ingénieure en informatique",
    company: "Microsoft",
    texte:
      "Je suis ravie de rejoindre l'équipe de Microsoft en tant qu'ingénieure en informatique ! J'ai hâte de travailler sur des projets innovants et de contribuer au développement de nouvelles technologies.",
    ashtag: ["#tech", "#Microsoft"],
    subject: "Nouvel emploi",
    comments: [
      {
        commentName: "John Doe",
        commentPicture: "src/content/profile1.png",
        commentText: "Félicitations Sarah, je suis sûr que tu vas réussir !",
        commentID: 1,
      },
      {
        commentName: "Jane Doe",
        commentPicture: "src/content/profile2.png",
        commentText: "Bravo Sarah, je suis très contente pour toi !",
        commentID: 2,
      },
    ],
  },
  7: {
    id: 7,
    name: "Alexandre Dupont",
    picture: "src/content/profile.png",
    poste: "Développeur Web",
    company: "Freelance",
    texte:
      "Je suis à la recherche de nouveaux projets en tant que développeur web freelance ! Si vous avez besoin d'un site internet ou d'une application web, n'hésitez pas à me contacter.",
    ashtag: ["#webdev", "#freelance"],
    subject: "Recherche de projets",
    comments: [
      {
        commentName: "John Doe",
        commentPicture: "src/content/profile3.png",
        commentText:
          "Salut Alexandre, je vais peut-être avoir un projet pour toi bientôt !",
        commentID: 1,
      },
      {
        commentName: "Jane Doe",
        commentPicture: "src/content/profile4.png",
        commentText:
          "Je te recommande à mes contacts qui cherchent un développeur web, bonne chance !",
        commentID: 2,
      },
    ],
  },
  8: {
    id: 8,
    name: "Sophie Martin",
    picture: "src/content/profile5.png",
    poste: "Consultante en marketing",
    company: "Accenture",
    texte:
      "Je suis ravie de rejoindre l'équipe d'Accenture en tant que consultante en marketing ! J'ai hâte de travailler avec des clients de renom et de contribuer à leur succès.",
    ashtag: ["#marketing", "#Accenture"],
    subject: "Nouvel emploi",
    comments: [
      {
        commentName: "John Doe",
        commentPicture: "src/content/profile6.png",
        commentText:
          "Félicitations Sophie, tu vas faire un excellent travail !",
        commentID: 1,
      },
      {
        commentName: "Jane Doe",
        commentPicture: "src/content/profile7.png",
        commentText:
          "Bravo Sophie, je suis sûre que tu vas réussir chez Accenture !",
        commentID: 2,
      },
    ],
  },
  9: {
    id: 9,
    name: "Jane Doe",
    picture: "src/content/profile8.png",
    poste: "Etudiante",
    company: "BeCode",
    texte:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie felis quis purus maximus euismod. Vivamus diam nibh, tempor in dictum a, pretium vitae augue.",
    ashtag: ["#study", "#skribble"],
    subject: "Embauche",
    comments: [
      {
        commentName: "John Doe",
        commentPicture: "src/content/profile9.png",
        commentText: "Hello baby",
        commentID: 1,
      },
      {
        commentName: "Jane Doe",
        commentPicture: "src/content/profile10.png",
        commentText: "Hi there!",
        commentID: 2,
      },
    ],
  },
  10: {
    id: 10,
    name: "Jane Doe",
    picture: "src/content/profile11.png",
    poste: "Etudiante chez BeCode",
    company: "BeCode",
    texte:
      "Je suis ravie d'annoncer que j'ai commencé un nouveau chapitre passionnant dans ma carrière en tant qu'étudiante chez BeCode! J'apprends de nouvelles compétences et je suis impatiente de voir où cela me mènera. #study #skribble",
    ashtag: ["#study", "#skribble"],
    subject: "Embauche",
    comments: [
      {
        commentName: "John Doe",
        commentPicture: "src/content/profile12.png",
        commentText: "Félicitations Jane!",
        commentID: 1,
      },
      {
        commentName: "Jane Doe",
        commentPicture: "src/content/profile13.png",
        commentText: "Bonne chance pour cette nouvelle aventure!",
        commentID: 2,
      },
    ],
  },
  11: {
    id: 11,
    name: "Mc John Doe",
    picture: "src/content/profile14.png",
    poste: "Touriste chez Bruxelles formation",
    company: "Bruxelles formation",
    texte:
      "Je suis en train de visiter Bruxelles et j'ai découvert un endroit incroyable près de la gare. Je recommande vivement le Starbucks local! #station #starbucks",
    ashtag: ["#station", "#starbucks"],
    subject: "Evenement",
    comments: [
      {
        commentName: "John Doe",
        commentPicture: "src/content/profile15.png",
        commentText: "Merci pour la recommandation Mc John!",
        commentID: 1,
      },
      {
        commentName: "Jane Doe",
        commentPicture: "src/content/profile16.png",
        commentText: "J'adore cet endroit aussi!",
        commentID: 2,
      },
    ],
  },
  12: {
    id: 12,
    name: "Jack Doe",
    picture: "src/content/profile.png",
    poste: "Stagiaire chez 19",
    company: "19",
    texte:
      "Je suis ravi d'avoir décroché un stage chez 19! Je suis impatient d'apprendre de nouvelles choses et de travailler avec une équipe talentueuse. #stage",
    ashtag: ["#stage"],
    subject: "Stage",
    comments: [
      {
        commentName: "John Doe",
        commentPicture: "src/content/profile1.png",
        commentText: "Félicitations Jack, bonne chance pour ton stage!",
        commentID: 1,
      },
      {
        commentName: "Jane Doe",
        commentPicture: "src/content/profile2.png",
        commentText: "Je suis sûr que tu vas réussir!",
        commentID: 2,
      },
    ],
  },
  13: {
    id: 13,
    name: "Sophie Smith",
    picture: "src/content/profile3.png",
    poste: "Designer Graphique",
    company: "Creative Co.",
    texte:
      "Je suis heureuse de partager avec vous mon dernier projet de design graphique pour notre client ABC. C'était un travail passionnant qui m'a permis d'explorer de nouvelles idées et de pousser mes limites créatives. J'adorerais avoir votre avis sur le projet !",
    ashtag: ["#design", "#creativity"],
    subject: "Projet",
    comments: [
      {
        commentName: "John Doe",
        commentPicture: "src/content/profile4.png",
        commentText: "Wow, c'est incroyable !",
        commentID: 1,
      },
      {
        commentName: "Jane Doe",
        commentPicture: "src/content/profile5.png",
        commentText: "Je suis impressionnée par votre travail, Sophie !",
        commentID: 2,
      },
    ],
  },

  14: {
    id: 14,
    name: "Mark Johnson",
    picture: "src/content/profile6.png",
    poste: "Développeur Web",
    company: "Tech Co.",
    texte:
      "Je suis heureux de vous présenter notre dernier projet de développement web, qui a récemment été lancé. Nous avons travaillé dur pour créer une expérience utilisateur de qualité supérieure pour nos clients, et j'aimerais savoir ce que vous en pensez !",
    ashtag: ["#webdev", "#userexperience"],
    subject: "Projet",
    comments: [
      {
        commentName: "John Doe",
        commentPicture: "src/content/profile7.png",
        commentText: "C'est génial, Mark !",
        commentID: 1,
      },
      {
        commentName: "Jane Doe",
        commentPicture: "src/content/profile8.png",
        commentText:
          "J'adore l'interface utilisateur, c'est vraiment convivial !",
        commentID: 2,
      },
    ],
  },
  15: {
    id: 15,
    name: "Sarah Smith",
    picture: "src/content/profile9.png",
    poste: "Ingénieure en informatique",
    company: "Microsoft",
    texte:
      "Je suis ravie de rejoindre l'équipe de Microsoft en tant qu'ingénieure en informatique ! J'ai hâte de travailler sur des projets innovants et de contribuer au développement de nouvelles technologies.",
    ashtag: ["#tech", "#Microsoft"],
    subject: "Nouvel emploi",
    comments: [
      {
        commentName: "John Doe",
        commentPicture: "src/content/profile10.png",
        commentText: "Félicitations Sarah, je suis sûr que tu vas réussir !",
        commentID: 1,
      },
      {
        commentName: "Jane Doe",
        commentPicture: "src/content/profile11.png",
        commentText: "Bravo Sarah, je suis très contente pour toi !",
        commentID: 2,
      },
    ],
  },
  16: {
    id: 16,
    name: "Alexandre Dupont",
    picture: "src/content/profile12.png",
    poste: "Développeur Web",
    company: "Freelance",
    texte:
      "Je suis à la recherche de nouveaux projets en tant que développeur web freelance ! Si vous avez besoin d'un site internet ou d'une application web, n'hésitez pas à me contacter.",
    ashtag: ["#webdev", "#freelance"],
    subject: "Recherche de projets",
    comments: [
      {
        commentName: "John Doe",
        commentPicture: "src/content/profile13.png",
        commentText:
          "Salut Alexandre, je vais peut-être avoir un projet pour toi bientôt !",
        commentID: 1,
      },
      {
        commentName: "Jane Doe",
        commentPicture: "src/content/profile14.png",
        commentText:
          "Je te recommande à mes contacts qui cherchent un développeur web, bonne chance !",
        commentID: 2,
      },
    ],
  },
  17: {
    id: 17,
    name: "Sophie Martin",
    picture: "src/content/profile.png",
    poste: "Consultante en marketing",
    company: "Accenture",
    texte:
      "Je suis ravie de rejoindre l'équipe d'Accenture en tant que consultante en marketing ! J'ai hâte de travailler avec des clients de renom et de contribuer à leur succès.",
    ashtag: ["#marketing", "#Accenture"],
    subject: "Nouvel emploi",
    comments: [
      {
        commentName: "John Doe",
        commentPicture: "src/content/profile1.png",
        commentText:
          "Félicitations Sophie, tu vas faire un excellent travail !",
        commentID: 1,
      },
      {
        commentName: "Jane Doe",
        commentPicture: "src/content/profile2.png",
        commentText:
          "Bravo Sophie, je suis sûre que tu vas réussir chez Accenture !",
        commentID: 2,
      },
    ],
  },
  18: {
    id: 18,
    name: "Jane Doe",
    picture: "src/content/profile.png",
    poste: "Etudiante",
    company: "BeCode",
    texte:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie felis quis purus maximus euismod. Vivamus diam nibh, tempor in dictum a, pretium vitae augue.",
    ashtag: ["#study", "#skribble"],
    subject: "Embauche",
    comments: [
      {
        commentName: "John Doe",
        commentPicture: "src/content/profile1.png",
        commentText: "Hello baby",
        commentID: 1,
      },
      {
        commentName: "Jane Doe",
        commentPicture: "src/content/profile2.png",
        commentText: "Hi there!",
        commentID: 2,
      },
    ],
  },
};

export default posts;
