# LEAGUEYRAD

A production-ready Next.js digital pack opening simulator inspired by premium digital ripping platforms.

## What is included

- Next.js App Router
- TypeScript
- Tailwind CSS
- WebGL 3D pack animation with React Three Fiber
- PSA-style slab reveal
- One Piece + NBA-style simulated card database
- API route for opening packs
- Local browser inventory
- Firebase config file ready for future auth/cloud sync
- Vercel config
- Mobile-native bottom navigation

## How to run locally

1. Install Node.js from https://nodejs.org
2. Open Terminal / Command Prompt in this folder
3. Run:

```bash
npm install
npm run dev
```

4. Open this in your browser:

```txt
http://localhost:3000
```

## How to deploy on Vercel

1. Create a GitHub account
2. Create a new repository
3. Upload this whole folder to GitHub
4. Create a Vercel account
5. Click New Project
6. Import your GitHub repository
7. Click Deploy

Vercel will give you a public link like:

```txt
https://leagueyrad.vercel.app
```

## Firebase

Firebase is optional for this version. The app works without Firebase because inventory is saved locally.

When you want cloud login/inventory sync:

1. Create Firebase project
2. Copy Firebase web app keys
3. Add them to `.env.local`
4. Connect Firestore/Auth in `firebase/client.ts`

## Important

This is a free simulator. Do not add real-money paid random rewards until you have legal advice for your region.
