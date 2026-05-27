import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Resultados = () => {
  const location = useLocation();

  const search = new URLSearchParams(location.search).get("search") || "";

  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/artigos")
      .then((response) => response.json())
      .then((data) => setArtigos(data));
  }, []);

  const resultados = artigos.filter(
    (item) =>
      item.titulo.toLowerCase().includes(search.toLowerCase()) ||
      item.descricao.toLowerCase().includes(search.toLowerCase()) ||
      item.conteudo
        .replace(/<[^>]*>/g, "")
        .toLowerCase()
        .includes(search.toLowerCase()),
  );

  return (
    <div className="container my-4">
      <h2 className="mb-4">Resultados da pesquisa</h2>

      <p>Pesquisa: {search}</p>

      {resultados.length > 0 ? (
        resultados.map((artigo) => (
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
        ))
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </div>
  );
};
