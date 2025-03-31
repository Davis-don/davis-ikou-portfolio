import { create } from 'zustand';

const useSidebarStore = create((set) => ({
  sideBar: false,

  toggleSidebar: () => {
    set((state) => ({
      sideBar: !state.sideBar,
    }));
  },
}));

export default useSidebarStore;
