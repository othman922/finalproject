/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { redirect } from "react-router-dom";

import "./AdminLogin.css"

export default function AdminLogin( { authenticate } ) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loggedIn } = useContext(AuthContext);



  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:9000/login", { email, password });
      console.log(response)
      if (response.status === 200) {
        authenticate();
        window.history.pushState({}, "", "/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loggedIn) {
    return redirect("/dashboard");
  }


  return (
    <div className="form-bg">
    <div className="container">
        <div className="row">
            <div className="col-md-offset-3 col-md-6" id="container">
                <form className="form-horizontal" onSubmit={handleLogin}>
                    <span className="heading">Log In</span>
                    <div className="form-group">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <i className="fa fa-user"></i>
                    </div>
                    <div className="form-group help">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <i className="fa fa-lock"></i>
                        <a href="#" className="fa fa-question-circle"></a>
                    </div>
                    <div className="form-group">
                        <div className="main-checkbox">
                            <input type="checkbox" value="None" id="checkbox1" name="check" />
                            <label htmlFor="checkbox1"></label>
                        </div>
                        <span className="text">Remember me</span>
                        <button type="submit" className="btn btn-default">log in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
)
}

