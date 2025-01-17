import { Navbar } from "./components/ui/header/navbar";
import { Footer } from "./components/ui/footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/ui/body/home";
import { Shipping } from "./components/ui/body/shipping";
import { FAQ } from "./components/ui/body/faq";
import { Terms } from "./components/ui/body/terms";
import { Privacy } from "./components/ui/body/privacy";
import { useEffect, useState } from "react";
import {
	Electronics,
	Jewelery,
	MensClothing,
	WomensClothing,
} from "./components/ui/body/sort-by-collections";
import { Selected } from "./components/ui/body/selected";
import { SearchResult } from "./components/ui/body/search-result";
import { About } from "./components/ui/body/about";
import { AllImages } from "./components/ui/body/all-images";
import {
	PriceHiToLow,
	PriceLowToHi,
	Trending,
} from "./components/ui/body/sort-by-methods";
import { Nav_content } from "./components/ui/footer/nav_content";
function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getdata = async () => {
			const url = "https://fakestoreapi.com/products";
			const response = await fetch(url);
			const data1 = await response.json();
			setData(data1);
		};
		getdata();
	}, []);

	useEffect(() => {
		console.log(data);
	}, [data]);

	const mens = data.filter((item) => {
		return item.category === "men's clothing";
	});
	const womens = data.filter((item) => {
		return item.category === "women's clothing";
	});

	const electronics = data.filter((item) => {
		return item.category === "electronics";
	});

	const Jeweleries = data.filter((item) => {
		return item.category === "jewelery";
	});

	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home item={data} />} />
					<Route path="/about" element={<About />} />
					<Route path="/shipping" element={<Shipping />} />
					<Route path="/privacy" element={<Privacy />} />
					<Route path="/terms" element={<Terms />} />
					<Route path="/FAQ" element={<FAQ />} />
					<Route path="/allImages" element={<AllImages item={data} />} />
					<Route path="/jewelery" element={<Jewelery item={Jeweleries} />} />
					<Route path="/menscloth" element={<MensClothing item={mens} />} />
					<Route
						path="/womenscloth"
						element={<WomensClothing item={womens} />}
					/>
					<Route
						path="/elctronics"
						element={<Electronics item={electronics} />}
					/>
					<Route path="/trending" element={<Trending item={data} />} />
					<Route path="/price-hi-to" element={<PriceHiToLow item={data} />} />
					<Route path="/price-lo-to" element={<PriceLowToHi item={data} />} />
					<Route path="/selected" element={<Selected item={data} />} />
					<Route path="/searchresult" element={<SearchResult item={data} />} />
				</Routes>
				<Nav_content />
				<Footer />
			</Router>
		</>
	);
}

export default App;
