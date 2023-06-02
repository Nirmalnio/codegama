"use client";
import Footer from "@/app/components/layout/Footer/Footer";
import Header from "@/app/components/layout/Header/Header";
import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams, useParams } from "next/navigation";
import style from "./catagary.module.css";
import { getCatagory } from "@/Api/Fetchclient";
import Card from "@/app/components/cards/Card";
function Catagories() {
  const [catg, setcatg] = useState();
  const Params = useParams();
  const [load,setload] = useState(false)

  useEffect(() => {
    setload(true)
    const respon = async () => {
      const reps = await getCatagory(Params?.name).then((resp) => {
        setcatg(resp?.data);
        setload(false)
      });
    };
    respon();
  }, [Params?.name]);

  return (
    <>
      <Header />
      <div className={style.catagpagemain}>
        <h1>{Params?.name}</h1>
      </div>
     {load?
         <div className={style.loaderDiv}>
           <span className={style.loader}></span>
         </div>
       : <div className={style.listproducts}>
        {catg?.map((item, id) => {
          return <Card item={item} />;
        })}
      </div>}

      <Footer />
    </>
  );
}

export default Catagories;
