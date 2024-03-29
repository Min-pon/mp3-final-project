import { useEffect, useState } from "react";
import axios from "axios";
import { useStore } from "../useStore";

const BASE_URL = import.meta.env.VITE_BASE_API;

export default function useGetCartByID(id) {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  const { setTotalItems, setCartItems } = useStore((state) => ({
    setTotalItems: state.setTotalItems,
    setCartItems: state.setCartItems,
  }));

  useEffect(() => {
    const fetchCartByID = async () => {
      if (!id) {
        return setLoading(false);
      }
      try {
        const response = await axios.get(`${BASE_URL}/carts/${id}`);
        setCart(response.data);
        setLoading(false);
        // setCartItems(response.data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!cart) {
      fetchCartByID();
    }
  }, []);

  return { cart, loading };
}
