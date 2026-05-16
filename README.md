# OneClickHuman: Free AI to Human Content Converter

> Convert AI-generated content into human-like, undetectable text in one click.
## Project Overview

OneClickHuman is a web application that transforms AI-generated content into natural, human-like text. It preserves formatting, corrects grammar, and helps bypass AI detectors such as ZeroGPT and GPTZero. The platform supports 10+ languages, and is ideal for bloggers, marketers, and content creators.
## Core Features

- Convert AI-generated text into simple, natural, and human-like writing with real-time streaming responses, while also helping bypass AI detection tools like ZeroGPT.
- Supports 10+ multiple languages with a simple and user-friendly editor, allowing users to work comfortably with content in different languages.
- Complete user authentication system including login, registration wit Next-Auth.
- Users can subscribe, make payments, and upgrade their plans easily through Stripe integration.
- User dashboards for users to manage subscriptions, accounts.
- Separate admin dashboard to manage users, payments, application settings, and filter user/payment data easily.
- Clean and responsive interface designed to work smoothly across desktop, tablet, and mobile devices.
- Light and dark theme support to provide a more comfortable and customizable user experience.

## Tech Stack

- **Framework**: Next.js 14
- **Frontend**: React 18, Bootstrap 5, Sass
- **State Management**: Redux Toolkit
- **Authentication**: next-auth
- **Rich Text Editing**: Slate.js
- **Data Visualization**: Recharts
- **Payments**: Stripe API
- **Other Libraries**: react-toastify, react-select, dompurify.
## Project Structure

```
├── app/                # Next.js app directory (routing, pages, API)
│   ├── home/           # Home page and logic
│   ├── humanizer/      # Main content conversion tool
│   ├── dashboard/      # User dashboard
│   ├── admin/          # Admin dashboard & management
│   └── ...             # Other feature pages
├── components/         # Reusable React components
├── context/            # React context and hooks
├── data/               # Static JSON data (pricing, features, etc.)
├── public/             # Static assets (images, fonts, CSS)
├── store/              # Redux store setup
├── next.config.mjs     # Next.js configuration
├── package.json        # Project metadata and dependencies
└── jsconfig.json       # Path aliases
```
## How to get started

1. **Install dependencies:**
	```bash
	npm install
	```
2. **Run the development server:**
	```bash
	npm run dev
	```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.
## Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform supporting Next.js. For custom domain and environment setup.