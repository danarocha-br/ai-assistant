# AI Assistant

This monorepo contains all the necessary packages and applications to run this project.

## 🚀 Features

- 🤖 AI-powered chat interface
- 🎨 Responsive UI components
- 📱 Mobile-friendly design
- 🔍 Talent discovery and management
- 📊 Social media analytics
- 🌙 Dark mode support
- 🎯 Type-safe development with TypeScript

## 🏗️ Project Structure

This is a monorepo using [Turborepo](https://turbo.build/repo) and [pnpm](https://pnpm.io/) workspaces. The project is organized as follows:

```
.
├── apps/
│   └── web/          # Next.js web application
├── packages/
│   ├── ui/           # Shared UI components
│   ├── eslint-config # Shared ESLint configuration
│   └── typescript-config # Shared TypeScript configuration
```

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Turborepo](https://turbo.build/repo) - Monorepo tooling
- [pnpm](https://pnpm.io/) - Package manager

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20
- pnpm >= 10.4.1

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-assistant.git
   cd ai-assistant
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

The application will be available at `http://localhost:3000`.

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build all packages and applications
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## 🏗️ Development

### Adding a new package

1. Create a new directory in `packages/`
2. Initialize the package with `pnpm init`
3. Add the package to the workspace in `pnpm-workspace.yaml`

### Adding a new app

1. Create a new directory in `apps/`
2. Initialize the Next.js app
3. Add the app to the workspace in `pnpm-workspace.yaml`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ♥ by **Dana Rocha** :wave: [Get in touch!](https://www.linkedin.com/in/danarocha/)
