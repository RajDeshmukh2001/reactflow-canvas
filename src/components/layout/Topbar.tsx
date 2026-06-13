import React from 'react';
import { ModeToggle } from '../mode-toggle';

const Topbar = (): React.JSX.Element => {
  return (
    <nav className="flex h-16 items-center justify-between border-b px-4">
      <h1 className="text-lg sm:text-xl font-semibold">ReactFlow Canvas</h1>

      <ModeToggle />
    </nav>
  );
};

export default Topbar;
