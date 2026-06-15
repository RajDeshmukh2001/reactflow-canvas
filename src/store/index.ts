import { create } from 'zustand';

type AppStore = {
  selectedAppId: string | null;
  selectedNodeId: string | null;

  setSelectedAppId: (appId: string) => void;
  setSelectedNodeId: (nodeId: string | null) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  selectedAppId: null,
  selectedNodeId: null,

  setSelectedAppId: (appId: string) =>
    set({
      selectedAppId: appId,
      selectedNodeId: null,
    }),
  setSelectedNodeId: (nodeId: string | null) => set({ selectedNodeId: nodeId }),
}));
