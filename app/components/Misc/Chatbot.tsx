import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I'm just a dummy bot!", sender: 'bot' },
      ]);
    }, 1000);
  };

  return (
    <div
      className={`fixed bottom-4 right-4 flex flex-col items-end z-[999] ${
        !open ? 'border border-red-500 rounded-full ' : ''
      }`}
    >
      {open && (
        <div className="bg-black shadow-lg rounded-lg w-80 p-4 border border-gray-200">
          <div className="flex justify-between items-center pb-2 border-b">
            <h2 className="text-lg font-semibold">Chatbot</h2>
            <X
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="h-64 overflow-y-auto flex flex-col gap-2 p-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg ${
                  msg.sender === 'user'
                    ? 'bg-transparent text-white self-end'
                    : 'bg-white text-black self-start'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex  border-t pt-2">
            <input
              className="flex-1 border p-2 rounded-l-lg bg-transparent"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button
              className="rounded-r-lg border border-neutral-500"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
      <button
        className="rounded-full p-3 shadow-lg"
        onClick={() => setOpen(!open)}
      >
        <MessageSquare />
      </button>
    </div>
  );
}
