import React from "react";
import style from "./card.module.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/app/Global/cartSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";
function Card({ item }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handledata = () => {
    dispatch(addItemToCart(item));
    router.push("/cart");
  };
  return (
    <div className={style.cardDiv}>
      <Link href={`product/${item?.id}`}>
        <Image
          src={item?.image}
          className={style.cardimg}
          width="100"
          height="100"
          loader={({ src }) => item?.image}
        />
      </Link>

      <Link href={`product/${item?.id}`} style={{ textDecoration: "none" }}>
        {" "}
        <span>{item?.title}</span>
      </Link>

      <b>$ {item?.price}</b>
      <div className={style.addcart} onClick={handledata}>
        Add cart
      </div>
    </div>
  );
}

export default Card;
