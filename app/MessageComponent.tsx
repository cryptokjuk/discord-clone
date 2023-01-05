import { useSession } from "next-auth/react";
import Image from "next/image";
import { Message } from "../typings";
import TimeAgo from "react-timeago";

type Props = {
  message: Message;
};
function MessageComponent({ message }: Props) {
  const { data: session } = useSession();
  const isUser = session?.user?.email === message.email;

  return (
    <div className="message__box">
      <div className="message__image">
        <Image
          className="bottom__img"
          width={45}
          height={45}
          src={message.profilePic}
          alt=""
        />
      </div>
      <div className="message__text__text">
        <div className="message__username">
          <p>{message.username}</p>
          <p className="message__time">
            <TimeAgo date={new Date(message.created_at)} />
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/7641/7641727.png"
            alt=""
            className={`checkmark-none ${isUser && "checkmark"}`}
          />
        </div>
        <p className="message__text1">{message.message}</p>
      </div>
    </div>
  );
}

export default MessageComponent;
