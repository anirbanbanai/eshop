// components/Chat.tsx
"use client"
import { useState, ChangeEvent, KeyboardEvent } from 'react';

interface Message {
  text: string;
  sender: string;
}

interface User {
  name: string;
  id: string;
}

const demoUsers: User[] = [
  { name: 'Alice', id: 'alice' },
  { name: 'Bob', id: 'bob' }
];

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ [key: string]: Message[] }>({});
  const [input, setInput] = useState('');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const sendMessage = () => {
    if (input.trim() && currentUser) {
      const newMessage = { text: input, sender: 'user' };
      setMessages((prevMessages) => ({
        ...prevMessages,
        [currentUser.id]: [...(prevMessages[currentUser.id] || []), newMessage]
      }));
      setInput('');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const handleUserClick = (user: User) => {
    setCurrentUser(user);
  };

  return (
    <div className="flex h-[500px] max-w-5xl mx-auto">
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Users</h2>
        <ul>
          {demoUsers.map((user) => (
            <li
              key={user.id}
              className={`p-2 border mt-2 rounded-lg cursor-pointer ${currentUser?.id === user.id ? 'bg-blue-500 text-white' : 'bg-white'}`}
              onClick={() => handleUserClick(user)}
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex flex-col p-4 bg-gray-100">
        {currentUser ? (
          <>
            <div className="flex-1 overflow-auto p-4 bg-white rounded-lg shadow-lg">
              {messages[currentUser.id]?.map((msg, index) => (
                <div key={index} className={`p-2 my-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex mt-4">
              <input
                type="text"
                className="flex-1 p-2 border rounded-lg"
                value={input}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <button
                className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a user to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
