import { useState, useEffect } from 'react';
import axios from 'axios';


// const BASE_URL = "https://api.storefront.wdb.skooldio.dev/categories"; // Adjusted base URL
const BASE_URL = import.meta.env.VITE_BASE_API

function useGetAllCategories() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/categories`);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if(!data.length){
      fetchData();
    }

    

  }, [BASE_URL]);

  return { data, loading, error };
}

export default useGetAllCategories;
