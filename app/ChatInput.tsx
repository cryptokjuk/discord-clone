"use client";
import React, { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { Message } from "../typings";
import useSWR from "swr";
import fetcher from "../utils/fetchMessages";
import { useSession } from "next-auth/react";

function ChatInput() {
  const [input, setInput] = useState("");
  const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher);
  const { data: session } = useSession();
  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input || !session) return;

    const messageToSend = input;

    setInput("");

    const id = uuid();

    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: session?.user?.name!,
      profilePic: session?.user?.image!,
      email: session?.user?.email!,
    };

    const uploadMessageToUpstash = async () => {
      const data = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      }).then((res) => res.json());

      return [data.message, ...messages!];
    };

    await mutate(uploadMessageToUpstash, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    });
  };

  return (
    <form onSubmit={addMessage}>
      <div id="main-content">
        <div className="input__input">
          <div className="input-container">
            <i className="ri-add-circle-fill"></i>
            <input
              type="text"
              value={input}
              disabled={!session}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Send a Message to this server"
              className="input-box"
            />
            <button disabled={!input} type="submit" className="submit">
              hello
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ChatInput;
