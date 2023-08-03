import React from "react";
import logo from "../images/logo.jpg";

export default function Navbar() {
  return (
    <nav
      id="navbar-example2"
      class="navbar navbar-expand-lg sticky-top shadow-sm"
    >
      <div class="container">
        <a class="navbar-brand" href="hero">
          <img src={logo} alt="logo" width={200} height={50} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse " id="navbarNav">
          <ul class="navbar-nav d-flex ms-auto gap-4">
            <li class="nav-item">
              <a href="#">Home</a>
            </li>
            <li class="nav-item">
              <a href="#produk">Produk</a>
            </li>
            <li class="nav-item">
              <a href="#tentang">Tentang</a>
            </li>
            <li class="nav-item">
              <a href="#kontak">Kontak</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
