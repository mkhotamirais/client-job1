import { create } from "zustand";

interface MenuState {
  sidebar: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const useMenu = create<MenuState>((set) => ({
  sidebar: false,
  openSidebar: () => set({ sidebar: true }),
  closeSidebar: () => set({ sidebar: false }),
}));
