import RoundButton from "../Button/RoundButton";
import send from "../../content/send.svg";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  yourPicture: string;
}
function PostAcomment(props: Props) {
  const { t } = useTranslation();
  const [comment, setComment] = useState("");
  const handleComment = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setComment(value);
  };
  return (
    <form className="flex justify-between p-4">
      <img
        className="w-10 h-10 rounded-full object-cover"
        src={props.yourPicture}
        alt="Your profile picture"
      />
      <input
        className="rounded-full border p-1 px-2 border-gray-400 sm:flex-1 sm:mx-4"
        placeholder={t("placeholder.label") as string}
      ></input>
      <RoundButton
        color="teal"
        svg={<img src={send} alt="send" className="w-1/2 translate-x-[-2px]" />}
        clickHandler={() => console.log(comment)}
        classname=""
        type="submit"
      />
    </form>
  );
}
export default PostAcomment;
