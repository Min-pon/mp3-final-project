import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API;

export default function useGetAllProducts(query = "") {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/products${query}`);
        setAllProducts(response.data.data);
        console.log(response.status);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    if (!allProducts.length) {
      fetchAllProducts();
    }
  }, [allProducts]);

  return { allProducts, loading };
}
