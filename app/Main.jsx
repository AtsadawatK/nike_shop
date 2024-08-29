"use client"


import React from 'react'
import Image from 'next/image'
import NikeLogo from "../assets/nike_logo.png"
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Jordan1 from "../assets/nike_jordan1.png"
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from "./lib/counterSlice"
export default function Main() {
const router = useRouter();
const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

const goToAllproducts = () => {
  router.push('/allproducts')
}

  return (
    <>
      
    
    
    
    <div class="flex flex-grow z-10">
      <div class="relative flex flex-col flex-[2]   items-center  justify-center ">
        <div class="absolute bg-white h-[150px] w-[20px] right-[98%] top-[30%]">
        </div>
      <div class='absolute z-10 flex justify-center w-[65%] pt-10'>
          <Image 
          src={Jordan1}
          alt=""
          style={{width:"100%",height:"auto"}}
          
          />
        </div>
        <div class='absolute z-1'>
          <div class="text-[10rem]  text-white italic leading-[180px] font-semibold"> AIR</div>
          <div class="text-[10rem]  text-white italic leading-[180px] font-semibold">JORDAN </div>
        </div>
      </div>
      <div class="flex flex-[1] flex-col items-start pt-20">
          <div class="italic text-white text-[80px] font-semibold ">JUST DO IT</div>
          <div class="italic text-white text-[35px] font-semibold ">All sneakers you want is here.</div>
          <div class="btn border-2 px-5 py-2 my-5" onClick={goToAllproducts}>Shope now</div>

          
         
            
           
  
      </div>
    </div>
    
 
    </>
  )
}
