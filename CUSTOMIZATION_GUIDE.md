# Portfolio Customization Guide

Welcome! This portfolio has been customized for you with placeholder content. Follow this guide to personalize it with your information.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## 📝 Required Customizations

### 1. Personal Information

**File: `translations/en.json`**
- Replace `"Your Name"` with your actual name
- Replace `"[Your Location]"` with your city/country
- Replace `"[Your Profession/Background]"` with your profession
- Replace `"[Your Journey Start]"` with when you started programming
- Replace `"[Your Tech Stack]"` with technologies you learned first
- Replace `"[Your Advanced Skills]"` with advanced technologies you know

### 2. Contact Information

**File: `src/components/pages/home/ContactSection/index.tsx`**
- Replace `your.email@example.com` with your actual email

**File: `src/layouts/Footer/index.tsx`**
- Replace `yourusername` with your actual social media usernames:
  - GitHub: `https://github.com/yourusername`
  - LinkedIn: `https://www.linkedin.com/in/yourusername`
  - Twitter: `https://twitter.com/yourusername`

### 3. Projects

**File: `src/components/pages/home/PortfolioSection/projectItems.ts`**
- Replace placeholder projects with your actual projects
- Update project titles, descriptions, links, and tech stacks
- Add or remove project categories as needed
- Update GitHub repository links

### 4. Resume/CV

**File: `src/layouts/Navbar/index.tsx`**
- Replace `Carey-Wang-Resume-EN.pdf` with your actual resume filename

**File: `public/static/`**
- Add your resume PDF to this directory

### 5. Package Information

**File: `package.json`**
- Replace `"your-portfolio.dev"` with your preferred project name

## 🎨 Optional Customizations

### Colors and Styling
- The portfolio uses Tailwind CSS with a purple/blue color scheme
- Colors are defined in `tailwind.config.ts`
- You can modify the color palette to match your preferences

### Images
- Replace images in `public/images/pages/home/` with your own:
  - `greeting.svg` - Hero section illustration
  - `about-me.svg` - About section illustration  
  - `contact.svg` - Contact section illustration

### Languages
- Currently supports English only
- The project is configured for single-language use

### Domain and Deployment
- Update `next.config.js` if you need specific configurations
- For deployment, consider platforms like Vercel, Netlify, or GitHub Pages

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
├── components/             # React components
│   ├── pages/home/        # Home page sections
│   ├── layouts/           # Layout components (Navbar, Footer)
│   └── ui/                # Reusable UI components
├── icons/                 # SVG icons
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions

translations/              # Internationalization files
public/                    # Static assets
├── images/               # Images and illustrations
└── static/               # Resume PDFs and other files
```

## 🛠️ Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Format code with Prettier

## 📚 Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **next-intl** - Internationalization
- **Radix UI** - Accessible components

## 🎯 Next Steps

1. Customize all placeholder content with your information
2. Add your actual projects and update descriptions
3. Replace images with your own or find suitable alternatives
4. Test the site thoroughly
5. Deploy to your preferred platform
6. Update your domain and social media links

## 💡 Tips

- Keep project descriptions concise but informative
- Use high-quality images for better visual appeal
- Test on different devices and browsers
- Consider adding a favicon and meta tags for SEO
- Regularly update your projects and skills

Happy coding! 🚀