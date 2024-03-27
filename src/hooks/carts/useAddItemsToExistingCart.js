import { useState } from "react";
import axios from "axios";

const BASE_URL = "https://api.storefront.wdb.skooldio.dev/carts"; // Adj
export default function useAddItemsToExistingCart(openModal) {
  const addItemToExistingCart = async (cartId, item) => {
    console.log("Add item to existing Cart Activated");
    try {
      const response = await axios.post(BASE_URL + `${cartId}/items`, {
        items: [item],
      });
      openModal();
      console.log("AddItem Successful", response.data);
    } catch (err) {
    } finally {
    }
  };

  //   return { cartId, loading, error, addItemToCart };
  return { addItemToExistingCart };
}
