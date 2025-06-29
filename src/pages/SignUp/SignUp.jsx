import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { object, ref, string } from "yup";

export default function SignUp() {
  const [accoutExistError, setAccoutExist] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const navigate = useNavigate();

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const phoneRegex = /^(02)?01[0125][0-9]{8}$/;

  const validationSchema = object({
    name: string()
      .required("Name is Required")
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name must be at most 20 characters"),
    email: string().required("Email is Required").email("Email is not valid"),
    password: string()
      .required("Password is Required")
      .matches(
        passwordRegex,
        "Password should be at least 8 characters, include upper/lowercase letters, a number, and a special character"
      ),
    rePassword: string()
      .required("Confirm Password is Required")
      .oneOf([ref("password")], "Passwords must match"),
    phone: string()
      .required("Phone is Required")
      .matches(phoneRegex, "Only valid Egyptian phone numbers are accepted"),
  });

  async function SendDataToRegister(values) {
    const loadingToastId = toast.loading("Waiting...");
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/signup",
        method: "POST",
        data: values,
      };
      const { data } = await axios.request(options);
      if (data.message === "success") {
        console.log(data);
        toast.success("Account created successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setAccoutExist(error.response.data.message);
    } finally {
      toast.dismiss(loadingToastId);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: SendDataToRegister,
  });

  return (
    <div className="max-w-xl mx-auto  p-6 md:p-8 rounded-2xl  border-2 border-primary-400">
      <div className=" p-8 rounded-3xl w-full  ">
        <div className="text-center mb-6">
          <i className="fa-regular fa-circle-user text-5xl text-primary-600 mb-2"></i>
          <h1 className="text-3xl font-bold text-slate-700">Register Now</h1>
          <p className="text-slate-500 text-sm mt-1">
            Welcome back! Please fill all inputs.
          </p>
        </div>
      </div>

      <form className="space-y-5" onSubmit={formik.handleSubmit}>
        {/* Name */}
        <div>
          <label className="block mb-1 text-slate-700 font-medium text-sm">
            Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Type your name"
            className="form-control w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && (
            <p className="text-red-500 mt-1 text-sm">* {formik.errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-slate-700 font-medium text-sm">
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="form-control w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="text-red-500 mt-1 text-sm">* {formik.errors.email}</p>
          )}
          {accoutExistError && (
            <p className="text-red-500 mt-1 text-sm">* {accoutExistError}</p>
          )}
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block mb-1 text-slate-700 font-medium text-sm">
            Password:
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="form-control w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 pr-10"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-9 right-3 text-slate-500 hover:text-primary-600"
          >
            <i
              className={`fa-regular ${
                showPassword ? "fa-eye" : "fa-eye-slash"
              }`}
            ></i>
          </button>
          {formik.errors.password && formik.touched.password && (
            <p className="text-red-500 mt-1 text-sm">
              * {formik.errors.password}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label className="block mb-1 text-slate-700 font-medium text-sm">
            Confirm Password:
          </label>
          <input
            type={showRePassword ? "text" : "password"}
            name="rePassword"
            placeholder="Confirm password"
            className="form-control w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 pr-10"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <button
            type="button"
            onClick={() => setShowRePassword(!showRePassword)}
            className="absolute top-9 right-3 text-slate-500 hover:text-primary-600"
          >
            <i
              className={`fa-regular ${
                showRePassword ? "fa-eye" : "fa-eye-slash"
              }`}
            ></i>
          </button>
          {formik.errors.rePassword && formik.touched.rePassword && (
            <p className="text-red-500 mt-1 text-sm">
              * {formik.errors.rePassword}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 text-slate-700 font-medium text-sm">
            Phone:
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Type your phone"
            className="form-control w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phone && formik.touched.phone && (
            <p className="text-red-500 mt-1 text-sm">* {formik.errors.phone}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="btn bg-primary-700 hover:bg-primary-800 text-white px-6 py-2 rounded-xl shadow-md transition"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
