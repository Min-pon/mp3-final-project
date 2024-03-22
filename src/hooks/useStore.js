import { persist } from "zustand/middleware";
import create from "zustand";

const store = persist(
  (set) => ({
    currentType: "",
    setCurrentType: (currentType) => set(() => ({ currentType })),
  }),
  { name: "wdb-state" }
);

export const useStore = create(store);
