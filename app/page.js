"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Banner from "../public/assests/Images/bannerecoomerce.jpg";
import { getproducts } from "@/Api/Fetchclient";
import Card from "./components/cards/Card";
export default function Home() {
  const [sort, setSort] = useState("asc");
  const [catg, setcatg] = useState();

  useEffect(() => {
    const respon = async () => {
      const reps = await getproducts(sort).then((resp) => {
        setcatg(resp?.data);
      });
    };
    respon();
  }, [sort]);

  return (
    <div>
      <Header />
      <div>
        <Image src={Banner} alt="Banner" className={styles.Banners} />
      </div>

      <div className={styles.allproducts}>
        <h2>All Products</h2>
        <div className={styles.srtDiv}>
          <select
            onChange={(e) => setSort(e.target.value)}
            className={styles.sortingDiv}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div className={styles.listproducts}>
          {catg?.map((item, id) => {
            return <Card item={item} />;
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
