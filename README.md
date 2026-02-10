# Royal Indian Wedding Invitation - Manshi & Nirbhay

A mobile-first, cinematic digital wedding invitation built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 📱 **Mobile-First Design**: Optimized for 9:16 vertical layout (perfect for WhatsApp).
- 🎨 **Royal Theme**: Elegant Gold & Maroon color scheme with floral decorations.
- 🎵 **Background Music**: Instrumental shehnai with play/pause control.
- ✨ **Animations**: Floating petals, smooth scroll reveals, and entrance animations.
- 📍 **Venue Integration**: Google Maps deep link for easy navigation.
- 📅 **Countdown**: Live timer to the wedding date (11 March 2026).
- 🔗 **Sharing**: WhatsApp share and "Copy Link" buttons.
- 🔍 **SEO Ready**: OpenGraph tags for beautiful link previews.

## Getting Started

1.  **Install Dependencies**:

    ```bash
    npm install
    ```

2.  **Add Music**:
    - Place your `shehnai.mp3` file in the `public/music/` directory.
    - Ensure the file is named `shehnai.mp3` or update the path in `components/AudioPlayer.tsx`.

3.  **Run Locally**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view.

## Project Structure

- `app/`: Next.js App Router pages and layout.
- `components/`: Reusable UI components (Hero, Timeline, etc.).
- `public/`: Static assets (images, music).
- `tailwind.config.ts`: Theme configuration (colors, fonts).

## Deployment (Vercel)

1.  Push this repository to GitHub/GitLab.
2.  Log in to [Vercel](https://vercel.com).
3.  Click "Add New Project" and select your repository.
4.  Keep default settings (Next.js preset).
5.  Click **Deploy**.

## Customization

- **Bride/Groom Details**: Edit `components/HeroSection.tsx`.
- **Dates**: Edit `components/Timeline.tsx` and `components/Countdown.tsx`.
- **Venue**: Edit `components/Venue.tsx`.
- **Colors**: Update CSS variables in `app/globals.css`.
