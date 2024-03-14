import { useState, useEffect } from "react";
import axios from "axios";

export default function useGetAllCollections() {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get(
          "https://api.storefront.wdb.skooldio.dev/collections"
        );
        console.log(response.data);
        setCollections(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching collections:", error);
        setLoading(false);
      }
    };

    if (!collections.length) {
      fetchCollections();
    }
  }, [collections]);

  return { collections, loading };
}
