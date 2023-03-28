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
    event.preventDefault();

    const value = event.target.value;

    setComment(value);

    console.log(comment);
  };
  const postComment = () => {
    console.log(comment);
    //ici il faudra ajouter dans l'array avec les autres comments et du coup il sera visible
  };
  return (
    <form className="flex justify-between p-4 pl-6">
      <img
        className="w-10 h-10 rounded-full object-cover"
        src={props.yourPicture}
        alt="Your profile picture"
      />
      <input
        className="w-[70%] rounded-full border p-1 px-2 border-gray-400 sm:w-full sm:flex-1 sm:mx-4 focus:ring-pink focus:ring-2 focus:border-pink focus:outline-none focus:ring-offset-pink"
        placeholder={t("placeholder.label") as string}
        type="text"
        onChange={handleComment}
      />
      <RoundButton
        svg={<img src={send} alt="send" className="w-1/2 translate-x-[-2px]" />}
        clickHandler={postComment}
        classname="bg-blue"
        color=""
        type="submit"
      />
    </form>
  );
}

export default PostAcomment;
