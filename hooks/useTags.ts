import { useEffect, useState, useCallback } from "react";
import AxiosInstance from "@/libs/axios";

type Tag = {
  Id: string;
  Name: string;
  IconUrl: string;
};

export function useTags() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [error, setError] = useState<Error | null>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await AxiosInstance.get("/tags/list");
      setTags(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { tags, error, loading };
}

export default useTags;
