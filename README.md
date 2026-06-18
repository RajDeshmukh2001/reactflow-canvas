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

- Clone repository

```bash
git clone https://github.com/RajDeshmukh2001/reactflow-canvas
```

- Change directory

```bash
cd reactflow-canvas
```

- Install dependencies

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

## Features

#### Application Selection

- Browse available applications from the application panel.
- Automatically loads the selected application's service graph.
- Highlights the currently selected application.

#### Interactive Graph Visualization

- Visualize application service dependencies using ReactFlow.
- Supports zooming, panning, and fit-to-view functionality.
- Displays application-specific nodes and connections.

#### Node Selection & Inspection

- Click any node to view its details in the inspector panel.
- Displays service information, status, and metrics.
- Inspector updates automatically when a different node is selected.

#### Node Management

- Drag and reposition nodes directly on the canvas.
- Delete selected nodes using **Delete** or **Backspace** keys.
- Connected edges are removed automatically when a node is deleted.

#### Metric Management

- View service metrics such as CPU, Memory, Disk, and Region.
- Edit metrics using either a slider or numeric input.
- Slider and input remain synchronized.
- Changes are persisted in the application's client-side state.

#### Data Fetching & Caching

- Application and graph data are fetched using TanStack Query.
- Includes loading states with skeleton placeholders.
- Includes error handling with retry actions.

#### Responsive Design

- Optimized for desktop and mobile devices.
- Right-side inspector panel becomes a drawer on smaller screens.
- Responsive layout built with Tailwind CSS and shadcn/ui.

#### Theme Support

- Supports light and dark modes.
- ReactFlow canvas automatically adapts to the selected theme.

## Key Decisions

#### Zustand for Client State

Zustand is used to manage application UI state such as:

- Selected application
- Selected node
- Mobile drawer state
- Graph nodes and edges

This keeps state centralized and avoids prop drilling across components.

#### TanStack Query for Server State

TanStack Query is used for fetching and caching application and graph data. Although the current implementation uses mocked APIs, the same structure can be replaced with real backend APIs without changing component logic.

#### ReactFlow for Graph Visualization

ReactFlow provides built-in support for:

- Node selection
- Node dragging
- Zooming and panning
- Keyboard-based node deletion

This allowed the application to focus on business logic instead of building graph interactions from scratch.

#### Strict TypeScript

Custom types are used for:

- Applications
- Graphs
- Nodes
- Metrics
- Service status

This improves maintainability and reduces runtime errors.

#### Responsive Layout

The right-side inspector panel is displayed as a drawer on smaller screens using shadcn/ui Sheet components and as a fixed panel on larger screens.

## Known Limitations

- Application and graph data are currently mocked and served through simulated API calls.
- Node position changes are stored only in client state and are not persisted across page refreshes.
- Metric updates are stored locally and are not saved to a backend service.
- Service icons are loaded from external logo URLs.
- Node editing functionality is not implemented beyond metric updates.
- Graph changes are not synchronized between browser sessions.
