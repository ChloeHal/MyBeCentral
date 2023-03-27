const posts = {
  1: {
    id: 1,
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
  2: {
    id: 2,
    name: "Mc John Doe",
    picture: "src/content/profile.png",
    poste: "Touriste",
    company: "Bruxelles formation",
    texte:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie felis quis purus maximus euismod. Vivamus diam nibh, tempor in dictum a, pretium vitae augue.",
    ashtag: ["#station", "#starbucks"],
    subject: "Evenement",
    comments: [
      {
        commentName: "John Doe",
        commentPicture: "src/content/profile1.png",
        commentText: "Hello world",
        commentID: 1,
      },
      {
        commentName: "Jane Doe",
        commentPicture: "src/content/profile2.png",
        commentText: "Hi everyone!",
        commentID: 2,
      },
    ],
  },
};
export default posts;
