import React from "react";
import Card from "./Card";
import Jumbotron from "./jumbotron";
import Navbar from "./navbar";
import Footer from "./Footer";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="d-flex flex-row justify-content-center gap-3">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<div className="text-center bg-darkgrey">
				<Footer />
			</div>
		</div>
	);
};

export default Home;