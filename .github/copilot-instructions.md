<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a React-based finance blog application built with Vite and styled with Tailwind CSS.

## Architecture Guidelines

- **Component Structure**: Components are organized into `/components` for reusable UI elements and `/pages` for page-level components
- **Hooks**: Custom hooks are stored in `/hooks` directory for reusable logic
- **Styling**: Use Tailwind CSS classes for styling, following the established neutral color palette
- **State Management**: Use React's built-in state management (useState, useEffect)

## Code Style

- Use functional components with hooks
- Prefer arrow function syntax for components
- Use destructuring for props and state
- Keep components small and focused on a single responsibility
- Use semantic HTML elements where appropriate

## Design System

- **Color Palette**: Neutral grays (neutral-50 to neutral-900)
- **Typography**: Light font weights (font-light, font-extralight) with wide tracking
- **Spacing**: Consistent padding and margin using Tailwind's spacing scale
- **Transitions**: Smooth transitions for hover states and interactions

## Component Guidelines

- Each component should be in its own file
- Export components as default exports
- Use PascalCase for component names
- Include PropTypes or TypeScript definitions when needed

## Project Structure

The refactored application follows these architectural patterns:

### Components (`/src/components/`)
- **CursorDot.jsx**: Custom cursor effect component
- **Preloader.jsx**: Loading screen component
- **Navigation.jsx**: Header navigation with responsive menu
- **Footer.jsx**: Footer with disclaimer and branding

### Pages (`/src/pages/`)
- **HomePage.jsx**: Landing page with hero section and previews
- **AboutPage.jsx**: Team information and backgrounds
- **AnalysisPage.jsx**: Market analysis articles and commentary
- **ResearchPage.jsx**: Research projects and publications
- **ContactPage.jsx**: Contact form and information

### Hooks (`/src/hooks/`)
- **useMousePosition.js**: Custom hook for tracking mouse position

### Key Features
- Responsive design with mobile-first approach
- Smooth animations and transitions
- Custom cursor tracking effect
- Loading state management
- Clean, minimal aesthetic focused on readability
- Professional financial industry styling
