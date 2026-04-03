import { useState, useRef, useEffect } from "react";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";
import { sendMessage } from "../../api/chatbot";
import aiImg from "../../assets/ai.svg";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! 👋 Ask me about Dhanush's work, skills, or projects!" }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!msg.trim() || loading) return;

    const userMsg = msg;
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setMsg("");
    setLoading(true);

    try {
      // Build conversation history for context
      const history = messages
        .filter(m => m.role !== "bot" || messages.indexOf(m) > 0)
        .map(m => ({
          role: m.role === "user" ? "user" : "assistant",
          content: m.text
        }));

      const botReply = await sendMessage(userMsg, history);
      setMessages(prev => [...prev, { role: "bot", text: botReply }]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          role: "bot",
          text: "Sorry, I'm having trouble connecting. Please try again later."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-black dark:bg-white text-white dark:text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
        aria-label="Toggle chatbot"
      >
        {open ? <FiX size={28} /> : <FiMessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden">
          
          {/* Header */}
          <div className="bg-black dark:bg-white text-white dark:text-black p-5 flex items-center gap-3">
            <img src={aiImg} alt="AI" className="w-10 h-10" />
            <div>
              <h3 className="font-semibold text-lg">AI Assistant</h3>
              <p className="text-xs opacity-80">Ask me anything about Dhanush</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50 dark:bg-gray-800">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                    m.role === "user"
                      ? "bg-black dark:bg-white text-white dark:text-black rounded-br-none"
                      : "bg-white dark:bg-gray-700 text-black dark:text-white rounded-bl-none shadow-md"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-700 px-4 py-3 rounded-2xl rounded-bl-none shadow-md">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="flex gap-2">
              <input
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={loading}
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-transparent focus:outline-none focus:border-black dark:focus:border-white disabled:opacity-50 transition"
              />
              <button
                onClick={handleSend}
                disabled={loading || !msg.trim()}
                className="bg-black dark:bg-white text-white dark:text-black p-3 rounded-xl hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <FiSend size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
