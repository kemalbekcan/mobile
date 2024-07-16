import { useEffect, useState, useCallback } from "react";
import AxiosInstance from "@/libs/axios";

interface IDetails {
  ImageUrl: string;
  Title: string;
  Description: string;
}

export function usePromotionDetails(id?: string | string[]) {
  const [details, setDetails] = useState<IDetails | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await AxiosInstance.get("/promotions", {
        params: {
          Id: id,
        },
      });
      setDetails(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { details, error, loading };
}

export default usePromotionDetails;
