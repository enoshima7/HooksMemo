import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState({ message: null, loading: true });
  useEffect(() => {
    setData({
      message: null,
      loading: true,
    });
    fetch(url)
      .then((res) => res.text())
      .then((res) => {
        setData({
          message: res,
          loading: false,
        });
      });
  }, [url, setData]);
  return data;
};
