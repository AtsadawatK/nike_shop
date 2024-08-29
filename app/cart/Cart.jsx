"use client"

import React, { useEffect } from 'react';
import Image from 'next/image'
import Nike1 from "../../assets/nike_1.png"
import { useSelector, useDispatch } from 'react-redux';
import { addProducts } from "../lib/cartSlice"
import { cartSlice } from '../lib/cartSlice';
export default function Cart() {
  const products = useSelector(state => state.cart.products);
  const allAmount = useSelector(state => state.cart.allAmount);
  const allQuantity = useSelector(state => state.cart.allQuantity);
  const dispatch = useDispatch();
  console.log(products)
  console.log(allAmount)

  


  return (
    <>

    <div class="text-white text-[40px] italic font-semibold pb-5 pl-[1.5%]">Cart : </div>
    <div class="flex mx-5 mb-5 border-2 overflow-hidden h-[100%] ">
    <div class="flex flex-[2] flex-col overflow-y-scroll  bg-white">
      <div class="h-[100%]">
      <div class="flex h-[10%] bg-white p-5 ">
          <div class="flex-[2]"> Name :</div>
          <div class="flex-1 flex justify-center">Quantity :</div>
          <div class="flex-1 flex justify-center">Price :</div>
          <div class="flex-1 flex justify-center">Total :</div>
          </div>
  

          {products.map(item => (
          
        
        <div key={item.id} class="flex h-[25%] bg-white p-5 border-t-2">
        <div class="flex flex-[2]">

          <div class=" flex-1 " >
          <Image 
        src={item.img}
        alt=""
        style={{ width: "80%", height: "auto" }}
      />
      </div>
      <div class="flex flex-col   flex-1 ">
          <div>{item.name}</div>
          <div class="text-[grey]">{item.gender}</div>
          <div class="text-[grey]">45 UK</div>
      </div>
      </div>

          <div class="flex-1 flex justify-center">{item.quantity}</div>
          <div class="flex-1 flex justify-center">{item.price}</div>
          <div class="flex-1 flex justify-center">${item.totalPrice}</div>
          <button onClick={() => dispatch(addProducts(item))}>Add</button>
        </div>
))}
        

        


        


      </div>
    </div>

    <div class="flex flex-[1] bg-white border-l-2">
      <div class="flex flex-col p-5 w-[100%]">
        <div class="w-[100%] border-b-2 pb-4">Summary :</div>
        <div class="w-[100%] flex justify-between py-5"> Total Items : <div>{allQuantity}</div></div>
        <div class="w-[100%] flex justify-between border-b-2 py-5">Shipping <div class="border-2 px-4 py-1">Standard - $20</div></div>
        <div class="w-[100%] flex justify-between py-5"> Total Costs : <div>{allAmount}</div></div>
        <div class="w-[100%] flex justify-center my-5 border-2 py-3 bg-[grey]">Check Outs</div>
      </div>
    </div>
      
            </div>






    </>
  )
}
