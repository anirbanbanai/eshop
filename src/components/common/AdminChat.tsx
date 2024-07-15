/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

interface Message {
  _id?: string;
  text: string;
  sender: string;
  receiver: string;
  timestamp?: string;
  seen: boolean;
}

interface User {
  _id: string;
  name: string;
  image: string; // Assuming user data has an img property
}

interface IFormInput {
  message: string;
}

const AdminChat: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [currentUserName, setCurrentUserName] = useState<string | null>(null);
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // Fetch all users
      const usersResponse = await axios.get(
        "https://e-server-beta.vercel.app/api/v1/user"
      );
      const allUsers = usersResponse.data;

      // Fetch messages to find unique user IDs who have messaged the admin
      const messagesResponse = await axios.get(
        "https://e-server-beta.vercel.app/api/v1/messages"
      );
      const messages = messagesResponse.data;

      // Extract unique user IDs who sent messages to the admin
      const userIds = new Set(
        messages
          .filter((msg: Message) => msg.receiver === "admin") // Filter messages where the receiver is the admin
          .map((msg: Message) => msg.sender)
      );

      // Filter users based on the unique IDs from messages
      const filteredUsers = allUsers.filter((user: User) =>
        userIds.has(user._id)
      );

      setUsers(filteredUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

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

  const handleUserSelect = (userId: string, userName: string) => {
    setCurrentUserId(userId);
    setCurrentUserName(userName);
    fetchMessages(userId);
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (data.message.trim() && currentUserId) {
      const newMessage = {
        text: data.message,
        sender: "admin", // Set sender to admin's ID
        receiver: currentUserId, // Use current user ID as receiver
        seen: false,
      };
      try {
        const response = await axios.post(
          "https://e-server-beta.vercel.app/api/v1/messages",
          newMessage
        );
        setMessages((prevMessages) => [...prevMessages, response.data]);
        reset(); // Clear input field
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
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Users</h2>
        <ul>
          {users.map((user) => (
            <li
              key={user._id}
              className={`p-2 border mt-2 rounded-lg cursor-pointer ${
                currentUserId === user._id
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
              onClick={() => handleUserSelect(user._id, user.name)}
            >
              <div className="flex items-center max-sm:justify-center">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-8 h-8 rounded-full mr-2 "
                />

                <span className="max-sm:hidden">{user.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex flex-col p-4 bg-gray-100">
        {/* <h2 className="text-xl font-bold mb-4">
          {currentUserName ? `Chat with ${currentUserName}` : "Chat with User"}
        </h2> */}

        {currentUserId ? (
          <h2 className="text-xl font-medium mb-4">Chat with <span className="font-bold">{currentUserName}</span> </h2>
        ) : (
          <h2 className="text-xl font-bold mb-4">Chat with User</h2>
        )}

        <div className="flex-1 overflow-auto p-4 bg-white rounded-lg shadow-lg">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className={`p-2 my-2 ${
                msg.sender === "admin" ? "text-right" : "text-left"
              }`}
              onClick={() => markMessageAsSeen(msg)} // Mark message as seen on click
            >
              <span
                className={`inline-block px-4 py-2 rounded-lg ${
                  msg.sender === "admin"
                    ? "bg-blue-500 text-white"
                    : msg.seen
                    ? "bg-gray-200"
                    : "bg-red-500"
                }`}
              >
                {msg.text}
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

export default AdminChat;
