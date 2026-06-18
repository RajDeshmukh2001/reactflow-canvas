import { create } from 'zustand';
import type { Edge } from '@xyflow/react';
import type { MetricKey, ServiceNode } from '@/types/node';

type AppStore = {
  selectedAppId: string | null;
  selectedNodeId: string | null;
  isMobilePanelOpen: boolean;

  nodes: ServiceNode[];
  edges: Edge[];

  setNodes: (nodes: ServiceNode[]) => void;
  setEdges: (edges: Edge[]) => void;

  setSelectedAppId: (appId: string) => void;
  setSelectedNodeId: (nodeId: string | null) => void;
  setMobilePanelOpen: (isOpen: boolean) => void;
  updateNodeMetric: (nodeId: string, metricKey: MetricKey, value: number) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  selectedAppId: null,
  selectedNodeId: null,
  isMobilePanelOpen: false,

  nodes: [],
  edges: [],

  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),

  setSelectedAppId: (appId: string) =>
    set({
      selectedAppId: appId,
      selectedNodeId: null,
    }),
  setSelectedNodeId: (nodeId: string | null) => set({ selectedNodeId: nodeId }),
  setMobilePanelOpen: (isOpen: boolean) => set({ isMobilePanelOpen: isOpen }),

  updateNodeMetric: (nodeId, metricKey, value) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId
          ? {
              ...node,
              data: {
                ...node.data,
                metrics: {
                  ...node.data.metrics,
                  [metricKey]: value,
                },
              },
            }
          : node,
      ),
    })),
}));
