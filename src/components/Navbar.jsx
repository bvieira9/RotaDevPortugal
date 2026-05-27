import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/icons8-rota-64.png";
import { useState } from "react";

export const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim) return;

    navigate(`/resultados?search=${query}`);

    console.log("Texto pesquisado:", query);

    setQuery("");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={Logo}
            alt="Logo"
            className="d-inline-block align-text-center"
          />
          Rota<span className="fw-bold">DevPortugal</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/artigos">
                Artigos
              </NavLink>
            </li>
          </ul>

          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar por tag"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search"
            />

            <button className="btn btn-dark" type="submit">
              Pesquisar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
