import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import "../index.css"

export default function GeustLayout(){
  const {token} = useStateContext();
  if(token){
    return <Navigate to="/"/>
  }
    return (
         <div id="guestLayout">
          <Outlet />
        </div>
    )
}