import { useEffect, useState } from "react"
import axiosClient from "../axios-client";

export default function Users(){
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        getUser();
    }, []);

   const getUser = (()=> {
        setLoading(true)
        axiosClient.get('/users')
        .then((data)=> {
            console.log(dat
            setLoading(false)
        })
        .catch(()=> {
            setLoading(false)
        })
    })
    return (
        <>
           
        </>
    )
}