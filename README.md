# Auralyn

Auralyn is a responsive single-page studio website for an AI, technology, and digital-product brand. It presents the studio's products, technology, capabilities, selected work, process, and contact call to action through an animated, editorial-style interface.

## Highlights

- Responsive desktop and mobile navigation
- Smooth anchor navigation between page sections
- Motion-driven entrances, hover states, and floating interface elements
- Sections for conversational AI, computer vision, AI automation, technology, capabilities, work, process, and contact
- Tailwind CSS styling with a custom visual system, gradients, grain, and responsive layouts

## Built with

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide](https://lucide.dev/) icons

## Getting started

### Prerequisites

- Node.js 20.19+ or 22.12+ (compatible with Vite 8)
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal (typically `http://localhost:5173`).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with hot module replacement. |
| `npm run build` | Creates an optimized production build in `dist/`. |
| `npm run preview` | Serves the production build locally. |
| `npm run lint` | Runs ESLint across the project. |

## Project structure

```text
src/
├── components/
│   ├── Navbar.jsx        # Responsive navigation and mobile menu
│   ├── Hero.jsx          # Landing section and product showcase
│   ├── Products.jsx      # AI product categories
│   ├── Technology.jsx    # Technology overview and marquee
│   ├── Capabilities.jsx  # Studio expertise
│   ├── FeaturedWork.jsx  # Selected project presentations
│   ├── Process.jsx       # Four-stage delivery process
│   ├── About.jsx         # Studio introduction
│   ├── CTA.jsx           # Contact call to action
│   └── Footer.jsx        # Footer navigation and contact link
├── App.jsx               # Page composition
├── index.css             # Global styles and visual utilities
└── main.jsx              # React entry point
```

## Contact

The contact links currently point to [hello@auralyn.com](mailto:hello@auralyn.com).
