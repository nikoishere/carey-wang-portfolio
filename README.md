# Portfolio Template

✨ A modern, responsive portfolio website template built with [NextJS](https://nextjs.org), [TailwindCSS](https://tailwindcss.com), and [TypeScript](https://typescriptlang.org). Features a clean, professional design optimized for English content.

![Portfolio Preview](./src/app/opengraph-image.jpg)

## 🚀 Quick Start

This application requires Node.js v18+.

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd your-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Customization

This template comes with placeholder content that you need to customize with your information. See the [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for detailed instructions.

### Key areas to customize:
- Personal information and bio
- Contact details and social links
- Project portfolio
- Resume/CV files
- Images and assets

## 🛠 Building and Running for Production

1. **Generate a production build**
   ```bash
   pnpm build
   ```

2. **Preview the site**
   ```bash
   pnpm start
   ```

## 📁 Project Structure

```
portfolio-template/
├── public/                 # Static assets
│   ├── images/            # Images and illustrations
│   └── static/            # Resume PDFs and other files
├── src/
│   ├── app/               # Next.js app directory
│   │   └── [locale]/      # App routes
│   ├── components/        # React components
│   │   ├── pages/home/    # Home page sections
│   │   ├── layouts/       # Layout components
│   │   └── ui/            # Reusable UI components
│   ├── icons/             # SVG icons
│   ├── types/             # TypeScript definitions
│   └── utils/             # Utility functions
└── translations/          # English translation file
```

## 🎨 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern Tech Stack** - Next.js 14, TypeScript, Tailwind CSS
- **Accessible** - Built with accessibility in mind
- **SEO Optimized** - Meta tags and structured data
- **Fast Performance** - Optimized for speed and Core Web Vitals

## 🎨 Color Reference

| Color       | Hex                                                                |
| ----------- | ------------------------------------------------------------------ |
| Primary-100 | ![#ffd300](https://via.placeholder.com/10/ffd300?text=+) `#ffd300` |
| Primary-200 | ![#3a10e5](https://via.placeholder.com/10/3a10e5?text=+) `#3a10e5` |
| Primary-300 | ![#10162f](https://via.placeholder.com/10/10162f?text=+) `#10162f` |
| Primary-400 | ![#fff0e5](https://via.placeholder.com/10/fff0e5?text=+) `#fff0e5` |

## 🛠 Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **next-intl** - Internationalization for Next.js
- **Radix UI** - Accessible component primitives

## 📚 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Format code with Prettier

## 🚀 Deployment

This template is ready to deploy on:
- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- Any other hosting platform that supports Next.js

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help customizing this template, please open an issue or reach out to the maintainers.
