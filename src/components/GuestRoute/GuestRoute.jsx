import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/User.context";


// eslint-disable-next-line react/prop-types
export default function GuestRoute({children}) {
   const {token} = useContext(UserContext)
 if(!token) {
    return children;
 } 
 else {
    return <Navigate to="/"/>
 }
}
