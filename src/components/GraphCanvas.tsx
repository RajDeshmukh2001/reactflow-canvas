import { useAppStore } from '@/store';
import useGraph from '@/hooks/useGraph';
import React, { useEffect } from 'react';
import { useTheme } from './theme-provider';
import { Button } from '@/components/ui/button';
import type { ServiceNode } from '@/types/node';
import { Skeleton } from '@/components/ui/skeleton';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  type Edge,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const GraphCanvas = (): React.JSX.Element => {
  const selectedAppId = useAppStore((state) => state.selectedAppId);
  const setSelectedNodeId = useAppStore((state) => state.setSelectedNodeId);
  const { theme } = useTheme();

  const { data: selectedGraph, isPending, isError, refetch } = useGraph(selectedAppId);
  const [nodes, setNodes, onNodesChange] = useNodesState<ServiceNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  useEffect(() => {
    if (!selectedGraph) return;

    setNodes(selectedGraph.nodes);
    setEdges(selectedGraph.edges);
  }, [selectedGraph, setNodes, setEdges]);

  if (isPending && selectedAppId) {
    return (
      <main className="flex-7 h-full p-4">
        <Skeleton className="h-full w-full rounded" />
      </main>
    );
  }

  if (isError) {
    return (
      <main className="flex-7 flex items-center justify-center">
        <div className="text-sm text-destructive space-y-2">
          <p className="text-center">Failed to load graph</p>
          <Button onClick={() => refetch()} className="w-full rounded-sm">
            Retry
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-7 h-full">
      <ReactFlow
        colorMode={theme}
        nodes={nodes}
        edges={edges}
        onNodeClick={(_, node) => setSelectedNodeId(node.id)}
        onPaneClick={() => setSelectedNodeId(null)}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        deleteKeyCode={['Backspace', 'Delete']}
        onNodesDelete={() => setSelectedNodeId(null)}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </main>
  );
};

export default GraphCanvas;
