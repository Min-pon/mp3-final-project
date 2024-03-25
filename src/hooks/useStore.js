import { persist } from "zustand/middleware";
import create from "zustand";

const store = persist(
  (set) => ({
    currentType: "",
    userId: "",
    cartId: "0HrVDEPgTeJhswT42VHs",
    currentProductPermalink: "",
    setCurrentType: (currentType) => set(() => ({ currentType })),
    setUserId: (userId) => set(() => ({ userId })),
    setCartId: (cartId) => set(() => ({ cartId })),
    setCurrentProductPermalink: (currentProductPermalink) =>
      set(() => currentProductPermalink),
  }),
  { name: "wdb-state" }
);

export const useStore = create(store);
