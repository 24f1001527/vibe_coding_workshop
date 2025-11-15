# Vibe Coding Workshop – Gamified Productivity App 🚀

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/24f1001527/vibe_coding_workshop.git
   ```

2. **Install dependencies (both frontend and backend)**
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore and Authentication
   - Copy `.env.example` to `.env` in each directory and fill in your Firebase credentials

4. **Start the app**
   - Backend (if needed):  
     ```bash
     cd backend
     npm start
     ```
   - Frontend:
     ```bash
     cd frontend
     npm start
     ```

5. **Visit the app:**  
   Open [http://localhost:3000](http://localhost:3000) in your browser to see it running!

## 📦 Deployment

### Deploy with Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
2. Build frontend:
   ```bash
   cd frontend && npm run build
   ```
3. Deploy:
   ```bash
   firebase deploy
   ```

You can also deploy with Vercel/Netlify – connect your repo, set environment variables.

## 🔑 Reference Schema

See [`shared/types/vibeSchema.ts`](./shared/types/vibeSchema.ts) for your Firestore collections.

## 🤝 Contributing

Feel free to open an Issue, PR, or discussion!

---

Copilot is powered by AI, so mistakes are possible. Leave a comment via the 👍 👎 to share your feedback and help improve the experience.
