# OneClickHuman: Free AI to Human Content Converter

> Convert AI-generated content into human-like, undetectable text in one click.
## Project Overview

OneClickHuman is a web application that transforms AI-generated content into natural, human-like text. It preserves formatting, corrects grammar, and helps bypass AI detectors such as ZeroGPT and GPTZero. The platform supports 10+ languages, and is ideal for bloggers, marketers, and content creators.
## Core Features

- **AI to Human Content Conversion**: Instantly humanize AI-generated text.
- **AI Detector Bypass**: Bypass tools like ZeroGPT.
- **Multilingual Support**: 10+ languages supported in the editor.
- **Lightning Mode**: Theme mode switching.
- **Stripe Payments**: Secure subscription and payment processing with Stripe.
- **User Authentication**: Secure login and subscription management.
- **Role-based Dashboard**: Admin and user dashboards for management.
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

## License

This project is licensed. Please contact the author for details or see the LICENSE file if available.