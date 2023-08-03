import React from "react";
import about from "../images/about.jpg";

import hero from "../images/hero.jpg";
import hero2 from "../images/hero2.jpg";
import hero3 from "../images/hero3.jpg";
import balado from "../images/balado.jpg";
import lada from "../images/lada.jpg";
import cabai from "../images/cabai.jpg";
import kemiri from "../images/kemiri.jpg";
import peanut from "../images/peanut.jpg";
import oil from "../images/almondoil.jpg";
import jamu from "../images/jamu.jpg";
import macha from "../images/macha.jpg";

export default function Home() {
  return (
    <>
      <div className="vh-100 container top-0">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col">
            <h1 className="text-start text-black">
              Nikmati Kualitas Terbaik dari Alam
            </h1>
            <p className="text-start text-black">
              Mari bergabung dalam perjalanan menuju gaya hidup sehat dan alami
              dengan produk organik pilihan kami. Bersama-sama, mari jaga
              kesehatan dan keberlanjutan alam untuk generasi mendatang.
            </p>
            <button type="submit" class="btn btn-outline-dark w-50 fw-bold">
              Lebih Banyak
            </button>
          </div>

          <div
            id="carouselExampleControls"
            class="carousel slide col"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner rounded shadow-sm">
              <div class="carousel-item active">
                <img src={hero} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={hero2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={hero3} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div id="produk"></div>
      <div class="categories bg-body-tertiary container my-5 p-3">
        <h5 className="text-black">KATEGORI</h5>
        <div class="row mt-5  ">
          <div class="col  text-center ">
            <img src={lada} class="circle" alt="" />
            <p>SPICE IN JAR</p>
          </div>
          <div class="col text-center ">
            <img src={peanut} class="circle" alt="" />
            <p>BUTTER AND JAM</p>
          </div>
          <div class="col text-center ">
            <img src={jamu} class="circle" alt="" />
            <p>ORGANIC JAMU</p>
          </div>
          <div class="col text-center ">
            <img src={macha} class="circle" alt="" />
            <p>PREMIUM ORGANIC POWDER</p>
          </div>
          <div class="col text-center ">
            <img src={oil} class="circle" alt="" />
            <p>FACE AND HAIR OIL</p>
          </div>
        </div>
      </div>

      <div className="top container my-5">
        <h5>TOP PRODUK</h5>
        <p className="text-end">Lebih banyak </p>
        <div className="row mt-4">
          <div class="col">
            <div class="card h-100">
              <img src={balado} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">Bumbu Tabur Balado non MSG</h6>
                <p class="card-text">Rp. 17.000</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={lada} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">Lada Hitam Bubuk SLIM 55gr</h6>
                <p class="card-text">Rp. 20.000</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={kemiri} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">Kemiri Bubuk 60gr</h6>
                <p class="card-text">RP. 13.000</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={cabai} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">Cabai Rawit Bubuk SLIM 50gr</h6>
                <p class="card-text">Rp. 15.000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-4">
          <div class="col">
            <div class="card h-100">
              <img src={balado} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">Bumbu Tabur Balado non MSG</h6>
                <p class="card-text">Rp. 17.000</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={lada} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">Lada Hitam Bubuk SLIM 55gr</h6>
                <p class="card-text">Rp. 20.000</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={kemiri} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">Kemiri Bubuk 60gr</h6>
                <p class="card-text">RP. 13.000</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={cabai} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">Cabai Rawit Bubuk SLIM 50gr</h6>
                <p class="card-text">Rp. 15.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="col">
            <div class="card h-100">
              <img src={balado} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">Bumbu Tabur Balado non MSG</h6>
                <p class="card-text">Rp. 17.000</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={lada} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">Lada Hitam Bubuk SLIM 55gr</h6>
                <p class="card-text">Rp. 20.000</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={kemiri} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">Kemiri Bubuk 60gr</h6>
                <p class="card-text">RP. 13.000</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={cabai} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">Cabai Rawit Bubuk SLIM 50gr</h6>
                <p class="card-text ">Rp. 15.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="h-100 container mb-3 ">
        <div class="row g-0 shadow">
          <div class="col-md-5">
            <img src={about} class="d-block w-100" alt="..." />
          </div>
          <div class="col-md">
            <div class="card-body">
              <h5 class="card-title my-3 text-left">Tentang Kami!</h5>
              <p class=" lh-lg px-4 text-start">
                Selamat datang di <span className="fw-bold">BEOriginal</span>{" "}
                Kami adalah produsen bumbu makanan yang berdedikasi untuk
                menyajikan cita rasa istimewa dengan menggunakan bahan premium
                dan organik. Dengan komitmen kami terhadap kualitas terbaik dan
                keberlanjutan, kami hadir untuk menghadirkan pengalaman kuliner
                yang tak tertandingi bagi para pelanggan kami. <br />
                Didirikan dengan semangat untuk menghadirkan bumbu-bumbu alami
                yang autentik dan berkualitas, kami hanya memilih bahan-bahan
                yang terbaik dari sumber yang terpercaya dan ramah lingkungan.
                Proses produksi kami diawasi dengan ketat untuk memastikan
                setiap bumbu yang kami hasilkan memiliki keaslian dan kesegaran
                yang luar biasa.
                <br />
                Dari rempah-rempah eksotis hingga bumbu khas tradisional, setiap
                produk kami dirancang dengan penuh perhatian untuk menciptakan
                sentuhan rasa yang istimewa pada setiap hidangan yang Anda
                sajikan. Dengan dukungan Anda, kami berkomitmen untuk terus
                menghadirkan produk-produk berkualitas tinggi yang mengutamakan
                kelezatan alami dan keberlanjutan lingkungan. Selamat menikmati
                cita rasa sejati dengan
                <span className="fw-bold"> BEOriginal</span>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div id="tentang"></div>
      <div className="bg-body-tertiary container">
        <div className="my-4 p-4">
          <h5>Tentang BEORGANIK </h5>
          <h4 className="lh-lg">Mengapa Memilih Produk Organik?</h4>
        </div>
        <div class="bg-image shadow-1-strong text-whit e align-items-center justify-content-center mb-5 p-5 py-5 text-start">
          <p className="lh-lg mb-5 p-4 text-white ">
            Didirikan dengan semangat untuk menghadirkan bumbu-bumbu alami yang
            autentik dan berkualitas, kami hanya memilih bahan-bahan yang
            terbaik dari sumber yang terpercaya dan ramah lingkungan. Proses
            produksi kami diawasi dengan ketat untuk memastikan setiap bumbu
            yang kami hasilkan memiliki keaslian dan kesegaran yang luar biasa.
            <br />
            <br />
            Dari rempah-rempah eksotis hingga bumbu khas tradisional, setiap
            produk kami dirancang dengan penuh perhatian untuk menciptakan
            sentuhan rasa yang istimewa pada setiap hidangan yang Anda sajikan.
            Dengan dukungan Anda, kami berkomitmen untuk terus menghadirkan
            produk-produk berkualitas tinggi yang mengutamakan kelezatan alami
            dan keberlanjutan lingkungan.
          </p>
        </div>
        <div className="buttom"></div>
      </div>
      <div id="kontak" class="text-dark  container my-5">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <h1 class="mb-3">Kontak</h1>
            <form>
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="your-name" class="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="your-name"
                    name="your-name"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="your-surname" class="form-label">
                    Your Surname
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="your-surname"
                    name="your-surname"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="your-email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="your-email"
                    name="your-email"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="your-subject" class="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="your-subject"
                    name="your-subject"
                  />
                </div>
                <div class="col-12">
                  <label for="your-message" class="form-label">
                    Pesan
                  </label>
                  <textarea
                    class="form-control"
                    id="your-message"
                    name="your-message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div class="col-12">
                  <div class="row">
                    <div class="col-md-6">
                      <button type="submit" class="btn btn-dark w-100 fw-bold">
                        Kirim
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
