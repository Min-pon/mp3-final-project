import { persist } from "zustand/middleware";
import create from "zustand";
const store = persist(
  (set) => ({
    currentType: "",
    userId: "",
    cartId: "",
    currentProductPermalink: "",
    clickCookie: false,
    setCurrentType: (currentType) => set(() => ({ currentType })),
    setUserId: (userId) => set(() => ({ userId })),
    setCartId: (cartId) => set(() => ({ cartId })),
    setCurrentProductPermalink: (currentProductPermalink) =>
      set(() => currentProductPermalink),
    setClickCookie: (clickCookie) => set(() => ({ clickCookie })),
  }),
  { name: "wdb-state" }
);

export const useStore = create(store);
