import styles from "./styles.module.css";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<><div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Fashion</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>

      </nav>


      <Carousel fade indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/product4.jpeg"
            alt="First slide" />
          <Carousel.Caption className={styles.carouselcaption}>
            <h1>Find The Best Outfit</h1>

          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/cover.jpg"
            alt="Second slide" />

          <Carousel.Caption className={styles.carouselcaption}>
            <h1>Next Season Is Here</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/product3.jpeg"
            alt="Third slide" />

          <Carousel.Caption className={styles.carouselcaption}>
            <h1>Good Jackets&Coats</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <div className={styles.card}>
    
    <Card className={styles.cards}>
      <Card.Img src="assets/images/img2.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>MEN</Card.Title>
        <Card.Link href="http://localhost:5000/mens.html" className={styles.link}>Shop Now</Card.Link>
      </Card.ImgOverlay>
    </Card>
    <Card className={styles.cards}>
      <Card.Img src="assets/images/cover.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>WOMEN</Card.Title>
        <Card.Link href="http://localhost:5000/mens.html" className={styles.link}>Shop Now</Card.Link>
      </Card.ImgOverlay>
    </Card>
    <Card className={styles.cards}>
      <Card.Img src="assets/images/product4.jpeg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>KIDS</Card.Title>
        <Card.Link href="http://localhost:5000/mens.html" className={styles.link}>Shop Now</Card.Link>
      </Card.ImgOverlay>
    </Card>
      </div>

<div className="container">
        <h2 className={styles.h2} style={{textAlign:'center'}}>New Arrival</h2>
        <div className="container-fluid">
          <div className="row gy-3">
            <div className="col-sm">
              <div className="card h-100" style={{border: 'none'}}>
              <a href="#" className="stretched-link"> <img src="assets/images/p7.webp" className="card-img-top" alt="..."  /></a>
                <div className="card-body text-center">
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card h-100" style={{border: 'none'}}>
              <a href="#" className="stretched-link"> <img src="assets/images/p8.webp" className="card-img-top" alt="..."  /></a>
                <div className="card-body text-center">
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card h-100" style={{border: 'none'}}>
              <a href="#" className="stretched-link"> <img src="assets/images/p5.webp" className="card-img-top" alt="..." /></a>
                <div className="card-body text-center">
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card h-100" style={{border: 'none'}}>
              <a href="#" className="stretched-link"><img src="assets/images/p4.webp" className="card-img-top" alt="..." /></a>
                <div className="card-body text-center">
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*-----card section end-----*/}
        <div className="container-fluid">
          <div className="row gy-3">
            <div className="col-sm">
              <div className="card h-100" style={{border: 'none'}}>
              <a href="#" className="stretched-link"> <img src="assets/images/k10.webp" className="card-img-top" alt="..."  /></a>
                <div className="card-body text-center">
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card h-100" style={{border: 'none'}}>
              <a href="#" className="stretched-link"> <img src="assets/images/k2.webp" className="card-img-top" alt="..."  /></a>
                <div className="card-body text-center">
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card h-100" style={{border: 'none'}}>
              <a href="#" className="stretched-link"> <img src="assets/images/k3.webp" className="card-img-top" alt="..." /></a>
                <div className="card-body text-center">
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card h-100" style={{border: 'none'}}>
              <a href="#" className="stretched-link"><img src="assets/images/k9.webp" className="card-img-top" alt="..." /></a>
                <div className="card-body text-center">
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*----Card section----------*/}
        <div className="container-fluid">
          <div className="row gy-3">
            <div className="col-sm">
              <div className="card h-100" style={{border: 'none'}}>
              <a href="#" className="stretched-link"> <img src="assets/images/g4.webp" className="card-img-top" alt="..."  /></a>
                <div className="card-body text-center">
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card h-100" style={{border: 'none'}}>
              <a href="#" className="stretched-link"><img src="assets/images/g1.webp" className="card-img-top" alt="..." /></a>
                <div className="card-body text-center">
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card h-100" style={{border: 'none'}}>
              <a href="#" className="stretched-link"> <img src="assets/images/g6.webp" className="card-img-top" alt="..."  /></a>
                <div className="card-body text-center">
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card h-100" style={{border: 'none'}}>
                <a href="#" className="stretched-link"><img src="assets/images/g7.webp" className="card-img-top" alt="..." /></a>
                <div className="card-body text-center">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
      <div>
        <footer className="text-white text-center text-lg-start" style={{backgroundColor: 'lightgray'}}>
          {/* Grid container */}
          <div className="container p-4">
            {/*Grid row*/}
            <div className="row mt-4">
              {/*Grid column*/}
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 text-dark">About company</h5>
                <p className="text-dark">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti.
                </p>
                <p className="text-dark">
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                  molestias.
                </p>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 pb-1 text-dark">Search something</h5>
                <div className="form-outline form-white mb-4">
                  <input type="text" id="formControlLg" className="form-control form-control-lg" />
                  <label className="form-label text-dark" htmlFor="formControlLg" style={{marginLeft: '0px'}}>Search</label>
                  <div className="form-notch"><div className="form-notch-leading" style={{width: '9px'}} /><div className="form-notch-middle" style={{width: '48.8px'}} /><div className="form-notch-trailing" /></div></div>
                <ul className="fa-ul" style={{marginLeft: '1.65em'}}>
                  <li className="mb-3 text-dark">
                    <span className="fa-li"><i className="fas fa-home" /></span><span className="ms-2">Vishakapatnam Andrapradesh</span>
                  </li>
                  <li className="mb-3 text-dark">
                    <span className="fa-li"><i className="fas fa-envelope" /></span><span className="ms-2">gowrigembali944@gmail.com.com</span>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 text-dark">Opening hours</h5>
                <table className="table text-center text-dark">
                  <tbody className="font-weight-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>8am - 1am</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>9am - 10pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div className="text-center p-3 text-dark" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2022 Copyright:Hariprasad
            
          </div>
          {/* Copyright */}
        </footer>
      </div>
      </div>
      </>
	);
};

export default Main;

