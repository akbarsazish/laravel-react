import { Outlet, Navigate, Link } from 'react-router-dom';
import {useStateContext} from './context/ContextProvider.jsx';


export default function DefaultLayout(){
  const {user, token} = useStateContext();

  if(!token){
    return <Navigate to="/login" />
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
          
            <a  className="btn-logout" href="#">Logout</a>
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
