import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Login(){
   

    const onSubmit = async (event) => {
      event.preventDefault();
      // login logic
    }
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                <h1 className="title">Login into your account</h1>

                    <div className="alert">
                      <p>{}</p>
                    </div>
               
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button className="btn btn-block">Login</button>
                <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
                </form>
            </div>
            </div>
    )
}