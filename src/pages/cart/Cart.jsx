import axios from 'axios'
import React, { useEffect } from 'react'

export default function Cart() {
 

  const getitems = async ()=>{
    const response = await axiosInstance.get(`${import.meta.env.VIE_BURL}/Carts`,{
     
    });
    console.log(response);
  }
  useEffect( ()=>{
    getitems();
  },[])
  return (
    <div>Cart</div>
  )
}
