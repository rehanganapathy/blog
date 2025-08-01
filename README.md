# Finance Blog - INSIGHT

A sophisticated React-based finance blog application featuring clean design, smooth interactions, and responsive layout.

## Features

- **Modern UI/UX**: Clean, minimalist design with smooth animations and custom cursor effects
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Component Architecture**: Well-organized, modular React components for maintainability
- **Interactive Navigation**: Smooth page transitions and mobile-friendly navigation
- **Professional Content**: Sample financial analysis, research projects, and professional profiles

## Tech Stack

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast development server and build tool
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Beautiful, customizable icons
- **Custom Hooks**: Reusable logic for mouse tracking and other interactions

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CursorDot.jsx   # Custom cursor effect
│   ├── Navigation.jsx   # Header navigation
│   ├── Footer.jsx      # Footer component
│   └── Preloader.jsx   # Loading screen
├── pages/              # Page-level components
│   ├── HomePage.jsx    # Landing page
│   ├── AboutPage.jsx   # About page
│   ├── AnalysisPage.jsx # Market analysis page
│   ├── ResearchPage.jsx # Research projects page
│   └── ContactPage.jsx # Contact form page
├── hooks/              # Custom React hooks
│   └── useMousePosition.js # Mouse position tracking
├── App.jsx            # Main application component
└── index.css          # Global styles and Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js (version 18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd finance-blog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Customization

### Adding New Pages

1. Create a new component in the `src/pages/` directory
2. Import and add the new page to the `renderPage()` function in `App.jsx`
3. Add navigation links in `Navigation.jsx`

### Modifying Styles

The project uses Tailwind CSS. You can:
- Modify the `tailwind.config.js` file to customize the design system
- Add custom CSS in `src/index.css` if needed
- Use Tailwind classes directly in components

### Adding Content

- **Articles**: Modify the arrays in `AnalysisPage.jsx` and `ResearchPage.jsx`
- **Team Information**: Update the data in `AboutPage.jsx`
- **Contact Information**: Modify the contact details in `ContactPage.jsx`

## Design System

The application follows a consistent design system:

- **Colors**: Neutral palette (gray-50 to gray-900)
- **Typography**: Light font weights with wide letter spacing
- **Spacing**: Consistent padding and margins using Tailwind's scale
- **Animations**: Subtle hover effects and smooth transitions

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
