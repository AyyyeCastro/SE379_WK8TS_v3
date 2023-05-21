import { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:3000';

interface FetchResult{
  data: any; 
  loading: boolean; 
  error: boolean;
}

export const useFetch =(url: string): FetchResult => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // for future? refence:
  // message would be inferred as string, so no need to type it.
  // const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}${url}`);
        setData(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};
