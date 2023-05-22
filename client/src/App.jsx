import { useState } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet
} from "react-router-dom";

import AuthContext from "./context/AuthContext";


import Home from "./pages/home/Home";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";


import Speise from "./pages/speise/Speise";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {

  const [loggedIn, setLoggedIn] = useState(false);

  const authenticate = () => {
    setLoggedIn(true);
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/speise" element={<Speise />} />

        <Route path="/login" element={<AdminLogin authenticate={authenticate} />} />
        {loggedIn && (
          <Route path="/dashboard" element={<AdminDashboard />} />
        )}
      </Route>
    )
  )
  return (
    <AuthContext.Provider value={{ loggedIn }}>
      <main id="App" className="row m-0" >
        <aside id="appNavigation" className="col-12 border bg-dark text-light text-center">
          navigation
        </aside>
        <RouterProvider router={router} />

        <footer id="appFooter" className="col-12 border bg-dark text-light text-center">
          Footer
        </footer>
      </main>
    </AuthContext.Provider>
  )
}

const Root = () => {
  return (
    <section id="appBody" className="container  ">
      <Outlet />
    </section>

  )
}

export default App
