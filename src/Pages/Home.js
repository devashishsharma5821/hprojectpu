import { useState } from "react";
import Meals from "../components/Meals/Meals";
import Header from "../components/Layout/Header";
import Cart from "../components/Cart/Cart";
import CartProvider from "../store/CartProvider";
import mealsImage from "../assets/meals.jpg";
import classes from "../components/Layout/Header.module.css";
import Footer from '../components/Layout/footer';

function Home() {
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
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
      <main>
        <Meals />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default Home;
