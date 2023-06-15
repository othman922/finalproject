import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Route, Routes, redirect, Link } from "react-router-dom";
import MenuManagement from "../../component/admin/MenuManagement/MenuManagement";
import CategoryManagement from "../../component/admin/CategoryManagement/CategoryManagement";
import EventManagement from "../../component/admin/EventManagement/EventManagement";
import ReservationManagement from "../../component/admin/ReservationManagement/ReservationManagement";
import OfferManagement from "../../component/admin/offerManagement/OfferManagement";

import "./AdminDashboard.css"


export default function AdminDashboard () {
  const { loggedIn } = useContext(AuthContext);

  if (!loggedIn) {
    return redirect("/login");
  }

  return (
    <div className="card-one">
      <h1 className="title">Admin Dashboard</h1>
      <div className="content d-flex justify-content-center">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/menu">
              Menu Management
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/categories">
              Category Management
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/events">
              Event Management
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/reservations">
              Reservation Management
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/offers">
              Offers Management
            </Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/menu" element={<MenuManagement />} />
        <Route path="/categories" element={<CategoryManagement />} />
        <Route path="/events" element={<EventManagement />} />
        <Route path="/reservations" element={<ReservationManagement />} />
        <Route path="/offers" element={<OfferManagement />} />
      </Routes>
    </div>
  )
}
