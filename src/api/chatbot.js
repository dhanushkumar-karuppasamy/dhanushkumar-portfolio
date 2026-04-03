import axios from "axios";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const sendMessage = async (message, conversationHistory = []) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant for Dhanush Kumar's portfolio website. 
            
About Dhanush:
- Data Analyst and AI Enthusiast based in India
- Skills: Python, SQL, Power BI, AWS, Azure, Pandas, NumPy, Scikit-learn, XGBoost, TensorFlow, SHAP
- Projects: BiasLens AI (bias detection), Multi-Agent Stock Market (LLM trading), ETL Banking System, NameFlux (username system)
- Passionate about explainable AI, data engineering, and machine learning

Answer questions professionally and concisely. Be friendly and helpful.`
          },
          ...conversationHistory,
          { role: "user", content: message }
        ],
        max_tokens: 200,
        temperature: 0.7
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${OPENAI_API_KEY}`
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Chatbot API Error:", error);
    throw new Error("Failed to get response. Please try again.");
  }
};
