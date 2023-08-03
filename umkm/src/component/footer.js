import React from "react";
import logo from "../images/logo.jpg";

export default function Footer() {
  return (
    <footer class="footer text-lg-start text-muted mt-5 text-center">
      <section class="d-flex justify-content-center justify-content-lg-between border-bottom p-4">
        <div class="d-none d-lg-block me-5">
          <span>Ikuti kami di media sosial:</span>
        </div>

        <div className="text-white">
          <a href="" class="link-secondary  me-4">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="" class="link-secondary me-4">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="" class="link-secondary me-4">
            <i class="bi bi-google"></i>
          </a>
          <a href="" class="link-secondary me-4">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="" class="link-secondary me-4">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="" class="link-secondary me-4">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section class="">
        <div class="text-md-start container mt-5 text-center">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <img
                src={logo}
                alt="logo"
                className="mb-3"
                width={200}
                height={50}
              />
              <p>
                Rasakan perbedaan nyata dengan produk organik berkualitas tinggi
                yang kami tawarkan
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">PRODUK</h6>
              <p>
                <a href="#!" class="text-reset">
                  Fitur
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Harga
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Sertifikasi
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">INFORMASI</h6>
              <p>
                <a href="#!" class="text-reset">
                  Perusahaan
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Karir
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Tentang beorganik
                </a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mb-md-0 mx-auto">
              <h6 class="text-uppercase fw-bold ">KONTAK</h6>
              <p>
                <i class="fas fa-home text-secondary "></i> Sukabumi, Kencana
                jati 20
              </p>
              <p>
                <i class="fas fa-envelope text-secondary "></i>
                beorganik2gmail.com
              </p>
              <p>
                <i class="fas fa-phone text-secondary "></i> (021) 555 6231
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        class="p-4 text-center text-white"
        style={{ backgroundcolor: "rgba(0, 0, 0, 0.025)" }}
      >
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="#">
          BEORGANIK{" "}
        </a>
      </div>
    </footer>
  );
}
