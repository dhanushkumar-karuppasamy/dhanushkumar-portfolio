# 🚀 Portfolio - Dhanush Kumar

**Data Analyst | AI Enthusiast**

Modern, production-grade portfolio built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 Cream White + Black premium minimal design
- 🌗 Dark/Light mode toggle
- 📱 Fully responsive
- ⚡ Smooth animations with Framer Motion
- 🤖 AI Chatbot (OpenAI ready)
- 📄 Resume download
- 🔗 GitHub project links

## 🛠️ Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Create .env file and add your OpenAI API key
cp .env.example .env
# Edit .env and add: VITE_OPENAI_API_KEY=your_key_here

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🤖 AI Chatbot Setup

1. Get your OpenAI API key from [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create `.env` file in root directory
3. Add: `VITE_OPENAI_API_KEY=your_key_here`
4. The chatbot will automatically connect to GPT-3.5-turbo

## 📦 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Manual Build

```bash
npm run build
# Upload `dist` folder to any static host
```

## 🎨 Customization

- **Colors**: Edit `tailwind.config.js`
- **Projects**: Update `src/data/projects.js`
- **Content**: Modify components in `src/components/`

## 📝 License

MIT © Dhanush Kumar
