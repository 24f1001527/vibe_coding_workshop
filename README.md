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
   git clone https://github.com/24f1001527/vibe_coding_workshop.git
   cd vibe_coding_workshop
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

1. **Build the project:**

   ```bash
   npm run build
   ```

   This will create a `dist` directory with the production-ready files.

2. **Deploy to GitHub Pages:**

   The easiest way to deploy your site is to use the `gh-pages` package.

   First, install the package as a dev dependency:
   ```bash
   npm install gh-pages --save-dev
   ```

   Then, add a `deploy` script to your `package.json`:
   ```json
   "scripts": {
     // ...
     "deploy": "gh-pages -d dist"
   }
   ```
   Now, you can deploy your site by running:
    ```bash
    npm run deploy
    ```
   This will push the contents of the `dist` directory to a new `gh-pages` branch on your repository.

3. **Configure GitHub Pages:**

   - Go to your repository's settings on GitHub.
   - In the "Pages" section, select the `gh-pages` branch as the source.
   - Save the changes.

Your application will be deployed to `https://24f1001527.github.io/vibe_coding_workshop/`.
