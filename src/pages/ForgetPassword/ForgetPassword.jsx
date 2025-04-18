import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react";
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

import { object, string } from "yup"


export default function ForgetPassword() {

    const [emailError, setEmailError] = useState();
    const navigate = useNavigate()
    
    async  function ForgetPassword(values) {
        const loadingToastId = toast.loading("Waiting...")
        try {
            const options = {
                url:"https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
                method:"POST",
                data:values,
            }
             let {data} = await axios.request(options)
              
              if(data.statusMsg === "success"){

                toast.success(data.message)
                localStorage.setItem("userEmail", values.email)
                setTimeout(()=>{
                    navigate("/verfiycode")
                }, 2000)
                
              }
                
                 
        } catch (error) {
            toast.error(error.response.data.message)
            setEmailError(error.response.data.message)
        } finally {
            toast.dismiss(loadingToastId)
        }      
    }

    const validationSchema = object({
        email: string().required("Email is Required").email("Email is not valid"),
    })

    const formik = useFormik({
        initialValues:{
            "email":""
        },
        validationSchema,
        onSubmit:ForgetPassword
    })
  return (
    <>
   
<div className="  flex items-center justify-center px-4">
  <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-primary-300 p-8 sm:p-10">
    <div className="text-center mb-8">
      <i className="fa-solid fa-key text-4xl text-primary-600 mb-3"></i>
      <h2 className="text-2xl font-bold text-slate-800">Reset Password</h2>
      <p className="text-slate-500 text-sm mt-1">Enter your email to receive a reset link</p>
    </div>

    <form className="space-y-6" onSubmit={formik.handleSubmit}>
      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
          Email Address
        </label>
        <input
    
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="email"
          placeholder="example@mail.com"
          className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none transition"
        />
        {
            formik.errors.email && formik.touched.email && (
                <p className="text-red-500 mt-1 text-sm">* {formik.errors.email}</p>
            )
        }
        {
            emailError && (
                <p className="text-red-500 mt-1 text-sm">* {emailError}</p>
            )
        }
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-xl shadow-sm transition duration-300"
      >
        Send Reset Link
      </button>
    </form>

  </div>
</div>

    </>
  )
}
