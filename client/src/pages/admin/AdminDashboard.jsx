import { useContext } from "react";
import {redirect} from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export default function AdminDashboard() {
  const { loggedIn } = useContext(AuthContext);

  if (!loggedIn) {
    return redirect("/login");
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
    </div>
  )
}
