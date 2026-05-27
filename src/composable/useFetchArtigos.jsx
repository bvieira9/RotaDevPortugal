import { useState, useEffect } from "react";

export const useFetchArtigos = ({ limit }) => {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/artigos?_limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setArtigos(data));
  }, [limit]);

  return { artigos };
};
