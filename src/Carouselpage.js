import React from 'react';
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./Styles.css"

const Carouselpage = () => {
    return (
        <div>
          
    <Carousel>
  <Carousel.Item style={{paddingTop:"130px"}} className="slideimages">
    <img
      className="d-block w-100" 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2jBr4kz2PeY3NatedFpp3qhN_ab9iFwnlA&usqp=CAU" alt="First slide"
      // alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item className="slideimages2">
    <img
      className="d-block w-80"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2jBr4kz2PeY3NatedFpp3qhN_ab9iFwnlA&usqp=CAU"
     
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item className="slideimages2">
    <img
      className="d-block w-80"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFw4TVeMvTj9hbXaf64wqoHW7GByMpQD7anw&usqp=CAU"
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Carouselpage;