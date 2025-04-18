
import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { UserContext } from "../../components/context/User.context";

export default function Login() {

   const {setToken} = useContext(UserContext)
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const  [AccoutError , setAccoutError] = useState();
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  async function handleSubmit(values) {
    const loadingToastId = toast.loading("Waiting...")
    try {
    const options = {
      url:"https://ecommerce.routemisr.com/api/v1/auth/signin",
      method:"POST",
      data:values,
    }
        let {data} = await axios.request(options)
        if(data.message === "success"){
          localStorage.setItem("token",data.token)
            setToken(data.token)
          toast.success(`Hello ${data.user.name}`)
           setTimeout(()=>{
            navigate("/")
           } , 1000)
        }

   } catch (error) {
      toast.error(error.response.data.message)
      setAccoutError(error.response.data.message)

   } finally {
      toast.dismiss(loadingToastId)
   }
        
  } 

    const validationSchema = object( {
      email: string().required("Email is Required").email("Email is not valid"),
      password: string().required("Password is Required").matches( passwordRegex, "Password should be at least 8 characters, include upper/lowercase letters, a number, and a special character"
      ),
    })

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
     validationSchema,
    onSubmit:handleSubmit,
  }) 

  return (

    <div className="flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border-2 border-primary-400">
        <div className="text-center mb-6">
          <i className="fa-regular fa-circle-user text-5xl text-primary-600 mb-2"></i>
          <h1 className="text-3xl font-bold text-slate-700">Login Now</h1>
          <p className="text-slate-500 text-sm mt-1">Welcome back! Please enter your credentials.</p>
        </div>

        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          {/* Email */}
          <div>
            <label className="block mb-1 text-slate-700 font-medium text-sm">Email:</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
              placeholder="you@example.com"
              name="email"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && <p className="text-red-500 mt-1 text-sm">*{formik.errors.email}</p>}
             {AccoutError && <p className="text-red-500 mt-1 text-sm">*{AccoutError}</p>}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1 text-slate-700 font-medium text-sm">Password:</label>
            <input
              type={showPassword ? "text" : "password"} 
              className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition pr-10"
              placeholder="••••••••"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password && <p className="text-red-500 mt-1 text-sm"> *{formik.errors.password}</p>}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-slate-500 hover:text-primary-600"
            >
              <i className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-primary-600" />
              <span className="text-slate-600">Remember me</span>
            </label>
            <Link to="/forgetpassword" className="text-primary-600 hover:underline">Forgot Password?</Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold shadow-md transition"
          >
            Sign In
          </button>
        </form>

        {/* Register link */}
        <p className="text-center text-sm text-slate-500 mt-6">
          Don&apos;t have an account? <Link to="/signup" className="text-primary-600 hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
}

