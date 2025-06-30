# Merna Project

A modern React application built with Vite, TypeScript, and React Router featuring internationalization, theme switching, and responsive design.

## Features

- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 19** - Latest React with modern features
- 🔷 **TypeScript** - Type safety and better developer experience
- 🛣️ **React Router** - Client-side routing with nested routes
- 🌍 **Internationalization** - Multi-language support (English/Arabic)
- 🌙 **Theme Switching** - Light/Dark mode support
- 📱 **Responsive Design** - Mobile-first approach
- 🎨 **Modern UI** - Clean and beautiful user interface

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navigation.tsx  # Navigation bar component
│   └── index.ts        # Component exports
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   ├── NotFound.tsx    # 404 page
│   └── index.ts        # Page exports
├── theme/              # Theme management
│   └── ThemeProvider.tsx
├── assets/             # Static assets
├── App.tsx             # Main app component with routing
├── main.tsx            # App entry point
└── i18n.ts             # Internationalization setup
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd merna-project
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

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Routing

The application uses React Router for navigation with the following routes:

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `*` - 404 Not Found page

## Internationalization

The app supports multiple languages:
- English (en)
- Arabic (ar)

Language can be switched using the language toggle button in the navigation.

## Theme Support

The application supports both light and dark themes:
- Toggle theme using the theme button in the navigation
- Theme preference is persisted across sessions
- Automatic theme detection based on system preference

## Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

Features include:
- Mobile navigation menu
- Responsive grid layouts
- Touch-friendly interface

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Routing
- **i18next** - Internationalization
- **CSS3** - Styling with CSS variables for theming

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
