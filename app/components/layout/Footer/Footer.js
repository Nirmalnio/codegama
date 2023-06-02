import React from 'react'
import style from "./footer.module.css"
import Image from 'next/image'
import logo from "../../../../public/assests/Images/codegama-logo.png"
function Footer() {
  return (
    <footer className={style.footermainDiv}>
        <div className={style.footerLeftDiv}>
            <Image src={logo} alt='codegama' className={style.footerLogo} />
            <small>Copyright 2023 @ codegama Pvt Ltd. All rights Reserved</small>
        </div>
        
        <div >
        <ul className={style.optionslist}>
                     <li>Electronics</li>
                     <li>Jewelery</li>
                     <li>Men's clothing</li>
                     <li>Women's clothing</li>
         </ul>

         <div className={style.termsDiv}>
            <small>
                Terms and conditions
            </small>
         </div>
        </div>


    </footer>
  )
}

export default Footer