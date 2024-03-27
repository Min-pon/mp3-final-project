import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://api.storefront.wdb.skooldio.dev/products"; // Adjusted base URL

export default function useGetProductByPermalink(permalink) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("permalink", permalink);
        const response = await axios.get(`${BASE_URL}/${permalink}`);
        setProduct(response.data);
        console.log("product JSON", JSON.stringify(product));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [permalink]);

  return { product, loading, error };
}
