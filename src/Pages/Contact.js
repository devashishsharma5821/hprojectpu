import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Cart from "../components/Cart/Cart";
import CartProvider from "../store/CartProvider";
import mealsImage2 from "../assets/meals2.jpg";
import classes from "../components/Layout/Header.module.css";
import Form from '../components/Form/Form';
import Footer from '../components/Layout/footer';

export default function Contact() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <div className={classes["main-image"]}>
        <img src={mealsImage2} alt="A table full of delicious food!" />
      </div>
     <Form />
     <Footer />
    </CartProvider>
  );
}
