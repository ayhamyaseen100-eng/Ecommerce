import { CircularProgress, Typography } from '@mui/material';
import { useQueries } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'

export default function Categories() {
    const getCategories = async()=>{

        const response = await axios.get(`${import.meta.env.VITE_BURL}/Categories`,{
            headers:{
                "Accept-Language":"en"// data in ENG
            }
        });
        return response.data;
    }
const {data,isLoading,isError,error} = useQueries({
    queryKey : ['catog'],
    queryFn:getCategories,
    staleTime:100 * 60 * 5
    
})
if(isLoading) return <CircularProgress />
if (isError) return <Typography>{error}</Typography>
  return (
    <div>
        {data.response.data.map( (Category)=><Box><Typography>{Category.name}</Typography></Box> )}
    </div>
   
  )
}
