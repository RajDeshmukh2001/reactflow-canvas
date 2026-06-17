import React from 'react';
import { useAppStore } from '@/store';
import { appGraphs } from '@/data/graph';
import { useTheme } from './theme-provider';
import { ReactFlow, Background, Controls } from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const GraphCanvas = (): React.JSX.Element => {
  const selectedAppId = useAppStore((state) => state.selectedAppId);
  const setSelectedNodeId = useAppStore((state) => state.setSelectedNodeId);
  const { theme } = useTheme();

  const selectedGraph = appGraphs.find((graph) => graph.appId === selectedAppId);
  const nodes = selectedGraph?.nodes ?? [];
  const edges = selectedGraph?.edges ?? [];

  return (
    <main className="flex-7 h-full">
      <ReactFlow
        colorMode={theme}
        nodes={nodes}
        edges={edges}
        onNodeClick={(_, node) => setSelectedNodeId(node.id)}
        onPaneClick={() => setSelectedNodeId(null)}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </main>
  );
};

export default GraphCanvas;
