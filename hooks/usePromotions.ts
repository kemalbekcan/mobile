import { useEffect, useState, useCallback } from "react";
import AxiosInstance from "@/libs/axios";

type Promotion = {
  Title: string;
  ListButtonTextBackGroudColor?: string;
};

export function usePromotions() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await AxiosInstance.get("/promotions/list?Channel=PWA");
      setPromotions(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { promotions, error, loading };
}

export default usePromotions;
