# Insyver Technologies Website

A modern, responsive React website for Insyver Technologies, showcasing comprehensive IT solutions and services.

## 🚀 Features

- **Modern React Architecture**: Built with Vite, React Router, and modern React patterns
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Dark/Light/System Theme**: Advanced theme system with user preference persistence
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Meta tags, structured data, and performance optimizations
- **Contact Integration**: EmailJS integration for contact form submissions
- **Accessibility**: WCAG compliant design and navigation
- **Performance**: Optimized bundle size and loading times

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Forms**: EmailJS integration
- **State Management**: React Context API
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── assets/                 # Static assets (images, icons)
├── components/             # Reusable UI components
│   └── Navbar.jsx         # Navigation component with theme toggle
├── contexts/              # React contexts
│   └── ThemeContext.jsx   # Theme management context
├── pages/                 # Page components
│   ├── Home.jsx          # Landing page with hero animations
│   ├── About.jsx         # Company information and story
│   ├── Services.jsx      # Service portfolio and details
│   ├── Contact.jsx       # Contact form and information
│   ├── PrivacyPolicy.jsx # Privacy policy page
│   ├── TermsOfService.jsx# Terms of service page
│   └── CookiePolicy.jsx  # Cookie policy page
├── styles/               # Global styles and CSS
│   └── global.css       # Custom styles and animations
├── App.jsx              # Main application component
├── main.jsx            # Application entry point
└── index.css           # Tailwind CSS imports
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep blues and purples (#0f0f23, #1a1a2e, #16213e)
- **Accent**: Electric blue (#00d4ff, #00b8d4)
- **Background**: Dark theme with light theme support
- **Text**: High contrast ratios for accessibility

### Typography
- **Primary Font**: Inter (sans-serif)
- **Heading Font**: Poppins (sans-serif)
- **Sizes**: Responsive scaling from mobile to desktop

### Animations
- **Fade In**: Smooth content reveals
- **Slide Up**: Staggered content animations
- **Float**: Subtle background element animations
- **Hover Effects**: Interactive element feedback

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/insyver-technologies.git
   cd insyver-technologies
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📧 EmailJS Configuration

To enable contact form functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up a service and email template
3. Update the service ID, template ID, and public key in `src/pages/Contact.jsx`

```javascript
emailjs.send(
  'your_service_id',     // Replace with your EmailJS service ID
  'your_template_id',    // Replace with your EmailJS template ID
  formData,
  'your_public_key'      // Replace with your EmailJS public key
);
```

## 🎯 Key Features

### Theme System
- **Dark Mode**: Default professional theme
- **Light Mode**: Clean alternative theme
- **System Mode**: Automatic theme based on OS preference
- **Persistence**: Theme preference saved in localStorage

### Navigation
- **Responsive Menu**: Mobile-friendly navigation
- **Dropdown Services**: Expandable services menu
- **Smooth Scrolling**: Anchor links with smooth transitions
- **Active States**: Visual feedback for current page

### Contact Form
- **Validation**: Client-side form validation
- **Email Integration**: Direct email delivery via EmailJS
- **Success/Error States**: User feedback for form submissions
- **Responsive Design**: Optimized for all screen sizes

### Performance
- **Code Splitting**: Lazy loading of routes
- **Image Optimization**: Efficient asset loading
- **Bundle Analysis**: Optimized build sizes
- **Caching**: Browser caching strategies

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

## 🔧 Customization

### Colors
Modify color values in `tailwind.config.js` to match your brand:

```javascript
colors: {
  primary: {
    900: '#your-color',
    // ... other shades
  }
}
```

### Content
Update company information, services, and contact details in the respective page components.

### Animations
Adjust animation timings and effects in Framer Motion components throughout the application.

## 📈 SEO & Performance

- **Meta Tags**: Comprehensive meta information
- **Structured Data**: JSON-LD for rich snippets
- **Open Graph**: Social media optimization
- **Performance**: Lighthouse score optimization
- **Accessibility**: WCAG 2.1 AA compliance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by Insyver Technologies (OPC) Pvt. Ltd.

## 📞 Support

For support or inquiries:
- **Email**: info@insyvertechnologies.com
- **Phone**: +91 98992 13865
- **Address**: P. NO-02 Laxman Vihar, Phase II, New Colony, Gurgaon - 122001, Haryana, India

## 🔄 Updates

Stay updated with the latest features and improvements. Check the changelog for version updates and new features.

---

**Insyver Technologies (OPC) Pvt. Ltd.**  
*Intelligent Systems. Ever Evolving.*
