# 🌟 Diya Garg — Personal Portfolio

A modern, animated personal portfolio built with **React + Vite**, featuring a glassmorphism design, smooth Framer Motion animations, and a cohesive purple-to-pink gradient theme.

---

## ✨ Features

- 🎬 **Intro Splash Screen** — Each letter of "Diya Garg" flies in from alternating sides with spring physics
- 🎨 **Purple × Pink Theme** — Harmonious gradient design system across all components
- 🧠 **Projects Section** — Detailed expandable modal cards with architecture breakdowns
- 🏆 **Milestones Section** — Competitive programming & open-source achievements
- 📄 **Resume Modal** — Inline resume viewer with PDF print support
- 💌 **EmailJS Integration** — Like-button sends an email alert to the owner
- 📱 **Fully Responsive** — Mobile-first layout with smooth transitions
- ⚡ **Fast Build** — Vite-powered, production bundle under 400KB

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Email | EmailJS |
| Linting | Oxlint |

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/diyagarg09/My-Portfolio.git
cd My-Portfolio

# 2. Install dependencies
npm install

# 3. Add environment variables (optional — for EmailJS like-button)
cp .env.example .env
# Fill in your VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY

# 4. Start dev server
npm run dev
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── developer_hero.jpg       # Hero section image
├── src/
│   ├── components/
│   │   ├── IntroSplashScreen.jsx  # Animated splash screen
│   │   ├── Navbar.jsx             # Sticky navigation with like button
│   │   ├── Hero.jsx               # Landing section with typewriter
│   │   ├── About.jsx              # Stats & expertise pillars
│   │   ├── Skills.jsx             # Filterable skill tags
│   │   ├── Projects.jsx           # Project cards with modals
│   │   ├── Competitive.jsx        # Milestones grid
│   │   ├── Footer.jsx             # Footer with social links
│   │   └── ResumeModal.jsx        # Full resume in a modal
│   ├── index.css                  # Global design system & animations
│   └── App.jsx                    # App entry point
├── index.html
└── vite.config.js
```

---

## 🌐 Live Demo

> Coming soon — deploy link will be added here.

---

## 📬 Contact

- **GitHub:** [@diyagarg09](https://github.com/diyagarg09)
- **LinkedIn:** [linkedin.com/in/diyagarg09](https://www.linkedin.com/in/diyagarg09/)
- **Email:** diyagarg9122005@gmail.com

---

<p align="center">Made with ❤️ by Diya Garg</p>
