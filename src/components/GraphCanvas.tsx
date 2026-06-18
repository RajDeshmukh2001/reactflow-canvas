import { useAppStore } from '@/store';
import useGraph from '@/hooks/useGraph';
import React, { useEffect } from 'react';
import { useTheme } from './theme-provider';
import { Button } from '@/components/ui/button';
import type { ServiceNode } from '@/types/node';
import { Skeleton } from '@/components/ui/skeleton';
import { ReactFlow, Background, Controls, applyNodeChanges, applyEdgeChanges } from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const GraphCanvas = (): React.JSX.Element => {
  const selectedAppId = useAppStore((state) => state.selectedAppId);
  const setSelectedNodeId = useAppStore((state) => state.setSelectedNodeId);
  const { theme } = useTheme();

  const { data: selectedGraph, isPending, isError, refetch } = useGraph(selectedAppId);
  const nodes = useAppStore((state) => state.nodes);
  const edges = useAppStore((state) => state.edges);
  const setNodes = useAppStore((state) => state.setNodes);
  const setEdges = useAppStore((state) => state.setEdges);

  useEffect(() => {
    if (!selectedGraph) return;

    setNodes(selectedGraph.nodes);
    setEdges(selectedGraph.edges);
  }, [selectedGraph, setNodes, setEdges]);

  const handleOnNodeDelete = (deletedNodes: ServiceNode[]) => {
    const deletedIds = deletedNodes.map((node) => node.id);

    setNodes(nodes.filter((node) => !deletedIds.includes(node.id)));
    setEdges(
      edges.filter(
        (edge) => !deletedIds.includes(edge.source) && !deletedIds.includes(edge.target),
      ),
    );

    setSelectedNodeId(null);
  };

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
        onNodesChange={(changes) => setNodes(applyNodeChanges(changes, nodes))}
        onEdgesChange={(changes) => setEdges(applyEdgeChanges(changes, edges))}
        deleteKeyCode={['Backspace', 'Delete']}
        onNodesDelete={handleOnNodeDelete}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </main>
  );
};

export default GraphCanvas;
