import profile from "../../content/profile.jpg";
import Comments from "../Comments/Comments";
import PostAcomment from "../Comments/PostAcomment";
interface postProps {
  id: number;
  name: string;
  picture: string;
  poste: string;
  company: string;
  texte: string;
  ashtag: string[];
  commentsProps: commentsProps[];
  postAcommentProps: string;
}
interface commentsProps {
  commentPicture: string;
  commentName: string;
  commentText: string;
  commentID: number;
}
interface postAcommentProps {
  yourPicture: string;
}
function Post(props: postProps) {
  return (
    <section className="border border-gray-400 shadow m-4 sm:m-20 rounded-lg bg-whitish">
      <div className="flex items-center">
        <img
          src={props.picture}
          className="w-12 h-12 rounded-full m-4 object-cover"
          alt="profile picture"
        />
        <div>
          <h3 className="font-title font-bold">{props.name}</h3>
          <h4>
            {props.poste} - {props.company}
          </h4>
        </div>
      </div>
      <div className="p-4 after:block after:mx-auto after:my-0 after:h-1 after:pt-6 after:w-[90%] after:content-[''] after:border-b after:border-b-gray-400">
        <p>{props.texte}</p>
        <p className="pt-4">{props.ashtag.map((item) => item + " ")}</p>
      </div>
      {props.commentsProps.map((comment) => (
        <Comments
          key={comment.commentID}
          commentName={comment.commentName}
          commentPicture={comment.commentPicture}
          commentText={comment.commentText}
        />
      ))}
      <PostAcomment
        yourPicture={props.postAcommentProps}
        commentID={props.id}
      />
    </section>
  );
}
export default Post;
