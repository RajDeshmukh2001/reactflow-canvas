import { create } from 'zustand';

type AppStore = {
  selectedAppId: string | null;
  selectedNodeId: string | null;
  isMobilePanelOpen: boolean;

  setSelectedAppId: (appId: string) => void;
  setSelectedNodeId: (nodeId: string | null) => void;
  setMobilePanelOpen: (isOpen: boolean) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  selectedAppId: null,
  selectedNodeId: null,
  isMobilePanelOpen: false,

  setSelectedAppId: (appId: string) =>
    set({
      selectedAppId: appId,
      selectedNodeId: null,
    }),
  setSelectedNodeId: (nodeId: string | null) => set({ selectedNodeId: nodeId }),
  setMobilePanelOpen: (isOpen: boolean) => set({ isMobilePanelOpen: isOpen }),
}));
