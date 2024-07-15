"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuthUser from "../auth/getUser";
import { auth } from "../../../firebase.config";

interface Message {
  _id?: string;
  text: string;
  sender: string;
  receiver: string;
  timestamp?: string;
  seen: boolean;
}

interface User {
  name: string;
  id: string;
}

interface IFormInput {
  message: string;
}

const UserChat: React.FC = () => {
  const { user } = useAuthUser(auth);
  const [messages, setMessages] = useState<Message[]>([]);

  const { register, handleSubmit, reset } = useForm<IFormInput>();

  // Fetch messages when the component mounts or when the user changes
  useEffect(() => {
    if (user) {
      fetchMessages(user._id);
    }
  }, [user]);

  const fetchMessages = async (userId: string) => {
    try {
      const response = await axios.get(
        `https://e-server-beta.vercel.app/api/v1/messages/user/${userId}`
      );
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (data.message.trim() && user) {
      const newMessage = {
        text: data.message,
        sender: user._id,
        receiver: "admin",
        seen: false,
      };
      try {
        const response = await axios.post(
          "https://e-server-beta.vercel.app/api/v1/messages",
          newMessage
        );
        setMessages((prevMessages) => [...prevMessages, response.data]);
        reset(); // Clear the input field
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const markMessageAsSeen = async (message: Message) => {
    if (!message.seen && message._id) {
      try {
        await axios.put(
          `https://e-server-beta.vercel.app/api/v1/messages/${message._id}`,
          { seen: true }
        );
        setMessages(
          messages.map((msg) =>
            msg._id === message._id ? { ...msg, seen: true } : msg
          )
        );
      } catch (error) {
        console.error("Error marking message as seen:", error);
      }
    }
  };

  return (
    <div className="flex h-[500px] max-w-5xl mx-auto">
      <div className="flex-1 flex flex-col p-4 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Chat with Admin</h2>
        <div className="flex-1 overflow-auto p-4 bg-white rounded-lg shadow-lg">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className={`p-2 my-2 ${
                msg.sender === user?._id ? "text-right" : "text-left"
              }`}
              onClick={() => markMessageAsSeen(msg)} // Mark message as seen on click
            >
              <span
                className={`inline-block px-4 py-2 rounded-lg ${
                  msg.sender === user?._id
                    ? "bg-blue-500 text-white"
                    : msg.seen
                    ? "bg-gray-200"
                    : "bg-red-500"
                }`}
              >
                {msg.text}
                {/* Display timestamp */}
                {/* <div className="text-xs text-gray-500">
                  {new Date(msg.timestamp || '').toLocaleString()}
                </div> */}
              </span>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex mt-4">
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg"
            {...register("message", { required: true })}
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserChat;
