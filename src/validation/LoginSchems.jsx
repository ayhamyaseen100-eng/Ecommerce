 import * as yup from "yup"//عشان اعمل تحقق

 export const loginSchema = yup.object({//نبلش ب التحقق ل كل مدخل
            email:yup.string().required(),
            password:yup.string().required(),
        })