"use client";
import React from "react";
import style from "./card.module.css";
import Image from "next/image";
import { deleteItemFromCart,increaseQuantity,decreaseQuantity,calculateTotalAmount } from "@/app/Global/cartSlice";
import { useDispatch } from "react-redux";

function CartCard({ item }) {
  const dispatch = useDispatch();

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItemFromCart(itemId));
  };

  const handleIncreaseQuantity = itemId => {
    dispatch(increaseQuantity(itemId));
  };
  
  const handleDecreaseQuantity = itemId => {
    dispatch(decreaseQuantity(itemId));
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
              <div className={style.quantityDiv}>
                <div className={style.quantityBtn}>
                  <button className={item.quantity===0?style.disabled:""} onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                  <b>{item.quantity}</b>
                  <button onClick={() => handleIncreaseQuantity(item.id)} >+</button>
                </div>
            </div>
        <div className={style.btmsecDiv}>
          <b>$ {item?.price}</b>
          <button className={style.removebtn} onClick={() => handleDeleteItem(item?.id)}>remove</button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
