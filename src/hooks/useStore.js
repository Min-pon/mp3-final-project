import { persist } from "zustand/middleware";
import create from "zustand";

const store = persist(
  (set) => ({
    currentType: "",
    userId: "",
    cartId: "0HrVDEPgTeJhswT42VHs",
    currentProductPermalink: "",
    totalItems: 0,
    cartItems: [],
    isUpdatedCart: false,
    setCurrentType: (currentType) => set(() => ({ currentType })),
    setUserId: (userId) => set(() => ({ userId })),
    setCartId: (cartId) => set(() => ({ cartId })),
    setCurrentProductPermalink: (currentProductPermalink) =>
      set(() => currentProductPermalink),
    setTotalItems: (totalItems) => set(() => ({ totalItems })),
    setCartItems: (cartItems) => set(() => ({ cartItems })),
    setIsUpdatedCart: (isUpdatedCart) => set(() => ({ isUpdatedCart })),
  }),
  { name: "wdb-state" }
);

export const useStore = create(store);
