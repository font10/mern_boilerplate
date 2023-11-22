import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/v1";

export const useGetPalasQuery = (axiosParams) => {
  const [palas, setPalas] = useState([])
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.request(axiosParams);
      setPalas(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  return { palas, error, loading, fetchData };
};

