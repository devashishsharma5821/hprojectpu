import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Cart from "../components/Cart/Cart";
import CartProvider from "../store/CartProvider";
import mealsImage3 from "../assets/meals3.webp";
import Image1 from '../assets/image1.jpg';
import Image2 from '../assets/image2.jpg';
import Image3 from '../assets/image3.webp';
import classes from "../components/Layout/Header.module.css";
import Footer from '../components/Layout/footer';

export default function About() {
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
        <img src={mealsImage3} alt="A table full of delicious food!" />
      </div>
      <div className={classes.services}>
        <h2>Our Services</h2>
        <div className={classes.services_container}>
          <div>
            <div className={classes.pic}>
            <img src={Image1} alt="A delicious Pizza...!" />
            </div>
            <h2>FoodCatering</h2>
            <p>
              We cater to parties curated at home for a birthday or house
              parties or simple team lunches at work that many look to indulge
              in. We undertake orders for small parties as well as bigger
              celebrations such as sangeets, weddings and anniversaries of
              sorts. Hiring a caterer saves an incredible amount of time and
              allows you to focus on other aspects of the party or organised
              event.
            </p>
          </div>
          <div>
          <div className={classes.pic}>
            <img src={Image2} alt="A delicious Pizza...!" />
            </div>
            <h2>Bulk Ordering</h2>
            <p>
              Now Order your favorite Tasty Food From TCK's extensive
              multicuisine menu by the kilo. Same Taste, Same Quality at
              Discounted Rates. Birthday Party? Calling guests over? Celebrating
              your Anniversary? Special Occasion? Be at ease. Simply place the
              order and Relax. It will reach you on time, conveniently packed..
              Its just like having a personal chef
            </p>
          </div>
          <div>
          <div className={classes.pic}>
            <img src={Image3} alt="A delicious Pizza...!" />
            </div>
            <h2>Food Delivery</h2>
            <p>
              Food delivery is a courier service in which a restaurant, store,
              or delivers food to a customer.
              An order is typically made either through a restaurant or grocer's
              website or mobile app, or through a food ordering company. The
              delivered items can include entrees, sides, drinks, desserts, or
              grocery items and are typically delivered in boxes or bags. 
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </CartProvider>
  );
}
