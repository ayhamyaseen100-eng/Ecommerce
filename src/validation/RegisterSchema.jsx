 import * as yup from "yup"//عشان اعمل تحقق

 export const registerSchema = yup.object({//نبلش ب التحقق ل كل مدخل
     userName:yup.string().required().min(3).max(20),
            fullName:yup.string().required().min(3).max(20),
            email:yup.string().email().required(),
            phoneNumber:yup.string().required(),
            password:yup.string().required(),
        })