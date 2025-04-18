import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import Home from "./pages/Home/Home"
import Layout from "./components/Layout/Layout"
import { Toaster } from "react-hot-toast"
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword"
import VerifyCode from "./pages/VerifyCode/VerifyCode"
import ResetPassword from "./pages/Home/Resetpassword/ResetPassword"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import GuestRoute from "./components/GuestRoute/GuestRoute"
import UserProvider from "./components/context/User.context"

function App() {

const router = createBrowserRouter([
 
  {
    path:"/", 
    element:
    (
   <ProtectedRoute>
     <Layout/>
   </ProtectedRoute>
    ), children: [
    {index:true, element:<Home/>},
  ]
  },
  {
   path:"/",
   element:(
    <GuestRoute>
      <Layout/>
    </GuestRoute>
   ),
   children:[
    {path:"signup", element:<SignUp/>},
    {path:"login", element:<Login/>},
    {path:"forgetpassword", element:<ForgetPassword/>},
    {path:"verfiycode", element:<VerifyCode/>},
    {path:"resetpassword", element:<ResetPassword/>},
   ]
  }
])

  return (
    <>
    <UserProvider>
       <RouterProvider router={router}/>
    </UserProvider>
    <Toaster position="top-right" />
    </>
  )


}

export default App
