import React from "react";

const NavbarComponents = () => {
  return (
    <div>
      {/* navbar */}
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            NewsApp
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Indonesia
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Programming
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="#">
                  COVID-19
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Saved</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  />
              <button class="btn btn-outline-success" type="submit">
                Cari
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* navbar */}
    </div>
  );
};

export default NavbarComponents;
