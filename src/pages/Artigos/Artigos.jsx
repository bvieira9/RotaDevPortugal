import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Artigos = () => {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/artigos")
      .then((res) => res.json())
      .then((data) => setArtigos(data));
  }, []);

  return (
    <div className="container my-4">
      <h1 className="mb-4">Todos os artigos</h1>

      {artigos.map((artigo) => (
        <div key={artigo.id} className="mb-4">
          <div className="d-flex flex-column flex-md-row gap-3 h-100">
            <div>
              <Link to={`/artigo/${artigo.id}`}>
                <img
                  src={artigo.imagem}
                  alt={artigo.titulo}
                  className="img-fluid rounded"
                  style={{ maxWidth: "300px" }}
                />
              </Link>
            </div>

            <div className="d-flex flex-column h-100">
              <h4>{artigo.titulo}</h4>

              <p>{artigo.descricao}</p>

              <Link
                to={`/artigo/${artigo.id}`}
                className="btn btn-dark align-self-start mt-auto"
              >
                Ler mais
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
