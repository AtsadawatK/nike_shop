"use client"

import React from 'react'
import Image from 'next/image'
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import NikeLogo from "../../assets/nike_logo.png"
import { useRouter,usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
export default function Navbar() {
  const products = useSelector(state => state.cart.products); // ดึงข้อมูลสินค้าในตะกร้าจาก Redux store
  const totalQuantity = products.length;
  const router = useRouter();
  const pathname = usePathname()
  const linkToHome = () => {
    router.push('/');
  };

  const linkToAllProducts = () => {
    router.push('/allproducts');
  };

  const linkToMenProducts = () => {
    router.push('/men');
  };


  const linkToWomenProducts = () => {
    router.push('/women');
  };

  const linkToCart = () => {
    router.push('/cart');
  };



  return (
    <>
    <div class="navbar flex h-[100px] text-white ">
      <div class="flex flex-[1] justify-around">
        <div class="flex-[1] flex justify-center items-center cursor-pointer" onClick={linkToHome}>
          <Image 
            src={NikeLogo}
            alt=""
            style={{
              width:"70%",
              height:"auto",
            }}
          />
        </div>
        <div class={`flex-[1] flex justify-center items-center cursor-pointer ${pathname === '/' ? 'underline underline-offset-4' : ''}`} onClick={linkToHome}>Home</div>
        <div class={`flex-[1] flex justify-center items-center cursor-pointer ${pathname === '/allproducts' ? 'underline underline-offset-4' : ''}`} onClick={linkToAllProducts}>All Sneakers</div>
        <div class={`flex-[1] flex justify-center items-center cursor-pointer ${pathname === '/men' ? 'underline underline-offset-4' : ''}`} onClick={linkToMenProducts}>Men</div>
        <div class={`flex-[1] flex justify-center items-center cursor-pointer ${pathname === '/women' ? 'underline underline-offset-4' : ''}`} onClick={linkToWomenProducts}>Women</div>
      </div>
      
      <div class="flex flex-[1] justify-end">
        <div class="flex justify-center items-center px-10">
          <div class="flex items-center w-[200px] border-2 h-[40px] rounded-xl pl-2">
            <IoIosSearch style={{width:"30px", height:"30px"}}/> Search...
          </div>
        </div>
        <div class=" flex justify-center items-center px-10 ">
          <div class="relative flex justify-center items-center cursor-pointer " onClick={linkToCart}>
          <IoCartOutline style={{width:"35px", height:"35px"}}/> Cart
          
          {/* <div class="absolute top-[0] left-[100%] rounded-full">
            <div class="w-[15px] h-[15px] rounded-full text-center text-[10px] bg-[red]">1</div>

          </div> */}

{totalQuantity > 0 && (
  <div class="absolute top-[0] left-[100%] rounded-full">
          <div class="w-[15px] h-[15px] rounded-full text-center text-[10px] bg-[red]">
            {totalQuantity}
          </div>
          </div>
        )}
          </div>
        </div>
      </div>
    </div>
    
    
    
    </>
  )
}
