# Face Connect

A lightweight, real-time video calling web application built with **Next.js App Router**, **Clerk authentication**, **Stream Video SDK**, and **Shadcn UI**. This project demonstrates a modern, full-stack Next.js setup using server actions for secure token generation and a fully client-side meeting experience powered by Stream.

## Overview

**Face Connect** is a production-ready sample project showcasing:

- Authentication via **Clerk**
- Real-time video meetings using **Stream Video**
- Server-side token minting with **Next.js server actions**
- UI components built using **Shadcn UI** + Tailwind CSS
- The application is built entirely with the **Next.js App Router**, eliminating the need for a separate Node.js backend.

## Features

- Secure user authentication with Clerk
- Create and join video meetings powered by Stream
- Protected routes using Clerk middleware
- Modern UI built with Tailwind + Shadcn UI
- Short‑lived Stream tokens generated securely using server actions

## Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Clerk**
- **Stream Video SDK**
- **Shadcn UI**
- **Tailwind CSS**

## Getting Started

### Prerequisites

- Node.js **16+**
- A **Clerk** account
- A **Stream** account
- A `.env.local` file

## Step-by-Step Setup Guide

1. **Clone the repository**

   ```bash
   git clone https://github.com/Itsmesachin98/face-connect.git
   cd "face-connect"
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env.local`**

   ```txt
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
   STREAM_SECRET_KEY=your_stream_secret_key

   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open the app**

   http://localhost:3000

---

## How Stream Tokens Work

### Server

`actions/stream.actions.ts`:

- Fetches the authenticated Clerk user
- Mints a short-lived Stream token using `@stream-io/node-sdk`
- Ensures sensitive keys stay server-side

### Client

`providers/StreamClientProvider.tsx`:

- Initializes `StreamVideoClient`
- Requests a token when needed through the `tokenProvider` server action

---

## Project Structure

```
app/
  layout.tsx
  (auth)/
  (root)/
  (root)/meeting/[id]/

actions/
  stream.actions.ts

providers/
  StreamClientProvider.tsx

components/
hooks/
middleware.ts
```

---

## Scripts

| Command         | Description           |
| --------------- | --------------------- |
| `npm run dev`   | Start dev server      |
| `npm run build` | Build for production  |
| `npm start`     | Run production server |
| `npm run lint`  | Lint the project      |

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Open a pull request

Please follow conventional commits and maintain code style using ESLint.

---

## License

This project is licensed under the **MIT License**.

---

## Acknowledgements

- **Next.js** – App Router framework
- **Clerk** – Authentication
- **Stream Video** – Real-time video SDK
- **Shadcn UI** – Beautiful reusable components
- **Tailwind CSS** – Utility-first styling
