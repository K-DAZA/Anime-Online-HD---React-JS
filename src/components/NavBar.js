import React from 'react'

export default function NavBar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark box-border">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <span className="hover:text-violet-400"> ☯ Anime Online HD </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="justify-content-center collapse navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link hover:text-violet-400 pb-0 text-sm hover:border-b-2 border-indigo-600"
                  aria-current="page"
                  href="/"
                >
                  Página principal ⭐
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link hover:text-violet-400 pb-0 text-sm hover:border-b-2 border-indigo-600"
                  href="/animes"
                >
                  Buscar anime 🔎
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link hover:text-violet-400 pb-0 text-sm hover:border-b-2 border-indigo-600"
                  href="/list"
                >
                  Lista de animes 
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
