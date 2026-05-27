import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../pages/Artigo/Artigo.css";

export const Artigo = () => {
  const { id } = useParams();
  const [artigo, setArtigo] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/artigos/${id}`)
      .then((res) => res.json())
      .then((data) => setArtigo(data));
  }, [id]);

  if (!artigo) return <p>Carregando...</p>;

  return (
    <div className="container my-4">
      <img
        src={artigo.imagem}
        className="img-fluid d-block w-75 my-5 mx-auto"
        alt={artigo.titulo}
      />

      <h1 className="mb-4">{artigo.titulo}</h1>

      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: artigo.conteudo }}
      />
    </div>
  );
};
