"use client";
import { getindivialproduct } from "@/Api/Fetchclient";
import Footer from "@/app/components/layout/Footer/Footer";
import Header from "@/app/components/layout/Header/Header";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import style from "./product.module.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/app/Global/cartSlice";

function Indivialpage() {
  const router = useRouter();
  const [catg, setcatg] = useState();
  const Params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const respon = async () => {
      const reps = await getindivialproduct(Params?.id).then((resp) => {
        setcatg(resp?.data);
      });
    };
    respon();
  }, [Params?.id]);

  const handledata = () => {
    dispatch(addItemToCart(catg));
    router.push("/cart");
  };

  return (
    <>
      <Header />
      <div className={style.productmain}>
        <h1>{catg?.category}</h1>
        <div className={style.productDetailsDiv}>
          <div className={style.productleft}>
            <Image
              src={catg?.image}
              width="100"
              height="100"
              loader={({ src }) => catg?.image}
            />
          </div>
          <div className={style.productrgt}>
            <h1>{catg?.title}</h1>
            <p>{catg?.description}</p>

            <b>Rating: {catg?.rating?.rate}*</b>
            <span>Out of {catg?.rating?.count} people</span>
            <div className={style.priceDivv}> $ {catg?.price}</div>

            <button onClick={handledata}>Add to cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Indivialpage;
