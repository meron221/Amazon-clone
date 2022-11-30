import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import flag from "./image/flag2.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
const Header = () => {
	const [{ basket, user }, dispatch] = useStateValue();
	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className="header">
			<Link to="/">
				<img
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
					className="header__logo"
				/>
			</Link>
			<div className="header_map">
				<FmdGoodIcon />
			</div>
			<div className="header__buton">
				<h5> Delivery to Wheaton</h5>
				<h5>MD 20901</h5>
			</div>

			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>

			<div>
				<Link to="/">
					<img src={flag} className="header__flag" />
				</Link>
			</div>
			<div className="header__icon">
				<ArrowDropDownIcon />
			</div>
			<div className="header__nav">
				<Link to={!user && "/login"}>
					<div onClick={handleAuthentication} className="header__option">
						<span className="header__optionLineOne">
							Hello {!user ? "Guest" : user?.email}
						</span>
						<span className="header__optionLineTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>

				<Link to="/orders" className="header__clearlink ">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">&Orders</span>
					</div>
				</Link>
				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
				<Link to="./checkout">
					<div className="header__optionBasket">
						<ShoppingCartIcon />
						<span className="header__optionLineTwo header__basketCount">
							{basket.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
