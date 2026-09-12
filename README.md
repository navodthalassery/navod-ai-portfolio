# Navod PM — AI Portfolio V1

A database-free recruiter portfolio built with Next.js, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Deploy

Recommended: push this folder to GitHub and import the repository into Vercel.
No database, Supabase project or backend is required for V1.

## Homepage 3D background

The decorative 8-second enterprise-AI animation is served from `public/media/` as a small H.264 MP4 with a JPEG poster. `app/components/HeroVideo.tsx` controls playback and includes English/Arabic pause/play labels. It preserves the existing portrait, copy, and theme controls.

Desktop playback starts only when the hero is visible. Small screens, reduced-motion preferences, and data-saving mode default to the still poster without requesting the MP4; visitors can deliberately play the animation. Playback pauses outside the viewport or when the page is hidden. Autoplay rejection leaves manual play available; media errors retain the background poster. A smaller MP4 is used for manual mobile playback.

For future media replacements, keep matching dimensions, a seamless loop, a poster, muted inline playback, and the accessible pause control. Check desktop/mobile, Arabic/RTL, all themes, reduced motion, and failed loading. The animation has no audio or essential information, so captions are not required.

## Content model

The portfolio deliberately separates:

- **Demonstrated enterprise experience** — based on existing professional experience.
- **Current AI focus** — technologies actively being learned/built with and not represented as long-term production experience.

As AI projects are completed, move technologies from `Current AI focus` into concrete project case studies.
