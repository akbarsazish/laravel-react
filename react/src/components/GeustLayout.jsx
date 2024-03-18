import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "./context/ContextProvider";

export default function GeustLayout(){
  const {token} = useStateContext();
  if(token){
    return <Navigate to="/"/>
  }
    return (
        <>
        <h1>Guest layout </h1>
          <Outlet />
        </>
    )
}