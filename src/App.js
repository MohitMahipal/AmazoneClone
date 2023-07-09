// import { Login } from '@mui/icons-material';
import React, { useEffect } from "react";
import { Link, Routes, Route } from "react-router";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header.js";
import Home from "./Home";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth, onAuthStateChanged } from "./firebase";
import WrapperPayment from "./WrapperPayment";
import Orders from "./Orders";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const promise = loadStripe('pk_test_51MjfEfSFonSD7huWPRl0D5j5KeSRZYUwvqCt0lYdGpV9KhmjtLYaqK8RZ7TuvOLxxGkdc9UDa4VIxlPx0xZJOR5L005Dquae78');
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        //logged in
        dispatch({
          type: 'SET_USER',
          user : authUser
        })

      }
      else {
        dispatch({
          type: 'SET_USER',
          user : null
        })
      }
    });
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<WrapperPayment />} />
        <Route path="/orders" element={<Orders />}/>

        <Route path="*" element={<h1>Pagenotfound</h1>} />
      </Routes>
    </div>
  );
}

export default App;


// firebase emulators:start