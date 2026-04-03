# 🚀 Portfolio - Dhanush Kumar

**Data Analyst | AI Enthusiast**

Modern, Figma-inspired portfolio built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 Black & White minimal design (Figma-inspired)
- 🌗 Dark/Light mode toggle
- 📱 Fully responsive
- ⚡ Smooth animations with Framer Motion
- 🤖 AI Chatbot (OpenAI GPT-3.5)
- 📄 Resume download
- 🔗 GitHub project links
- 💬 Testimonials section
- 📧 Contact form

## 🛠️ Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- OpenAI API
- Axios

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
3. Add environment variable: `VITE_OPENAI_API_KEY`
4. Deploy automatically

### Manual Build

```bash
npm run build
# Upload `dist` folder to any static host
```

## 🎨 Customization

- **Colors**: Edit `tailwind.config.js`
- **Projects**: Update `src/data/projects.js`
- **Content**: Modify components in `src/components/sections/`
- **Resume**: Replace `public/DhanushKumar-K Resume2026.pdf`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── assets/           # SVG illustrations
│   ├── components/
│   │   ├── layout/       # Navbar, Footer
│   │   ├── sections/     # Page sections
│   │   └── ui/           # UI components
│   ├── api/              # API handlers
│   ├── data/             # Data files
│   └── App.jsx
├── public/               # Static files
└── package.json
```

## 🎯 Sections

- **Hero**: Introduction with illustration
- **About**: Sidebar layout with detailed bio
- **Skills**: Grid with 10 skills (one featured)
- **Projects**: Numbered alternating layout (01, 02, 03)
- **Testimonials**: 3-column cards (center featured)
- **Contact**: Form + contact info
- **Footer**: Social links

## 📝 License

MIT © Dhanush Kumar

---

Built with ❤️ using React + Tailwind CSS
