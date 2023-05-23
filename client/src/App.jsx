import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';





function App () {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
      </Route>
    )
  )
  return (
    <main id="App" > 
      <RouterProvider router={router} />
    </main>

  )
}

const Root = () => {
  return (
    <section className="ottt">
      <Outlet />
    </section>

  )
}

export default App
