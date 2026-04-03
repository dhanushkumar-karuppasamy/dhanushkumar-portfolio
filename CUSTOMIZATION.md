# 🎨 Quick Customization Guide

## 📝 Update Your Information

### 1. Hero Section
**File**: `src/components/sections/Hero.jsx`

```jsx
// Line 13-15: Update name and title
<h1>Your Name</h1>
<h2>Your Title</h2>

// Line 17-19: Update bio
<p>Your bio text here...</p>

// Line 23-46: Update social links
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourusername">
<a href="mailto:your@email.com">
```

### 2. About Section
**File**: `src/components/sections/About.jsx`

```jsx
// Line 38-58: Update bio paragraphs
<p>Your story...</p>

// Line 62-77: Update "What I Do" list
<li>Your skill 1</li>
<li>Your skill 2</li>
```

### 3. Projects
**File**: `src/data/projects.js`

```js
export const projects = [
  {
    title: "Your Project Name",
    desc: "Project description",
    link: "https://github.com/yourusername/project",
    tags: ["Tech1", "Tech2", "Tech3"]
  }
];
```

### 4. Skills
**File**: `src/components/sections/Skills.jsx`

```jsx
// Line 6-15: Update main skills with icons
const skills = [
  { name: "YourSkill", icon: SiIcon, color: "#hexcolor" }
];

// Line 60-90: Update skill categories
{["Skill1", "Skill2"].map((item) => ...)}
```

### 5. Experience
**File**: `src/components/sections/Experience.jsx`

```jsx
// Line 5-30: Update work experience
const experiences = [
  {
    role: "Your Role",
    company: "Company Name",
    period: "2023 - Present",
    location: "Location",
    desc: "Description",
    achievements: ["Achievement 1", "Achievement 2"]
  }
];
```

### 6. Contact Info
**File**: `src/components/sections/Contact.jsx`

```jsx
// Line 38-80: Update contact links
<a href="mailto:your@email.com">
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourusername">
```

### 7. Footer
**File**: `src/components/layout/Footer.jsx`

```jsx
// Line 8-10: Update name and title
<h3>Your Name</h3>
<p>Your Title</p>

// Line 15-40: Update social links
```

### 8. Navbar
**File**: `src/components/layout/Navbar.jsx`

```jsx
// Line 10: Update logo/name
<h1>YourName</h1>
```

## 🎨 Replace Illustrations

### Option 1: Use Your Own SVGs
Place your SVG files in `src/assets/`:
- `hero.svg` - Hero section (400x400px recommended)
- `about.svg` - About section (300x300px recommended)
- `projects.svg` - Project cards (400x300px recommended)
- `ai.svg` - Chatbot icon (280x280px recommended)

### Option 2: Free Illustration Sites
- [unDraw](https://undraw.co/) - Customizable illustrations
- [Storyset](https://storyset.com/) - Animated illustrations
- [Illustrations](https://illustrations.co/) - Various styles
- [DrawKit](https://drawkit.com/) - Hand-drawn illustrations

Download SVGs and replace files in `src/assets/`

## 📄 Add Your Resume

1. Export your resume as PDF
2. Name it `resume.pdf`
3. Place in `public/` folder
4. The download buttons will automatically work!

## 🎨 Change Colors

**File**: `tailwind.config.js`

```js
colors: {
  primary: "#111111",    // Change black
  cream: "#f8f6f2"       // Change cream
}
```

## 🤖 Chatbot Customization

**File**: `src/api/chatbot.js`

Update the system prompt (Line 11-20) with your information:
```js
content: `You are a helpful assistant for [Your Name]'s portfolio.

About [Your Name]:
- Your title and skills
- Your projects
- Your expertise

Answer questions professionally.`
```

## 🚀 Deploy Checklist

- [ ] Update all personal information
- [ ] Replace placeholder illustrations
- [ ] Add resume.pdf to public/
- [ ] Update social media links
- [ ] Test chatbot with your OpenAI key
- [ ] Update meta tags in index.html
- [ ] Test on mobile devices
- [ ] Push to GitHub
- [ ] Deploy on Vercel
- [ ] Add custom domain (optional)

## 📱 Test Responsiveness

```bash
npm run dev
```

Then test at these breakpoints:
- Mobile: 375px
- Tablet: 768px
- Desktop: 1440px

## 🎯 SEO Optimization

**File**: `index.html`

```html
<title>Your Name | Your Title</title>
<meta name="description" content="Your description">
```

## 💡 Pro Tips

1. **Keep it Simple**: Don't overcomplicate the design
2. **Fast Loading**: Optimize images (use SVG when possible)
3. **Mobile First**: Test on mobile devices
4. **Clear CTAs**: Make contact buttons prominent
5. **Update Regularly**: Keep projects and blog current

## 🆘 Need Help?

Check these files for examples:
- `UPGRADE_GUIDE.md` - Full documentation
- `DEPLOYMENT.md` - Deployment instructions
- `README.md` - Quick start guide

---

**Time to customize**: ~30 minutes
**Difficulty**: Easy 🟢
