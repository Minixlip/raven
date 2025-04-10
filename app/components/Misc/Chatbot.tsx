import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input;
    setInput('');

    try {
      const res = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentInput }),
      });

      const data = await res.json();

      setMessages((prev) => [...prev, { text: data.response, sender: 'bot' }]);
    } catch (err) {
      console.error('Error talking to chatbot:', err);
      setMessages((prev) => [
        ...prev,
        { text: 'Error: Could not contact chatbot.', sender: 'bot' },
      ]);
    }
  };

  // Handle key press events
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default action (e.g., adding a newline)
      sendMessage();
    }
  };

  return (
    <div
      className={`fixed bottom-4 right-4 flex flex-col items-end z-[999] bg-black border border-gray-200 ${
        !open ? 'border border-red-500 rounded-full ' : ''
      }`}
    >
      {open && (
        <div className="bg-black shadow-lg rounded-lg w-80 p-4 ">
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
                    ? 'bg-blue-500 text-white self-end'
                    : 'bg-white text-black self-start'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex border-t pt-2">
            <textarea
              className="flex-1 border p-2 rounded-l-lg bg-transparent"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress} // Add the key press handler
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
        className={`rounded-full p-3 shadow-lg ${open && 'hidden'}`}
        onClick={() => setOpen(!open)}
      >
        <MessageSquare />
      </button>
    </div>
  );
}
