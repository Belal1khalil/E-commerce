import axios from "axios"
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"


export default function VerifyCode() {
      const [codeError, setCodeError] = useState()
      const [email, setEmail] = useState("")
      const navigate = useNavigate()

      useEffect(() => {
        const savedEmail = localStorage.getItem("userEmail")
        if (savedEmail) {
          setEmail(savedEmail)
        } else {
          navigate("/forgetpassword") // redirect if no email is saved
        }
      }, [navigate])
   
      async function Resetcode(values) {
        const loadingToastId = toast.loading("Waiting...")
         
        try {
            const options = {
                url:"https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
                method:"POST",
                data:values,
            }
            const {data} = await axios.request(options)
            console.log(data)
            if(data.status === "Success") {
                toast.success("Code is correct")
                setTimeout(()=>{
                    navigate("/resetpassword")
                }, 2000)
            }
          
        } catch (error) {
            toast.error(error.response.data.message)
            setCodeError(error.response.data.message)
        }
        finally {
            toast.dismiss(loadingToastId)
        }
    }
    // resend code function
    async function resendCode() {
        if (!email) return toast.error("Email not found")
        const loadingToastId = toast.loading("Waiting...")
        try {
          const { data } = await axios.post(
            "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
            { email }
          )
          if (data.statusMsg === "success") {
            toast.success("New Code has been sent to your email")
        }
        } catch (error) {
          toast.error(error.response.data.message)
          setCodeError(error.response.data.message)
        } finally {
          toast.dismiss(loadingToastId)
        }
      }

    const formik = useFormik({
        initialValues:{
            resetCode:"",
        },
        onSubmit:Resetcode,
    })
  return (
      <>
    <div className=" flex items-center justify-center px-4">
  <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-primary-300 p-8 sm:p-10">
    
    {/* Header */}
    <div className="text-center mb-8">
      <i className="fa-solid fa-envelope-circle-check text-4xl text-primary-600 mb-3"></i>
      <h2 className="text-2xl font-bold text-slate-800">Verify Your Email</h2>
      <p className="text-slate-500 text-sm mt-1">Enter the code we sent to your email address</p>
    </div>

    {/* Form */}
    <form className="space-y-6" onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="code" className="block text-sm font-medium text-slate-700 mb-1">
          Verification Code
        </label>
        <input
          name="resetCode"
          value={formik.values.code}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          placeholder="Enter 6-digit code"
          className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none transition"
        />
        {formik.errors.code && formik.touched.code && (
          <p className="text-red-500 mt-1 text-sm">* {formik.errors.code}</p>
        )}
        {
            codeError && (
                <p className="text-red-500 mt-1 text-sm">* {codeError}</p>
            )
        }
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-xl shadow-sm transition duration-300"
      >
        Verify Code
      </button>
    </form>

    {/* Footer */}
    <p className="text-center text-xs text-slate-400 mt-6" onClick={resendCode}>
      Didn&lsquo;t receive a code? <a href="#" className="text-primary-600 hover:underline">Resend</a>
    </p>
  </div>
</div>

      </>
  )
}
