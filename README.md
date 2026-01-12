# luckyzz.kr

Minimal portfolio and blog website.

## Features

- ✨ Minimal, monochrome design
- 🎨 Custom typography (PP Lettra Mono, Arita Buri, Mulche)
- 📝 Markdown-based blog
- 🎯 Portfolio/works showcase
- ⚡ Built with Next.js 15 and TypeScript
- 🎨 Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Adding Content

### Blog Posts

Create a new markdown file in `content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2026-01-12"
excerpt: "Brief description"
tags: ["tag1", "tag2"]
---

# Your Post Title

Your content here...
```

### Portfolio Items

Create a new markdown file in `content/works/`:

```markdown
---
title: "Project Name"
date: "2026-01-12"
description: "Project description"
tags: ["design", "development"]
link: "https://example.com"
---

# Project Name

Project details here...
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your custom domain (luckyzz.kr) in the Vercel dashboard

## License

MIT
