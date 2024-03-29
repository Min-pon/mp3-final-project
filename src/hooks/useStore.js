import { persist } from "zustand/middleware";
import create from "zustand";
const store = persist(
  (set) => ({
    currentType: "",
    userId: "",
    cartId: "",
    currentProductPermalink: "",
    clickCookie: false,
    totalItems: 0,
    cartItems: [],
    isUpdatedCart: false,
    cartItemFromUpdateAPI: [],
    itemOptions: [],
    isUpdatedOption: false,
    setCurrentType: (currentType) => set(() => ({ currentType })),
    setUserId: (userId) => set(() => ({ userId })),
    setCartId: (cartId) => set(() => ({ cartId })),
    setCurrentProductPermalink: (currentProductPermalink) =>
      set(() => currentProductPermalink),
    setClickCookie: (clickCookie) => set(() => ({ clickCookie })),
    setTotalItems: (totalItems) => set(() => ({ totalItems })),
    setCartItems: (cartItems) => set(() => ({ cartItems })),
    setIsUpdatedCart: (isUpdatedCart) => set(() => ({ isUpdatedCart })),
    setCartItemFromUpdateAPI: (cartItemFromUpdateAPI) =>
      set(() => ({ cartItemFromUpdateAPI })),
    setItemOptions: (itemOptions) => set(() => ({ itemOptions })),
    setIsUpdatedOptions: (isUpdatedOption) => set(() => ({ isUpdatedOption })),
  }),

  { name: "wdb-state" }
);

export const useStore = create(store);
