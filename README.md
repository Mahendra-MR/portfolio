# Mahendra M R - Portfolio Website

Welcome to my personal portfolio built with Next.js. It showcases my work, projects, and resume in a clean, responsive, and interactive way.

**Live Site**: [https://mahendra-mr.netlify.app/](https://mahendra-mr.netlify.app/)

---

## Features

- Clean and responsive layout (mobile-friendly)
- Glassmorphism design with animated background
- GitHub integration to auto-fetch repositories
- Interactive project cards with hover effects
- Resume page with downloadable PDF

---

## Tech Stack

- **Frontend**: Next.js 14, TypeScript
- **Styling**: Tailwind CSS
- **API**: GitHub REST API
- **Hosting**: Netlify

---

## Project Structure

```bash
portfolio-website/
├── app/
│ ├── globals.css
│ ├── layout.tsx
│ ├── page.tsx // Home page
│ ├── projects/page.tsx // Project showcase
│ ├── resume/page.tsx // Resume page
│ └── others/page.tsx // Optional extra content
├── lib/ // Components and utilities
├── netlify.toml // Deployment config
└── README.md

```
---
## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mahendra-mr/portfolio-website.git
cd portfolio-website
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a .env.local file in the root:
```bash
GITHUB_USERNAME=your-github-username
GITHUB_TOKEN=your-github-token
```

### 4. Run the App

```bash
npm run dev
```
Visit: http://localhost:3000

---

## Deployment

###  Using Netlify
- Connect your GitHub repo to Netlify
- Set build command: npm run build
- Set publish directory: .next
- Add GitHub credentials as environment variables
- Deploy and you're live




