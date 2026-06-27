import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Register() {
    const {register,handleSubmit} = useForm();
    const REG = async(data)=>{
        //  console.log(data);//بعد ما فحصت انو الداتا صح بتوصل بعمل تراي كاتش
try{
const res = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register` , data)
console.log(res);
}
catch(err){
console.log(err.res.data);
}
    }
  return (
    <Box>

        <Typography variant="h2">
register
        </Typography>
   
    <Box onSubmit={handleSubmit(REG)} component="form" sx={{marginTop:10,display:'flex', flexDirection:'column',gap:2}}>
        <TextField  fullWidth {...register("userName")}  label="userName"  variant="outlined"/>
            <TextField fullWidth {...register("email")} label="email"  variant="outlined"/>
                <TextField fullWidth {...register("password")} label="password"  variant="outlined"/>
                       <TextField fullWidth {...register("phoneNumber")} label="phoneNumber"  variant="outlined"/>
                         <TextField fullWidth {...register("fullName")} label="fullName"  variant="outlined"/>
                        <Button type="submit">
                            Register
                        </Button>
                        
    </Box>
    </Box>
  )
}
