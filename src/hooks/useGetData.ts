import { useState } from 'react';

const useGetData = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | unknown>();

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const result: T = await response.json();

      setData(result);
    } catch (err: unknown) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data: data,
    error,
    isLoading,
    fetchData,
  };
};

export default useGetData;
