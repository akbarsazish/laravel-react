import { useEffect } from 'react';
import { Outlet, Navigate, Link } from 'react-router-dom';
import axiosClient from '../axios-client.js';
import {useStateContext} from '../context/ContextProvider.jsx';


export default function DefaultLayout(){
  const {user, token, setUser, setToken} = useStateContext();

  useEffect(()=>{
    axiosClient.get('/user')
    .then(({data})=> {
        setUser(data)
    })

}, []);

  
if (!token) {
  return <Navigate to="/login"/>
}

const onLogout = ev => {
  ev.preventDefault()
  axiosClient.post('/logout')
    .then(() => {
      setUser({})
      setToken(null)
    })
}

  
    return (
      <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </aside>
      <div className="content">
        <header>
          <div>
            Header
          </div>

          <div>
            {user.name}
            <button onClick={onLogout} className="btn-logout">Logout</button>
          </div>
        </header>
        <main>
          <Outlet/>
        </main>
        
          <div className="notification">
         
          </div>
        
      </div>
    </div>
    )
}
