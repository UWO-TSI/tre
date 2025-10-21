# TRE - Next.js TypeScript Starter

A modern, production-ready Next.js starter template with TypeScript, Tailwind CSS v4, and best practices built-in.

## 🚀 Features

- ⚡ **Next.js 15.5** - The latest version of Next.js with App Router
- 🔷 **TypeScript** - Type safety and better developer experience
- 🎨 **Tailwind CSS v4** - The latest version with modern CSS capabilities
- 📦 **Optimized Build** - Production-ready build configuration
- 🧪 **Type Checking** - Strict TypeScript configuration
- 🎯 **Developer Experience** - ESLint, Prettier-ready, and hot reload
- 📱 **Responsive** - Mobile-first design approach
- 🌙 **Dark Mode** - Built-in dark mode support
- 📝 **Template System** - Issue and PR templates included

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20.x or higher
- **npm** 10.x or higher (comes with Node.js)

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/UWO-TSI/tre.git
cd tre
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the environment template file and configure your environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual configuration values.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📜 Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality (if configured)

## 📁 Project Structure

```
tre/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles with Tailwind
│   └── favicon.ico        # Favicon
├── public/                # Static files
├── .github/               # GitHub templates
│   ├── ISSUE_TEMPLATE/    # Issue templates
│   └── pull_request_template.md
├── .env.example           # Environment variables template
├── .gitignore            # Git ignore rules
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies
├── postcss.config.mjs    # PostCSS configuration for Tailwind
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## 🎨 Tailwind CSS v4

This project uses Tailwind CSS v4, which features:

- **CSS-first configuration** - Uses `@theme` directive in CSS files
- **Modern CSS features** - Container queries, CSS Grid improvements
- **Improved performance** - Faster build times
- **Better DX** - Enhanced autocomplete and IntelliSense

The global styles are defined in `app/globals.css` using the new v4 syntax:

```css
@import "tailwindcss";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}
```

## 🔧 Configuration

### TypeScript

TypeScript is configured in `tsconfig.json` with strict mode enabled for better type safety.

### Next.js

Next.js configuration is in `next.config.ts`. The project uses:

- App Router (Next.js 13+ routing)
- Turbopack for faster development builds
- Optimized image handling with `next/image`

### Environment Variables

Create a `.env.local` file based on `.env.example` to configure:

- Application settings
- API keys
- Database connections
- Feature flags

**Important:** Never commit `.env.local` to version control. It's already included in `.gitignore`.

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

This will:

1. Type-check your TypeScript code
2. Build and optimize your application
3. Generate static pages where possible
4. Create optimized bundles

To start the production server:

```bash
npm run start
```

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Add your environment variables in the Vercel dashboard

### Other Platforms

You can also deploy to:

- **Netlify** - Configure build command: `npm run build`, publish directory: `.next`
- **AWS Amplify** - Similar configuration to Vercel
- **Docker** - Create a Dockerfile for containerized deployment
- **Self-hosted** - Use `npm run build` and `npm run start` on your server

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request using our PR template

Please ensure:

- Your code follows the project's code style
- All tests pass
- You've updated documentation as needed

## 📝 Issue Templates

When creating an issue, please use one of our templates:

- **Bug Report** - For reporting bugs
- **Feature Request** - For suggesting new features
- **Documentation** - For documentation improvements

## 📚 Learn More

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub](https://github.com/vercel/next.js) - Next.js repository

### Tailwind CSS Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs) - Official documentation
- [Tailwind CSS v4 Blog Post](https://tailwindcss.com/blog/tailwindcss-v4-alpha) - What's new in v4

### TypeScript Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Official TypeScript docs
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) - React + TypeScript guide

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Authors

Created and maintained by the UWO-TSI team.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Type-safe with [TypeScript](https://www.typescriptlang.org/)
