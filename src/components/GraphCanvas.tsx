import React from 'react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import { useTheme } from './theme-provider';

import '@xyflow/react/dist/style.css';

const GraphCanvas = (): React.JSX.Element => {
  const { theme } = useTheme();

  return (
    <main className="flex-7 h-full">
      <ReactFlow colorMode={theme}>
        <Background />
        <Controls />
      </ReactFlow>
    </main>
  );
};

export default GraphCanvas;
