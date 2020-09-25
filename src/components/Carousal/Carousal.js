import Carousel from 'react-bootstrap/Carousel'
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Carousal.css';
//import Scrolldown from '../Scrolldown/Scrolldown';
import First from './1.jpg';
import Second from './2.jpg';
import Third from './slide7.webp';

class Carousal extends Component {
	render() {
		return(
			<div id="home">
				<Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
				  <Carousel.Item>
				    <img
				      className="d-block w-100 custom-img"
				      src={First}
				      alt="First slide"
				    />
				  </Carousel.Item>
				  <Carousel.Item>
				    <img
				      className="d-block w-100 custom-img"
				      src={Third}
				      alt="Third slide"
				    />
				  </Carousel.Item>
				  <Carousel.Item>
				    <img
				      className="d-block w-100 custom-img"
				      src={Second}
				      alt="Third slide"
				    />
				  </Carousel.Item>
				</Carousel>
				{/*<Scrolldown/>*/}
			</div>
			);
	}
}

export default Carousal;