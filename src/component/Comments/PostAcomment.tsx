import RoundButton from "../Button/RoundButton";
import hearth from "../../content/heart.svg";

interface Props {
  yourPicture: string;
}
function PostAcomment(props: Props) {
  return (
    <div className="flex">
      <img
        className="w-10 h-10 rounded-full object-cover"
        src={props.yourPicture}
        alt="Your profile picture"
      />
      <input
        className="rounded-full border border-gray-400"
        placeholder="Something to say?"
      ></input>
      <RoundButton
        color="teal"
        svg={hearth}
        clickHandler={() => console.log("<3")}
      />
    </div>
  );
}
export default PostAcomment;
