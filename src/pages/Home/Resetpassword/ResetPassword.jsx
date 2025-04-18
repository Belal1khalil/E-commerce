
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { object, string } from "yup";

export default function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

 async  function ResetPassword(values) {
   const loadingToastId = toast.loading("Waiting...")
    try {
        const options = {
            url:"https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
            method:"PUT",
            data:values,
        }
        const {data} = await axios.request(options)
        toast.success("Reset Password successfully")
        console.log(data)
    } catch (error) {
        toast.error(error.response.data.message)
    } finally {
        toast.dismiss(loadingToastId)
    }
  }


const validationSchema = object({
    email: string()
    .required("Email is Required")
    .email("Email is not valid"),

    newPassword: string()
    .required("Password is Required")
    .matches(
      passwordRegex,
      "Password should be at least 8 characters, include upper/lowercase letters, a number, and a special character"
    ),
})


const formik = useFormik({
   
    initialValues:{
         "email":"",
         "newPassword": ""
    },
    validationSchema,
    onSubmit:ResetPassword,

})


  return (
    <div className="flex items-center justify-center  px-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl  p-8 sm:p-10 border-2 border-primary-400">
        
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl shadow-inner">
            <i className="fa-solid fa-unlock-keyhole"></i>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mt-4">Reset Password</h2>
          <p className="text-slate-500 text-sm mt-1">Enter your email and new password to continue</p>
        </div>

        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          
    
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
               onBlur={formik.handleBlur}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-slate-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none transition"
            />
            {
                formik.errors.email && formik.touched.email && <p className="text-red-500  mt-1 text-sm">*{formik.errors.email}</p>
            }
           
          </div>


          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="newPassword"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="••••••••"
                className="w-full px-4 py-2 pr-10 border border-slate-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none transition"
              />
              {
                formik.errors.newPassword && formik.touched.newPassword && <p className="text-red-500  mt-1 text-sm">*{formik.errors.newPassword}</p>
              }
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-500 hover:text-primary-600"
              >
                <i className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white text-base font-semibold rounded-2xl shadow-lg transition duration-300"
          >
            Update Password
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Remember your password?{" "}
          <Link to="/login" className="text-primary-600 hover:underline font-medium">Back to Login</Link>
        </p>
      </div>
    </div>
  );
}



