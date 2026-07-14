import { Button, CircularProgress, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup"//تخاي التحقق يشتغل من yup
import * as yup from "yup"//عشان اعمل تحقق

import { Password } from '@mui/icons-material';
import { registerSchema } from '../../validation/RegisterSchema';
export default function Register() {

const [serverErrors,setServerErrors] = useState([]);// for rerender


    const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm(
        {
            resolver:yupResolver(registerSchema)//validation from  yup not react hook form
        }
    );
    const registerhand = async(data)=>{
        //  console.log(data);//بعد ما فحصت انو الداتا صح بتوصل بعمل تراي كاتش
try{
const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`, data)
console.log(response);
}
catch(err){
    serverErrors(err.response.data.errors);
}
    }
  return (
    <Box>
        <Typography variant="h2">
register
        </Typography>

     {serverErrors?.length>0 ? serverErrors.map((error)=><Typography>
        {error}
     </Typography>) : '' };
   
    <Box onSubmit={handleSubmit(registerhand)} component="form" sx={{marginTop:10,display:'flex', flexDirection:'column',gap:2}}>
        <TextField  fullWidth {...register("userName")}  label="userName"  variant="outlined"
        error={errors.userName}// for color
        helperText={errors.userName?.message}//massg error
        />
           <TextField fullWidth {...register("fullName")} label="fullName"  variant="outlined"
            error={errors.fullName}// for color
        helperText={errors.fullName?.message}
           />
            <TextField fullWidth {...register("email")} label="email"  variant="outlined"
             error={errors.email}// for color
        helperText={errors.email?.message}
            />
             <TextField fullWidth {...register("phoneNumber")} label="phoneNumber"  variant="outlined"
              error={errors.phoneNumber}// for color
        helperText={errors.phoneNumber?.message}
             />
                <TextField fullWidth {...register("password")} label="password"  variant="outlined"
                 error={errors.password}// for color
        helperText={errors.password?.message}
                />
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting? <CircularProgress />: 'register'}
                        </Button>
                        
    </Box>
    </Box>
  )
}
