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
import About from "./pages/About";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Speise from "./pages/speise/Speise";
import Agb from "./pages/Agb/Agb";
import Datenschutz from "./pages/Datenschutz/Datenschutz";
import Impressum from "./pages/Impressum/Impressum";
import { Footer } from "./component/footer/Footer"
import { Header } from "./component/header/Header"

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
        <Route path="/about" element={<About />} />
        <Route path="/speise" element={<Speise />} />
        <Route path="/agb" element={<Agb />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} />

        <Route path="/login" element={<AdminLogin authenticate={authenticate} />} />
        {loggedIn && (
          <Route path="/dashboard/*" element={<AdminDashboard />} />
        )}
      </Route>
    )
  )
  return (
    <AuthContext.Provider value={{ loggedIn }}>
      <main id="App" className="" >
        <RouterProvider router={router} />
      </main>
    </AuthContext.Provider>
  )
}

const Root = () => {
  return (

    <>
      <section className="appHeader w-100">
        <Header />
      </section>
      <section className="appBody w-100">
        <Outlet />
      </section>
      <section className="appFooter   w-100">
        <Footer />
      </section>
    </>
  )
}

export default App
