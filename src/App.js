import React from "react";
import Home from "./pages/HomePage";
import Default from "./pages/DefaulPage";
import Cart from "./pages/CartPage";
import SingleProduct from "./pages/SingleProductPage";
import AboutPage from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<>
			<Navbar />
			<SideBar />
			<SideCart />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about/" component={AboutPage} />
				<Route path="/contact/" component={ContactPage} />
				<Route path="/products/" exact component={Products} />
				<Route path="/products/:id" component={SingleProduct} />
				<Route path="/cart/" exact component={Cart} />
				<Route component={Default} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
