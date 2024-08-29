"use client"


import React, { createContext, useCallback, useState, useRef } from 'react'
import Image from 'next/image'
import NikeLogo from "../../assets/nike_logo.png"
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Allproducts } from "../../dataset/data"

export default function Men() {



  return (
    <>
{/* <div class="flex justify-center items-center w-[100%] h-[100vh]">
  <div class="w-[80vw] h-[90vh] custom-bg-color shadow-[2px_0px_93px_-22px_rgba(110,110,110,0.79)] flex flex-col border-2">


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
        <div class="flex-[1] flex justify-center items-center">All Sneakers</div>
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
    </div> */}



    <div class="text-white text-[40px] italic font-semibold pb-5 pl-[1.5%]">Men Sneakers : </div>
    <div class=" flex-grow mx-5   overflow-auto mb-5">
      
            <div class="grid w-[100%]  grid-cols-6 gap-5   ">


    

 {Allproducts.filter(item => item.gender === "men").map((item, index) => (
  <div key={index} className="flex flex-col border-2 p-2 border-white bg-white h-[280px] cursor-pointer hover:border-[#040216]">
    <div className="bg-slate-200 w-[100%] h-[60%]">
      <Image 
        src={item.img}
        alt=""
        style={{ width: "100%", height: "100%" }}
      />
    </div>
    <div className="w-[100%] flex flex-col py-2">
      <div className="font-semibold">{item.name}</div>
      <div>{item.gender}</div>
      <div className="flex justify-between items-center">
        <div className="font-semibold text-[20px]">${item.price}</div>
      </div>
    </div>
  </div>
))} 


             


            </div>

    </div>
    
 {/*  </div>
</div> */}



    </>
  )
}
