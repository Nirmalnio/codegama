"use client";
import React from "react";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import style from "./cart.module.css";
import CartCard from "../components/cards/CartCard";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <Header />
      <div className={style.cartmaindiv}>
        <div>
          <h1>Cart</h1>

          <div className={style.cartlists}>
            {cartItems?.length === 0 ? (
              <h2 className={style.noitemtxt}>NO Items in cart</h2>
            ) : (
              cartItems?.map((item, i) => {
                return <CartCard item={item} i={i} />;
              })
            )}
          </div>
        </div>
        <div className={style.totalDiv}></div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
