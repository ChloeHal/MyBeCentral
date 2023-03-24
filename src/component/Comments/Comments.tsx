interface Props {
  commentPicture: string;
  commentName: string;
  commentText: string;
}
function Comments(props: Props) {
  return (
    <>
      <div className="flex m-4 ml-6">
        <img
          src={props.commentPicture}
          className="w-12 h-10 md:w-10 rounded-full object-cover"
          alt="profile picture"
        />
        <div className="ml-4 w-full border border-gray-400 p-2 rounded-lg">
          <h3 className="font-bold">{props.commentName}</h3>
          <p>{props.commentText}</p>
        </div>
      </div>
    </>
  );
}
export default Comments;
