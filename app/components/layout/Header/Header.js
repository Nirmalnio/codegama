'use client';
import React from 'react'
import Style from "./header.module.css"
import HeaderLogo from "../../../../public/assests/Images/codegama-logo.png"
import Image from 'next/image'
import cart from "../../../../public/assests/Images/carticon.png"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
function Header() {     

  const cartItems = useSelector((state) => state.cart.items);

    
    const router = useRouter()

    const navigate = (name) =>{
        router.push(`catagory/${name}`)
    }

  return (
    <div className={Style.headermain}>
        <nav className={Style.headermainDiv}>
            <div>
               <Link href="/"> <Image src={HeaderLogo}  alt='codegama' className={Style.HeaderLogo} /></Link>
            </div>

             <div className={Style.options}>
                   <ul className={Style.optionslist}>
                     <li onClick={()=>navigate("electronics")}>Electronics</li>
                     <li onClick={()=>navigate("jewelery")}>Jewelery</li>
                     <li onClick={()=>navigate("men's clothing")}>Men's clothing</li>
                     <li onClick={()=>navigate("women's clothing")}>Women's clothing</li>
                    <li> 
                        <div className={Style.cartitemnum}>{cartItems?.length}</div>
                       <Link href="/cart" > <Image src={cart} alt='cart'  /></Link>
                   </li>
                   </ul>

                   
             </div>
        </nav>
    </div>
  )
}

export default Header