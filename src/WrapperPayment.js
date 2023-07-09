import React from "react";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51MjfEfSFonSD7huWPRl0D5j5KeSRZYUwvqCt0lYdGpV9KhmjtLYaqK8RZ7TuvOLxxGkdc9UDa4VIxlPx0xZJOR5L005Dquae78');
function WrapperPayment() {
  return (
      <Elements stripe={promise}>
          <Payment />
    </Elements>
  );
}

export default WrapperPayment;
