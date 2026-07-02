# Dhanush Kumar K — Professional Portfolio

Welcome to my professional developer portfolio! This is a modern, high-performance, single-page application showcasing my projects, skills, and background in Artificial Intelligence, Data Science, Data Engineering, and Software Development.

## 🚀 Live Demo & Hosting
The project is optimized for production builds and is ready for direct deployment to **Vercel** or other cloud hosting providers.
* GitHub Repository: `https://github.com/dhanushkumar-karuppasamy/dhanushkumar-portfolio.git`

---

## 🎨 Design & Key Features

* **Domain-Specific 3D Animated Hero**: A custom vector SVG scene featuring a 3D isometric database server rack with blinking slot LEDs feeding data packets into a pulsing neural network node cluster.
* **Dynamic Category Filters**: An interactive, horizontal-scrolling category navigation bar allowing users to seamlessly filter projects between **Machine Learning**, **Full-Stack**, and **Data Engineering** categories with smooth translation animations.
* **Secure Connections**: Advanced security controls implemented on forms:
  * **Spam Honeypots**: Invisible decoy fields to detect and reject bot submissions.
  * **RFC 5322 Email Validation**: Standard regex format checks.
  * **Local Storage Rate Limiting**: Cooldown mechanism preventing brute force submissions (15s cooldown).
  * **Length Caps**: Inputs restricted to 100 characters to prevent buffer-overflow style exploits.
* **Direct Redirections**: Connect and subscribe forms copy the target email address to the clipboard and launch pre-filled Gmail compose pages in a new tab.
* **Responsive Layout**: Customized viewport layout coordinates mapped to responsive properties inside `index.css` for a pixel-perfect, adaptive viewing experience across mobile devices, tablets, and systems.
* **Polished Interactive Accents**: Interactive project cards with translations and glow highlights on hover, custom fade-in animations on tab content switches, and floating notification toast alerts.

---

## 🛠️ Technology Stack
* **Framework**: React 18+ (with Hooks & Functional Components)
* **Language**: TypeScript
* **Styling**: Vanilla CSS (TailwindCSS framework configuration is pre-configured if needed)
* **Icons**: Lucide React
* **Build System**: Vite 6+

---

## 📂 Project Organization

```text
├── .git/                  # Git tracking files
├── public/                # Public assets
│   ├── dk_suit.jpeg       # Profile photo
│   └── resume.pdf         # CV placeholder document
├── src/                   # Main source code
│   ├── App.tsx            # Main layout, tabs, projects list & logic
│   ├── main.tsx           # Application bootstrap loop
│   └── index.css          # Design system, CSS variables & keyframe animations
├── index.html             # Document wrapper & page metadata (Tab Title: dhanushkumar)
├── package.json           # Scripts, dependencies & nested security overrides
├── tsconfig.json          # TypeScript configurations
└── vite.config.ts         # Vite bundler options
```

---

## ⚙️ Local Development

### 1. Installation
Install the package dependencies:
```bash
npm install
```

### 2. Run Dev Server
Launch the development server on localhost:
```bash
npm run dev
```

### 3. Build & Production Check
Compile the production-ready optimized build bundle under `dist/`:
```bash
npm run build
```

---

## ⚡ Deployment to Vercel

This repository is pre-configured for a zero-config setup on Vercel:
1. Push your latest code changes to your GitHub repository.
2. Go to the [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
3. Import your `dhanushkumar-portfolio` repository.
4. Vercel will automatically detect the **Vite** configuration.
5. Click **"Deploy"**. The site will build and deploy in seconds!
