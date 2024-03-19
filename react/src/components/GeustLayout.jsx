import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "./context/ContextProvider";
import "../index.css"

export default function GeustLayout(){
  const {token} = useStateContext();
  if(token){
    return <Navigate to="/"/>
  }
    return (
        <>
          <h1 className="text-3xl font-bold underline bg-dark">
            Hello world!
          </h1>
          <Outlet />
        </>
    )
}