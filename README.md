# Gen AI & Agentic AI Portfolio

A stunning, modern portfolio website for **Raja Gopal S** — Gen AI Engineer & Agentic AI Architect.

## 🌟 Features

- **Immersive 3D Background** — Neural network visualization with Three.js & React Three Fiber
- **Gen AI/Agentic AI Themed Design** — Neon cyan/purple/pink gradient theme throughout
- **Framer Motion Animations** — Smooth scroll-triggered animations, hover effects, micro-interactions
- **Responsive & Accessible** — Mobile-first, semantic HTML, keyboard navigation
- **Dark Mode Optimized** — Built for dark theme with beautiful gradient meshes
- **Auto-updating Live Stats** — GitHub repo stats refreshed via GitHub Actions
- **Contact Form** — Functional contact form with validation
- **Performance Optimized** — Next.js 14 App Router, code splitting, optimized images

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + @react-three/fiber + @react-three/drei
- **Icons**: Lucide React
- **Fonts**: Inter, JetBrains Mono, Space Grotesk (Google Fonts)
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles + Tailwind + custom utilities
│   ├── layout.tsx           # Root layout with fonts & metadata
│   └── page.tsx             # Main page composing all sections
├── components/
│   ├── Navigation.tsx       # Responsive nav with theme toggle
│   ├── three-scene.tsx      # Three.js neural network, particles, orbs
│   ├── TechStack.tsx        # 5-layer tech stack with live stats
│   ├── Projects.tsx         # 8 featured Gen AI/Agentic AI projects
│   ├── Experience.tsx       # Timeline + certifications
│   ├── Contact.tsx          # Contact methods + form
│   └── Footer.tsx           # Footer with links & live stats
└── public/
    └── (static assets)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm/yarn/pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/Rajagopalhertzian/Myportfolio.git
cd Myportfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Design System

### Color Palette
- **Neon Cyan** (`#00f0ff`) — Primary brand, CTAs, highlights
- **Neon Purple** (`#8b5cf6`) — Secondary, Agentic AI focus
- **Neon Pink** (`#ec4899`) — Accent, Gen AI focus
- **Neon Green** (`#22c55e`) — Success, RAG/Evaluation
- **Neon Orange** (`#f97316`) — Warning, Voice AI
- **Dark** — `#0d0d15` (base), `#11111b` (surface), `#181825` (elevated)

### Typography
- **Display**: Space Grotesk — Headlines, numbers
- **Body**: Inter — UI text, paragraphs
- **Mono**: JetBrains Mono — Code, technical labels, stats

## 📦 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy — zero config needed

The `vercel.json` handles SPA routing and headers.

### Environment Variables

No required environment variables for basic deployment.

## 🔄 Auto-Updating Features

The portfolio includes live stats that auto-refresh via GitHub Actions:
- **Programming Languages** — Detected from repo languages
- **AI/ML Frameworks** — Detected from topics & dependencies
- **Gen AI Projects** — Filtered by AI keywords

See `.github/workflows/profile-tracker.yml` in the profile repo.

## 📄 License

MIT License — feel free to use as inspiration for your own portfolio!

## 🤝 Connect

- **GitHub**: [@Rajagopalhertzian](https://github.com/Rajagopalhertzian)
- **LinkedIn**: [@rajagopals](https://linkedin.com/in/rajagopals)
- **Email**: rajagopals.ai@gmail.com
- **Portfolio**: [Live Site](https://portfolio-flame-ten-86.vercel.app)

---

*Built with ❤️ for the Gen AI community*