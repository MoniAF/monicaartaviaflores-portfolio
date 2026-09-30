# Mónica Artavia Flores — Portfolio

A responsive personal portfolio built with **Vue 3, Vue Router, Vite, and SCSS**. It presents my software projects, technical skills, professional experience, education, certifications, and community work.

**Live portfolio:** [monicaartaviaflores-portfolio.vercel.app](https://monicaartaviaflores-portfolio.vercel.app/)

## Features

- Responsive layouts for mobile, tablet, and desktop.
- Section-aware navigation with a collapsible mobile menu.
- Project cards with category filters and individual project pages.
- Project image galleries with an accessible lightbox, previous/next controls, and keyboard navigation.
- Dedicated sections for skills, work experience, education, languages, certifications, and contact information.
- Accessibility details such as a skip link, visible keyboard focus, descriptive image text, and reduced-motion support.

## Projects

- **Bloom Recipes Remastered** — A recipe platform with search, filters, saved recipes, and an administration interface.
- **Hotel Beach SA Remastered** — A hotel management application with customer, employee, package, and reservation features.
- **Poppy Cat Sitter** — A Java desktop game.
- **BreT Database Management** — An Oracle database project featuring relational design and PL/SQL.
- **Community Digital Support (TCU)** — Digital content and online presence work supporting community businesses.

## Built with

- Vue 3
- Vue Router
- Vite
- SCSS / Sass
- JavaScript and semantic HTML

## Run locally

## Run locally

The portfolio uses **Vue 3 and Vite** and requires **Node.js and npm**.

Open a terminal in the repository root, the folder containing `package.json`.

Install dependencies:

```bash
npm install
```

Start the Vite development server:
```bash
npm run dev
```

Open the local URL displayed in the terminal, usually:
http://localhost:5173

## Project structure

```text
src/
├── components/       Reusable navigation, project cards, and image gallery
├── data/
│   ├── profile.js    Skills, experience, and certifications
│   └── projects.js   Project details, links, technologies, and screenshots
├── router/           Vue Router configuration
├── views/            Home, project details, and not-found pages
└── assets/scss/      SCSS tokens, mixins, and page/component styles

public/
├── favicon.svg
└── images/projects/  Project and TCU screenshots
```

## AI assistance

AI was part of my learning process while building this portfolio. I used it to explore ideas, understand concepts, and work through coding challenges. I reviewed and adapted the suggestions along the way to make the project my own.