import { Link } from "react-router-dom";
import "../components/CardList.css";
import { useFetchArtigos } from "../composable/useFetchArtigos";

export const CardList = () => {
  const { artigos } = useFetchArtigos({ limit: 6 });

  return (
    <div className="container mt-5 row g-4">
      <div className="container mt-5">
        <div className="row g-4">
          {artigos.map((artigo) => (
            <div key={artigo.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <img
                  src={artigo.imagem}
                  className="card-img-top img-fluid"
                  alt={artigo.titulo}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{artigo.titulo}</h5>

                  <p className="card-text">{artigo.descricao}</p>

                  <Link
                    to={`/artigo/${artigo.id}`}
                    className="btn-artigo align-self-start mt-auto"
                  >
                    Leia mais
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
