# 🚀 Deployment Guide

## Vercel Deployment (Recommended)

### Step 1: Push to GitHub ✅
Already done! Your code is at:
https://github.com/dhanushkumar-karuppasamy/dhanushkumar-portfolio

### Step 2: Deploy on Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import `dhanushkumar-karuppasamy/dhanushkumar-portfolio`
5. **IMPORTANT**: Add Environment Variable
   - Key: `VITE_OPENAI_API_KEY`
   - Value: `your_openai_api_key_here`
6. Click "Deploy"

### Step 3: Custom Domain (Optional)

- Free: `your-portfolio.vercel.app`
- Custom: Add your `.tech` domain in Vercel settings

## 🔒 Security Note

Your OpenAI API key is:
- ✅ Stored in `.env` (gitignored)
- ✅ Not pushed to GitHub
- ✅ Must be added to Vercel environment variables

## 📦 Manual Deployment

```bash
npm run build
# Upload `dist/` folder to any static host
```

## 🧪 Test Locally

```bash
npm install
npm run dev
# Visit http://localhost:5173
```

## ✨ Features Live

- ✅ Dark/Light mode
- ✅ Responsive design
- ✅ AI Chatbot (OpenAI GPT-3.5)
- ✅ Smooth animations
- ✅ GitHub project links
- ✅ Resume download
