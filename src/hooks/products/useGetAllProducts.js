import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API;

export default function useGetAllProducts(path, paramsq={}) {
  const [allProducts, setAllProducts] = useState([]);
  const [loadingProduct, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    const fetchAllProducts = async () => {
      
      try {
        const response = await axios.get(`${BASE_URL}/products`, {
          params: paramsq
        });
        setAllProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    if (Object.keys(paramsq).length > 0) {
      fetchAllProducts();
    }
  }, [paramsq]);

  return { allProducts, loadingProduct };
}
