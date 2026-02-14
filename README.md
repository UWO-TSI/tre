# TRE - Childcan Website

A modern Next.js website built with TypeScript, Tailwind CSS v4, and Sanity CMS integration.

## 🚀 Features

- ⚡ **Next.js 16** - Latest version with App Router
- 🔷 **TypeScript** - Type safety and better developer experience
- 🎨 **Tailwind CSS v4** - Modern CSS capabilities with @theme directives
- 📦 **Sanity CMS** - Headless CMS for content management
- 🧪 **E2E Testing** - Playwright test suite for quality assurance
- 🎯 **Developer Experience** - ESLint, Prettier, and hot reload
- 📱 **Responsive** - Mobile-first design approach
- 🗺️ **Google Maps** - Interactive location features

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

### Development

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code with Prettier

### Testing

- `npm test` - Run all Playwright tests (headless)
- `npm run test:ui` - Run tests with interactive UI mode
- `npm run test:smoke` - Run quick smoke tests to verify all pages load
- `npm run test:headed` - Run tests in headed mode (visible browser)
- `npm run test:debug` - Run tests in debug mode with Playwright Inspector

## 📁 Project Structure

```
tre/
├── app/                    # Next.js App Router directory
│   ├── (main-route)/      # Main website routes
│   │   ├── page.tsx       # Home page
│   │   ├── about-us/      # About page
│   │   ├── contact/       # Contact page
│   │   ├── events/        # Events pages
│   │   └── ...            # Other routes
│   ├── sanity/            # Sanity Studio integration
│   ├── layout.tsx         # Root layout component
│   └── globals.css        # Global styles with Tailwind
├── components/            # Reusable React components
│   └── header/           # Header and navigation
├── e2e/                  # Playwright E2E tests
│   ├── smoke.spec.ts     # Page load tests
│   ├── navigation.spec.ts # Navigation tests
│   └── forms.spec.ts     # Form interaction tests
├── public/               # Static files
├── .env.example          # Environment variables template
├── playwright.config.ts  # Playwright test configuration
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies
└── tsconfig.json         # TypeScript configuration
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

## 🧪 Testing

This project uses [Playwright](https://playwright.dev/) for end-to-end testing.

### Running Tests

```bash
# Quick smoke tests (recommended before deployment)
npm run test:smoke

# All tests with interactive UI
npm run test:ui

# Run all tests headless
npm test

# Debug a specific test
npm run test:debug
```

### Test Structure

The test suite is located in the `e2e/` directory:

- **smoke.spec.ts** - Verifies all pages load without errors
- **navigation.spec.ts** - Tests header navigation and responsive design
- **forms.spec.ts** - Form interaction tests (customize for your forms)

### What Gets Tested

- ✅ All pages load successfully
- ✅ No console errors on key pages
- ✅ Navigation links work correctly
- ✅ Mobile menu functionality
- ✅ Responsive design across devices
- ✅ Cross-browser compatibility (Chrome, Firefox, Safari)

For more details, see [e2e/README.md](e2e/README.md).

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
