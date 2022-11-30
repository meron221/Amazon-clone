import React from "react";
import "./Home.css";
import Product from "./Product";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
	<img
		className="home__image"
		src="https://m.media-amazon.com/images/I/61cTQJfzyaL._SX3000_.jpg"
	/>,
	<img
		className="home__image"
		src="https://m.media-amazon.com/images/I/71r9TznZzpL._SX3000_.jpg"
		alt="banner"
	/>,

	<img
		className="home__image "
		src="https://m.media-amazon.com/images/I/61begWm33RL._SX3000_.jpg"
		alt="banner"
	/>,
	<img
		className="home__image "
		src="https://m.media-amazon.com/images/I/51nbLfLisdL._SX3000_.jpg"
		alt="banner"
	/>,
];

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				{/* <img
					className="home__image"
					src="https://m.media-amazon.com/images/I/61cTQJfzyaL._SX3000_.jpg"
				/> */}
				<AliceCarousel
					autoPlay
					autoPlayStrategy="none"
					autoPlayInterval={4500}
					animationDuration={4500}
					animationType="slideout"
					infinite
					touchTracking={false}
					disableDotsControls
					disableButtonsControls
					items={items}
				/>
				<div className="home__row">
					<Product
						id="49538094"
						title="Michael Kors Men's Slim Runway Stainless Steel Quartz Watch"
						price={175}
						rating={4}
						image="https://m.media-amazon.com/images/I/81OKsV5A-nL._AC_UX679_.jpg"
					/>
					<Product
						id="12321341"
						title="Bestand Laptop Stand Aluminum Cooling Computer Stand Holder for Apple MacBook Air Pro 11-16(Gray)"
						price={45.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/71iJm0nfX3L._AC_UY218_.jpg"
					/>
					<Product
						id="49538094"
						title="Apple Watch Series 8 [GPS + Cellular 41mm] Smart Watch"
						price={489.99}
						rating={5}
						image="https://m.media-amazon.com/images/G/01/apple/AMZ_FamilyStripe_Watch_S8_LTE_updated._CB610921573_.png"
					/>
				</div>

				<div className="home__row">
					<Product
						id="99903850"
						title="Amazon Brand - Stone $ Beam Bradbury Chesterfield Tufted Leather Sofa Couch, 92.9"
						price={1559.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/81B2-PyPDDL._AC_UL320_.jpg"
					/>

					<Product
						id="3254354345"
						title="Meihua Rectangle Glass Coffee Table for Living Room"
						price={150.59}
						rating={4}
						image="https://m.media-amazon.com/images/I/61yR5OP1jrL._AC_SX425_.jpg"
					/>
					<Product
						id="4903850"
						title="PaPaJet Tufted Upholstered Platform Bed Frame Queen Siz"
						price={729.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/71iSGJZWeQL._AC_UL320_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="4903851"
						title="Beats Solo3 Wireless On-Ear Headphones - Apple W1  Class 1 Bluetooth, Built-in Microphone - Rose Gold (Latest Model)"
						price={79.0}
						rating={4}
						image="https://m.media-amazon.com/images/I/416gcN9z1TL._AC_SY164_.jpg"
					/>

					<Product
						id="99903860"
						title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con"
						price={299.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/41C4JkSnyzL._AC_SY164_.jpg"
					/>
					<Product
						id="99903855"
						title="Wall Art Picture Print on Canvas High Definition Modern Home Decor 16x32inchx3pcs"
						price={69.98}
						rating={4}
						image="https://m.media-amazon.com/images/I/51RIR0Ut8QL._AC_SR320,320_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="4903850"
						title="Farmhouse Wall Art Aurora Scenery Painting On Canvas Wall Decorations for Living Room "
						price={29.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/61EOW9Pz2TL._AC_UL320_.jpg"
					/>
					<Product
						id="3254354345"
						title="Persian Area Rugs 2305 Gray 5x7 Abstract Area Rug, 5 ft x 7 ft"
						price={69.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/812YPGH9j4L._AC_UL320_.jpg"
					/>

					<Product
						id="3254354345"
						title="Computer Desk 63 inch Large Office Table for Home Office Desk Workstation Wide Metal, Black."
						price={169.59}
						rating={5}
						image="https://m.media-amazon.com/images/I/71ptLU5GIUL._AC_UL320_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="12321341"
						title="Folding Treadmill with Incline 2.5HP 12KM/H Electric Treadmill for Home Foldable, Indoor Home Gym Exercise Fitness"
						price={599.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/91ysKf1Ij3L._AC_UY218_.jpg"
					/>
					<Product
						id="49538114"
						title="Balloons Garland Arch Kit Sage Green Olive Matte Different Sizes Decor Happy Birthday Party Decorations"
						price={15.69}
						rating={4}
						image="https://m.media-amazon.com/images/I/71sqoz9ZZqL._AC_UL320_.jpg"
					/>
					<Product
						id="49538114"
						title="Balloons Garland Arch Kit Sage Green Olive Matte Different Sizes Decor Happy Birthday Party Decorations"
						price={17}
						rating={4}
						image="https://m.media-amazon.com/images/I/51GFlkYokjL._AC_SR160,160_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="90829332"
						title="Canvas Art Wall St George Church in Lalibela Ethiopia Paintings Vintage Prints Home Decor "
						price={99.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/71zWmhihQjL._AC_UL320_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
