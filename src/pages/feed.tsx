import Post from "../component/Post/Post";
import profile from "../content/profile.png";
import SideBar from "../component/SideBar/SideBar";
const commentsProps = [
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
];
function Feed() {
  return (
    <div className="md:flex">
      <SideBar />
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
    </div>
  );
export default Feed;
