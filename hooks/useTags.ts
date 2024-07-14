import { useEffect, useState } from "react";
import AxiosInstance from "@/libs/axios";

export function useTags() {
  const [tags, setTags] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await AxiosInstance.get("/tags/list");
      setTags(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { tags, error, loading };
}

export default useTags;
