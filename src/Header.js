import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth, signOut } from "./firebase";
function Header() {
  const handleSignin = () => {
    if (user) {
      signOut(auth);
    }
  };
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="header">
      {/* logo */}
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      {/* seacrh-box */}
      <div className="header-search">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-search-icon" />
        {/* seacrh logo */}
      </div>
      {/* navbar */}
      <div className="header-nav">
        <Link to={!user && "/login"} style={{textDecoration:"none"}}>
          <div onClick={handleSignin} className="header-option">
            <span className="header-option-line-one">
              Hello {user?.email || "Guest"}{" "}
            </span>
            <span className="header-option-line-two">
              {" "}
              {user ? "Sign out" : "Sign in"}{" "}
            </span>
          </div>
        </Link>
        <Link to="/orders" style={{textDecoration:"none"}}>
        <div className="header-option">
         
            <span className="header-option-line-one">Returns </span>
            <span  className="header-option-line-two">
              & Orders{" "}
            </span>
      
          </div>
          </Link>
        <div className="header-option">
          <span className="header-option-line-one">Your </span>
          <span className="header-option-line-two">Prime </span>
        </div>
        <Link to="/checkout">
          <div className="header-option-basket">
            <ShoppingBasketIcon />
            <span className="header-option-line-two header-basket-count">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
