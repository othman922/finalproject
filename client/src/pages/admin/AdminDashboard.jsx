import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import {  Route, Routes, redirect, Link } from "react-router-dom";
import MenuManagement from "../../component/admin/MenuManagement";
import CategoryManagement from "../../component/admin/CategoryManagement";
import ReservationManagement from "../../component/admin/ReservationManagement";

import "./AdminDashboard.css"


export default function AdminDashboard() {
  const { loggedIn } = useContext(AuthContext);

  if (!loggedIn) {
    return redirect("/login");
  }

  return (
    <div className="card-one">
      <h1 className="title">Admin Dashboard</h1>
      <div className="content">
        <ul>
          <li>
            <Link to="/dashboard/menu">Menu Management</Link>
          </li>
          <li>
            <Link to="/dashboard/categories">Category Management</Link>
          </li>
          <li>
            <Link to="/dashboard/reservations">Reservation Management</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/menu" element={<MenuManagement />} />
        <Route path="/categories" element={<CategoryManagement />} />
        <Route path="/reservations" element={<ReservationManagement />} />
      </Routes>
    </div>
  )
}
