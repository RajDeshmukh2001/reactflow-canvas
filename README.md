# ReactFlow Canvas

## Overview

The application is an interactive App Graph Builder that allows users to visualize and interact with application service graphs. Users can select an application, view its service topology on a ReactFlow canvas, and inspect or modify node-specific properties through a dedicated inspector panel.

The project focuses on:
- Interactive graph visualization
- State management best practices
- Server state caching and data fetching
- Responsive UI design
- Type-safe development with strict TypeScript
- Clean and maintainable architecture

> It is a take-home assignment for the Frontend Engineering Intern (React) role at [Ainyx Solutions](https://www.ainyx.co/).
> 
> [Assignment Specification](https://seed-iron-189.notion.site/Frontend-Intern-Task-2cad8175d68b80b39d65ea7a4fd6d13c)

## Tech Stack
#### Core
- React 19
- TypeScript
- Vite

#### UI
- shadcn/ui
- Tailwind CSS
- Lucide Icons

#### State Management
- Zustand

#### Data Fetching
- TanStack Query

#### Graph Visualization
- ReactFlow (xyflow)

#### Tooling
- ESLint
- Prettier
- Husky

## Getting Started
#### Prerequisites
- Node.js 22+
- npm

#### Installation
```bash
npm install
```

#### Development
```bash
npm run dev
```

#### Type Checking
```bash
npm run typecheck
```

#### Linting
```bash
npm run lint
```

#### Production Build
```bash
npm run build
```

#### Preview Build
```bash
npm run preview
```