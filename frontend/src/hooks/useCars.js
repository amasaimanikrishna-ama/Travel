import { useState, useEffect } from 'react';
import { carApi } from '../services/carApi';

export function useCars(params) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    carApi.getAll(params)
      .then((res) => setCars(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [JSON.stringify(params)]);

  return { cars, loading, error };
}
