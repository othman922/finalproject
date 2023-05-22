import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet
} from "react-router-dom";
import Home from "./pages/home/Home";
import Speise from "./pages/speise/Speise";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/speise" element={<Speise />} />



      </Route>
    )
  )
  return (
    <main id="App" className=" m-0 " >
      <aside id="appNavigation" className="  bg-dark text-light text-center">
        navigation
      </aside>
      <RouterProvider router={router} />

      <footer id="appFooter" className="  bg-dark text-light text-center">
        Footer
      </footer>
    </main>

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
