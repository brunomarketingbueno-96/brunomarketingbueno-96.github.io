Languages: 🇺🇸 [English](README.md) · 🇧🇷 [Português](README.pt-BR.md) · 🇪🇸 [Español](README.es.md)

---

[![CI - Tests](https://github.com/WillianDDaniel/WillianDDaniel.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/WillianDDaniel/WillianDDaniel.github.io/actions/workflows/ci.yml)

# Willian's Personal Portfolio

A modern, responsive, and multilingual personal portfolio built with React, Vite, and TypeScript. This repository contains the frontend application, designed to showcase my projects, educational background, and professional experience.

---

## Features

**Internationalization (i18n)**
Native support for English, Portuguese (pt-BR), and Spanish. Includes automatic browser language detection using `i18next-browser-languagedetector`.

**Theme Switcher**
Fully integrated Dark and Light modes with automatic system preference detection.

**Contact Form**
Fully functional contact section to get in touch directly.

**UI/UX Details**
Interactive backgrounds using `particles.js`, modern utility-first styling with Tailwind CSS v4, and custom scrollbars.

**Fully Tested**
Configured with Vitest, React Testing Library, and MSW for reliable UI and unit testing.

---

## Tech Stack

| Layer | Technologies |
|---|---|
| Core | React 19, TypeScript, Vite |
| Styling | Tailwind CSS v4, Tailwind Scrollbar |
| Translations | `i18next`, `react-i18next` |
| Testing | Vitest, React Testing Library, jsdom |
| Backend | REST API with Hono + Drizzle ORM *(separate repository)* |

---

## Project Structure

The application flows through a single-page architecture with the following main sections:

```
Header      → Navigation, theme toggle, and language switcher
Hero        → Main introductory banner
About       → Professional summary and skills
Projects    → Showcase of recent work and portfolio items
Educations  → Academic background and certifications
Contact     → Reach out form and social links
Footer      → Copyright and bottom links
```

---

## Getting Started

**Prerequisites**

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

**Installation**

```bash
# Clone the repository
git clone https://github.com/WillianDDaniel/WillianDDaniel.github.io.git

# Navigate to the project directory
cd your-repo-name

# Install the dependencies
npm install
```

**Running the Application**

```bash
npm run dev
```

---

## Available Scripts

```bash
npm run dev        # Starts the local development server
npm run build      # Compiles TypeScript and builds for production
npm run lint       # Runs ESLint to check code quality
npm run preview    # Previews the production build locally
npm run test       # Runs the Vitest test suite
npm run test:ui    # Opens Vitest UI for visual test debugging
```

---

> Developed with coffee and code.