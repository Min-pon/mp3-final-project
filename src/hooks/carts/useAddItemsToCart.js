import { useState } from "react";
import axios from "axios";

const BASE_URL = "https://api.storefront.wdb.skooldio.dev/cart"; // Adjusted base URL

export default function useAddItemsToCart(openModal) {
  const addItemToCart = async (item) => {
    console.log("Add item to new Cart Activated");
    openModal();
    try {
      const response = await axios.post(BASE_URL, { items: [item] });
      console.log("AddItem Successful", response.data);
      openModal();
      return response.data.id && null;
    } catch (err) {
    } finally {
    }
  };

  //   return { cartId, loading, error, addItemToCart };
  return { addItemToCart };
}
