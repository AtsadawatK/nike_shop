"use client"

import React from 'react'
import Image from 'next/image'
import NikeLogo from "../../../assets/nike_logo.png"
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Jordan1 from "../../../assets/nike_jordan1.png"
export default function ProductDetail() {
  return (
    <>
<div class="flex justify-center items-center w-[100%] h-[100vh]">
  <div class="w-[80vw] h-[90vh] custom-bg-color shadow-[2px_0px_93px_-22px_rgba(110,110,110,0.79)] flex flex-col overflow-hidden">
    
    <div class="navbar flex h-[100px] text-white">
      <div class="flex flex-[1] justify-around">
        <div class="flex-[1] flex justify-center items-center">
          <Image 
            src={NikeLogo}
            alt=""
            style={{
              width:"70%",
              height:"auto",
            }}
          />
        </div>
        <div class="flex-[1] flex justify-center items-center">Home</div>
        <div class="flex-[1] flex justify-center items-center">All Products</div>
        <div class="flex-[1] flex justify-center items-center">Men</div>
        <div class="flex-[1] flex justify-center items-center">Women</div>
      </div>
      
      <div class="flex flex-[1] justify-end">
        <div class="flex justify-center items-center px-10">
          <div class="flex items-center w-[200px] border-2 h-[40px] rounded-xl pl-2">
            <IoIosSearch style={{width:"30px", height:"30px"}}/> Search...
          </div>
        </div>
        <div class="relative flex justify-center items-center px-10">
          <IoCartOutline style={{width:"35px", height:"35px"}}/> Cart
          <div class="absolute top-[25%] right-[20%] rounded-full">
            <div class="w-[15px] h-[15px] rounded-full text-center text-[10px] bg-[red]">1</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="flex flex-grow">
      <div class="relative flex flex-col flex-[2]   items-center ">
      <div class="absolute top-[75%] left-[20%]">
      <Image 
            src={NikeLogo}
            alt=""
            style={{
              width:"50%",
              height:"auto",
            }}
          />
      </div>
        <div class="absolute bg-white h-[150px] w-[20px] right-[98%] top-[30%]">
        </div>
      <div class='absolute z-10 flex justify-center w-[65%]'>
          <Image 
          src={Jordan1}
          alt=""
          style={{width:"100%",heiht:"auto"}}
          
          />
        </div>
        <div class='absolute z-1 pt-[10%]'>
          <div class="text-[10rem]  text-white italic leading-[180px] font-semibold">" AIR</div>
          <div class="text-[10rem]  text-white italic leading-[180px] font-semibold">JORDAN "</div>
        </div>
      </div>
      <div class="flex flex-[1] flex-col items-start justify-center">
          <div class="italic text-white text-[50px] font-semibold py-10">NIKE AIR JORDAN</div>
          <div class="text-white text-[18px]">Men</div>
          <div class="text-white text-[24px]">Air Jordan 1 Retro</div>
          <div class="text-white text-[18px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s</div>
          
          <div class="flex justify-between items-center w-[80%] py-10">
          <div class="text-white text-[24px]">Size (UK) :</div>
          <div class="border-2 px-[10px] rounded-lg text-white">39</div>
          <div class="border-2 px-[10px] rounded-lg text-white">40</div>
          <div class="border-2 px-[10px] rounded-lg text-white">41</div>
          <div class="border-2 px-[10px] rounded-lg text-white">42</div>
          <div class="border-2 px-[10px] rounded-lg text-white">43</div>
          <div class="border-2 px-[10px] rounded-lg text-white">44</div>
          </div>
            
            <div class="flex py-5">
            <div class="flex border-2 px-4 text-white items-center"><IoCartOutline style={{width:"30px", height:"30px"}}/> ADD TO CART</div>
            <div class="italic text-white text-[30px] px-5 font-semibold">$420</div>
            </div>
  
      </div>
    </div>
    
  </div>
</div>



    </>
  )
}
