import { useEffect, useState } from "react";
import AxiosInstance from "@/libs/axios";

type Promotion = {
  Title: string;
  ListButtonTextBackGroudColor?: string;
};

export function usePromotions() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await AxiosInstance.get("/promotions/list?Channel=PWA");
      setPromotions(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { promotions, error, loading };
}

export default usePromotions;
