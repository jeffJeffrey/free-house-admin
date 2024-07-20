import "../vendor/bootstrap/css/bootstrap.min.css";
import "../assets/css/templatemo-villa-agency.css";
import "../assets/css/fontawesome.css";
import "../assets/css/flex-slider.css";
import "../assets/css/owl.css";
import "../assets/css/animate.css";
import "./Icons.css";
// import Header from "./header";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { retrieveLogement } from "../api";
const PropertyComponent = () => {
  const [properties, setProperties] = useState([]);
  const id = useParams().id;
  const [image1, setImage1] = useState("");
  const [image2 , setImage2] = useState("");
  const [image3 , setImage3] = useState("");

  useEffect(() => {
    retrieveLogement(id).then((data) => {
      //get media

      console.log(data);
      setProperties(data);
      setImage1(data.medias[0].lien);
      setImage2(data.medias[1].lien);
      setImage3(data.medias[2].lien);
      setProperties(data);
    });
  }, [id]);
  return (
    <>
      {/* <Header /> */}
      <div className="single-property section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-image">
                <div
                  id="demo"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#demo"
                      data-bs-slide-to="0"
                      className="active"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#demo"
                      data-bs-slide-to="1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#demo"
                      data-bs-slide-to="2"
                    ></button>
                  </div>

                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={image1}
                        alt="Los Angeles"
                        className="d-block w-100"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={image2}
                        alt="Chicago"
                        className="d-block w-100"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={image3}
                        alt="New York"
                        className="d-block w-100"
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </button>
                </div>
              </div>
              <div className="main-content">
                <span className="category">{properties.genre}</span>
                <h4>
                  {properties.titre} , {properties.localisation}
                </h4>
                <p>
                  <strong>{properties.titre}</strong>
                  <br />
                  <br />
                  {properties.description}
                </p>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Dolor <strong>almesit amet</strong>, consectetur
                      adipiscing elit, sed doesnt eiusmod tempor kinfolk tonx
                      seitan crucifix 3 wolf moon bicycle rights keffiyeh
                      snackwave wolf same vice, chillwave vexillologist
                      incididunt ut labore consectetur <code>adipiscing</code>{" "}
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info-table">
                <ul>
                  <li>
                    <h4>
                      {properties.salon}
                      <br /> <span>Nombre de Salon</span>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      {properties.chambre}
                      <br />
                      <span>Nombre de Chambre</span>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      {properties.douche}
                      <br />
                      <span>Nombre de Douche</span>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      {properties.cuisine}
                      <br />
                      <span>Nombre de cuisine</span>
                    </h4>
                  </li>
                  <li>
                    <i className="fa fa-contact"></i>
                    <h4>
                      <a href="/chat">
                        <span>Contacter</span>
                      </a>
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section best-deal">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="section-heading">
                  <h6>| Suggestion</h6>
                  <h2>Le Meilleur...</h2>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="tabs-content">
                  <div className="row">
                    <div className="nav-wrapper">
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="appartment-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#appartment"
                            type="button"
                            role="tab"
                            aria-controls="appartment"
                            aria-selected="true"
                          >
                            Appartment
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="villa-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#villa"
                            type="button"
                            role="tab"
                            aria-controls="villa"
                            aria-selected="false"
                          >
                            Villa House
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="penthouse-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#penthouse"
                            type="button"
                            role="tab"
                            aria-controls="penthouse"
                            aria-selected="false"
                          >
                            Penthouse
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="appartment"
                        role="tabpanel"
                        aria-labelledby="appartment-tab"
                      >
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="info-table">
                              <ul>
                                <li>
                                  Total Flat Space <span>540 m2</span>
                                </li>
                                <li>
                                  Floor number <span>3</span>
                                </li>
                                <li>
                                  Number of rooms <span>8</span>
                                </li>
                                <li>
                                  Parking Available <span>Yes</span>
                                </li>
                                <li>
                                  Payment Process <span>Bank</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <img src="assets/images/deal-01.jpg" alt="" />
                          </div>
                          <div className="col-lg-3">
                            <h4>All Info About Apartment</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, do eiusmod tempor pack incididunt ut labore
                              et dolore magna aliqua quised ipsum suspendisse.{" "}
                              <br />
                              <br />
                              Swag fanny pack lyft blog twee. JOMO ethical
                              copper mug, succulents typewriter shaman DIY
                              kitsch twee taiyaki fixie hella venmo after
                              messenger poutine next level humblebrag swag
                              franzen.
                            </p>
                            <div className="icon-button">
                              <a href="#">
                                <i className="fa fa-calendar"></i> Schedule a
                                visit
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="villa"
                        role="tabpanel"
                        aria-labelledby="villa-tab"
                      >
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="info-table">
                              <ul>
                                <li>
                                  Total Flat Space <span>250 m2</span>
                                </li>
                                <li>
                                  Floor number <span>26th</span>
                                </li>
                                <li>
                                  Number of rooms <span>5</span>
                                </li>
                                <li>
                                  Parking Available <span>Yes</span>
                                </li>
                                <li>
                                  Payment Process <span>Bank</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <img src="assets/images/deal-02.jpg" alt="" />
                          </div>
                          <div className="col-lg-3">
                            <h4>Detail Info About New Villa</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, do eiusmod tempor pack incididunt ut labore
                              et dolore magna aliqua quised ipsum suspendisse.{" "}
                              <br />
                              <br />
                              Swag fanny pack lyft blog twee. JOMO ethical
                              copper mug, succulents typewriter shaman DIY
                              kitsch twee taiyaki fixie hella venmo after
                              messenger poutine next level humblebrag swag
                              franzen.
                            </p>
                            <div className="icon-button">
                              <a href="#">
                                <i className="fa fa-calendar"></i> Schedule a
                                visit
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="penthouse"
                        role="tabpanel"
                        aria-labelledby="penthouse-tab"
                      >
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="info-table">
                              <ul>
                                <li>
                                  Total Flat Space <span>320 m2</span>
                                </li>
                                <li>
                                  Floor number <span>34th</span>
                                </li>
                                <li>
                                  Number of rooms <span>6</span>
                                </li>
                                <li>
                                  Parking Available <span>Yes</span>
                                </li>
                                <li>
                                  Payment Process <span>Bank</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <img src="assets/images/deal-03.jpg" alt="" />
                          </div>
                          <div className="col-lg-3">
                            <h4>Extra Info About Penthouse</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, do eiusmod tempor pack incididunt ut Kinfolk
                              tonx seitan crucifix 3 wolf moon bicycle rights
                              keffiyeh snackwave wolf same vice, chillwave
                              vexillologistlabore et dolore magna aliqua quised
                              ipsum suspendisse. <br />
                              <br />
                              Swag fanny pack lyft blog twee. JOMO ethical
                              copper mug, succulents typewriter shaman DIY
                              kitsch twee taiyaki fixie hella venmo after
                              messenger poutine next level humblebrag swag
                              franzen.
                            </p>
                            <div className="icon-button">
                              <a href="#">
                                <i className="fa fa-calendar"></i> Schedule a
                                visit
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyComponent;
