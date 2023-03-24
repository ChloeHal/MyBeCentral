import Post from "../component/Post/Post";
import profile from "../content/profile.jpg";
const commentsProps = [
  {
    commentName: "John Doe",
    commentPicture: "src/content/profile.jpg",
    commentText: "Hello baby",
  },
  {
    commentName: "Jane Doe",
    commentPicture: "src/content/profile.jpg",
    commentText: "Hi there!",
  },
];
function Feed() {
  return (
    <Post
      name="Jane Doe"
      picture={profile}
      poste="Etudiante"
      company="BeCode"
      texte="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie
        felis quis purus maximus euismod. Vivamus diam nibh, tempor in dictum a,
        pretium vitae augue."
      ashtag={["#study", "#skribble"]}
      commentsProps={commentsProps}
      postAcommentProps={profile}
    />
  );
}
export default Feed;
