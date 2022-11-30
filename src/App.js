import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Footer from "./Footer";

const promise = loadStripe(
	"pk_test_51IOFapDqGqBsecWeLHztnQJoc4tHB48nlRT5KFidt7wnPEwHTNsVM748YL6zamMNQhAIP80swGsDPUSTEdx7RoDp00Ci6oUs2p"
);

function App() {
	const [{ user }, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="App">
				{/* <Header /> */}
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route
						path="/payment"
						element={
							<>
								<Header />
								<Elements stripe={promise}>
									<Payment />
									<Footer />
								</Elements>
							</>
						}
					/>
					<Route
						path="/"
						element={
							<>
								<Header />
								<Home />
								<Footer />
							</>
						}
					/>
					<Route
						path="/checkout"
						element={
							<>
								<Header />
								<Checkout />
								<Footer />
							</>
						}
					/>
					<Route
						path="/orders"
						element={
							<>
								<Header />
								<Orders />
								<Footer />
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
