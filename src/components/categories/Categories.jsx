import { CircularProgress, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'
import {Box} from '@mui/material';
import useCategories from '../../hooks/useCategories';
export default function Categories() {
   
const {data,isError,isLoading,error} = useCategories(); 

if(isLoading) return <CircularProgress />
if (isError) return <Typography>{error}</Typography>
  return (
    <div>
        {data.response.data.map( (category)=><Box> <Typography>{category.name}</Typography></Box>)}
    </div>
   
  )
}
//the beast way to get data from data beas