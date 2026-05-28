import { useState, useEffect } from "react";

export const useFetchArtigos = ({ limit }) => {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        const artigosLimitados = limit
          ? data.artigos.slice(0, limit)
          : data.artigos;

        setArtigos(artigosLimitados);
      });
  }, [limit]);

  return { artigos };
};
