import { Link } from "react-router-dom";
import "../Home/Home.css";
import imagemPorto from "../../assets/bridge-porto-portugal.jpg";
import imagemPorto2 from "../../assets/porto-by-night-with-moon-portugal-europe.jpg";
import imagemLisboa from "../../assets/lisbon-8268841.jpg";
import { CardList } from "../../components/CardList";

export const Home = () => {
  return (
    <div>
      <div className="d-flex flex-column flex-lg-row gap-4 m-3 m-lg-5">
        <h2 className="flex-fill">Portugal para Developers</h2>

        <div className="d-flex flex-column">
          <p>
            Portugal atrai developers pelo clima agradável, segurança e custo de
            vida relativamente acessível (especialmente fora de Lisboa). O
            crescimento de cidades como Porto e o trabalho remoto permitem
            ganhar salários internacionais com melhor qualidade de vida. Além
            disso, o país tem boa integração para estrangeiros e comunidades
            tech em expansão.
          </p>

          <div className="mt-3">
            <Link to={`/artigo/7`} className="btn-custom">
              Leia mais <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>

      <div
        id="carouselExampleIndicators"
        className="carousel slide my-5 carousel-custom"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imagemPorto} className="d-block w-75 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img
              src={imagemPorto2}
              className="d-block w-75 mx-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={imagemLisboa}
              className="d-block w-75 mx-auto"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h1 className="mt-5 text-center">Veja nossos posts mais recentes</h1>
      <CardList />
    </div>
  );
};
