"use client";
import React from "react";
import style from "./card.module.css";
import Image from "next/image";
import { deleteItemFromCart } from "@/app/Global/cartSlice";
import { useDispatch } from "react-redux";

function CartCard({ item }) {
  const dispatch = useDispatch();

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItemFromCart(itemId));
  };

  return (
    <div className={style.cartcardMain}>
      <div>
        <Image
          src={item?.image}
          className={style.cardimg2}
          width="100"
          height="100"
          loader={({ src }) => item?.image}
          alt="cart"
        />
      </div>
      <div className={style.cartcrdrgt}>
        <span>{item?.title}</span>
        <div>
          <b>$ {item?.price}</b>
          <button onClick={() => handleDeleteItem(item?.id)}>remove</button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
