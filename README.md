# Vibe Productivity

A gamified productivity web app built with React, Vite, and Tailwind CSS.

## Features

- **Gamification System:** Earn XP, level up, and track your streak.
- **Task Manager:** Add, edit, and delete daily tasks.
- **Dashboard:** View your progress with a clean and modern UI.
- **Animations:** Smooth animations and transitions powered by Framer Motion.
- **Local Storage:** Your data is saved in your browser, so you can pick up where you left off.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Running Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/<your-username>/vibe-productivity.git
   cd vibe-productivity
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

## Deploying to GitHub Pages

1. **Set the correct `base` path in `vite.config.js`:**

   Open `vite.config.js` and change the `base` property to match your repository name:

   ```javascript
   export default {
     // ...
     base: '/your-repository-name/',
     // ...
   };
   ```

2. **Build the project:**

   ```bash
   npm run build
   ```

   This will create a `dist` directory with the production-ready files.

3. **Push the `dist` directory to a `gh-pages` branch:**

   You can use the `gh-pages` package to automate this process:

   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

4. **Configure GitHub Pages:**

   - Go to your repository's settings on GitHub.
   - In the "Pages" section, select the `gh-pages` branch as the source.
   - Save the changes.

Your application will be deployed to `https://<your-username>.github.io/<your-repository-name>/`.
