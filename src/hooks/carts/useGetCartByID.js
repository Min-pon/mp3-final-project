import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API;

export default function useGetCartByID(id) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartByID = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/carts/${id}`);
        setCart(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!cart.length) {
      fetchCartByID();
    }
  }, []);

  return { cart, loading };
}
