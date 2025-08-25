# Habitus Health Website

A modern, professional website for Habitus Health - a workplace safety and compliance platform that protects workforces and builds resilience.

## 🚀 Features

- **Modern Design**: Clean, professional design with blue/green health/safety theme
- **Responsive Layout**: Optimized for desktop with mobile-friendly design
- **Interactive Elements**: Smooth animations, hover effects, and micro-interactions
- **Mega Menu**: Comprehensive navigation with sector-specific dropdowns
- **Contact Forms**: Professional demo booking forms with validation
- **Newsletter Signup**: Built-in email subscription functionality
- **Blog Ready**: Structure prepared for weekly blog posts
- **Performance Optimized**: Fast loading with Next.js and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with React 18
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React for consistent iconography
- **TypeScript**: Full type safety throughout the application

## 📁 Project Structure

```
habitus-website/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage
│   └── contact/           # Contact page
├── components/             # Reusable React components
│   ├── Navigation.tsx     # Main navigation with mega menu
│   ├── Hero.tsx           # Hero section
│   ├── ProofSection.tsx   # Trust indicators and stats
│   ├── SectorsSection.tsx # Sector tiles
│   ├── ChallengesSection.tsx # H&S challenges
│   ├── SolutionsSection.tsx  # What Habitus delivers
│   ├── ModulesSection.tsx    # Platform modules
│   ├── CaseStudiesSection.tsx # Case studies
│   ├── FinalCTA.tsx       # Final call-to-action
│   ├── ContactForm.tsx    # Demo booking form
│   └── Footer.tsx         # Footer with newsletter signup
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd habitus-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors
The design system uses a custom color palette defined in `tailwind.config.js`:

- **Primary**: Blue tones (#0ea5e9 to #0c4a6e)
- **Secondary**: Green tones (#22c55e to #14532d)
- **Accent**: Gray tones for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Components
All components are built with Tailwind CSS classes and can be easily customized by modifying the component files.

## 📱 Responsive Design

The website is designed with a desktop-first approach but includes responsive breakpoints:

- **Desktop**: 1024px+ (lg:)
- **Tablet**: 768px+ (md:)
- **Mobile**: Default (sm: and below)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Content Management

### Adding Blog Posts
The structure is prepared for blog functionality. To add blog posts:

1. Create markdown files in a `content/blog/` directory
2. Use the existing blog components and routing
3. Posts support frontmatter for metadata

### Updating Content
- **Text Content**: Edit component files directly
- **Images**: Place in `public/` directory and reference
- **Links**: Update href attributes in components

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Custom domain can be configured in Vercel dashboard

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **AWS Amplify**: Build command: `npm run build`
- **Traditional hosting**: Build with `npm run build` and serve the `.next` directory

## 📊 Performance

- **Lighthouse Score**: Optimized for 90+ performance
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting by Next.js

## 🔒 Security

- **Form Validation**: Client and server-side validation with Zod
- **HTTPS**: Enforced in production
- **Content Security Policy**: Configurable CSP headers
- **Input Sanitization**: Built-in React protection against XSS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software for Habitus Health.

## 🆘 Support

For support or questions:
- Email: [support@habitushealth.com]
- Documentation: [docs.habitushealth.com]
- Issues: Create an issue in this repository

---

**Built with ❤️ for Habitus Health**
