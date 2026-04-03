import { useState } from "react";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";
import axios from "axios";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! Ask me about Dhanush's work, skills, or projects!" }
  ]);

  const handleSend = async () => {
    if (!msg.trim() || loading) return;
    
    const userMsg = msg;
    setMessages([...messages, { role: "user", text: userMsg }]);
    setMsg("");
    setLoading(true);
    
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant for Dhanush Kumar's portfolio. Answer questions about his skills (Python, ML, Data Analysis, AI), projects (BiasLens AI, Multi-Agent Stock Market, ETL Banking System, NameFlux), and experience as a Data Analyst and AI Enthusiast. Be concise and professional."
            },
            { role: "user", content: userMsg }
          ],
          max_tokens: 150
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
          }
        }
      );
      
      const botReply = response.data.choices[0].message.content;
      setMessages(prev => [...prev, { role: "bot", text: botReply }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: "bot", 
        text: "Sorry, I'm having trouble connecting. Please try again later." 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-black dark:bg-white text-white dark:text-black p-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
      >
        {open ? <FiX size={24} /> : <FiMessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl flex flex-col z-50">
          {/* Header */}
          <div className="bg-black dark:bg-white text-white dark:text-black p-4 rounded-t-2xl">
            <h3 className="font-semibold">AI Assistant</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] px-4 py-2 rounded-lg ${
                    m.role === "user"
                      ? "bg-black dark:bg-white text-white dark:text-black"
                      : "bg-gray-100 dark:bg-gray-800"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex gap-2">
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything..."
              disabled={loading}
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none disabled:opacity-50"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-lg hover:opacity-80 transition disabled:opacity-50"
            >
              {loading ? "..." : <FiSend />}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
